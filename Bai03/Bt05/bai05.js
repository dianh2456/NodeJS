const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017');

async function main() {
    try {
        await client.connect();
        // Nếu Bài 4 dùng tên CSDL khác, truyền tên đó khi chạy.
        const dbName = process.argv[2];
        let db;
        if (dbName) {
            db = client.db(dbName);
        } else {
            const { databases } = await client.db('admin').admin().listDatabases();
            const matches = [];
            for (const item of databases) {
                if (['admin', 'local', 'config'].includes(item.name)) continue;
                const candidate = client.db(item.name);
                if (await candidate.listCollections({ name: 'students' }).hasNext()) {
                    matches.push(candidate);
                }
            }
            if (matches.length !== 1) {
                console.log('Hãy chạy: node bai05.js TEN_CSDL_BAI04');
                return;
            }
            db = matches[0];
        }
        const students = db.collection('students');
        console.log('Cơ sở dữ liệu:', db.databaseName);

        // Bước 1: Lọc và sắp xếp sinh viên theo điểm giảm dần.
        const list = await students.find({ diem: { $gte: 7 } })
            .sort({ diem: -1 }).toArray();
        console.log('\n--- SINH VIÊN CÓ ĐIỂM >= 7 ---');
        console.table(list.map(({ masv, hoten, diem }) => ({ masv, hoten, diem })));

        // Bước 2: Chọn một sinh viên có sẵn (hoặc nhập mã khi chạy).
        const sv = process.argv[3]
            ? await students.findOne({ masv: process.argv[3] })
            : await students.findOne({ masv: { $exists: true } }, { sort: { masv: 1 } });
        if (!sv) {
            console.log('Không tìm thấy sinh viên. Hãy kiểm tra dữ liệu Bài 4.');
            return;
        }
        console.log('\n--- TRƯỚC CẬP NHẬT ---');
        console.table([{ masv: sv.masv, hoten: sv.hoten, diem: sv.diem }]);
        const diemMoi = sv.diem === 9 ? 8.5 : 9;
        const result = await students.updateOne(
            { masv: sv.masv },
            { $set: { diem: diemMoi } }
        );
        console.log('Số sinh viên được tìm thấy:', result.matchedCount);
        console.log('Số sinh viên được cập nhật:', result.modifiedCount);

        // Bước 3: Kiểm tra thông tin sau cập nhật.
        const updated = await students.findOne({ masv: sv.masv });
        console.log('\n--- SAU CẬP NHẬT ---');
        console.table([ { masv: updated.masv, hoten: updated.hoten, diem: updated.diem } ]);
        if (result.modifiedCount === 1) console.log('Cập nhật điểm thành công!');
    } catch (error) {
        console.error('Lỗi:', error.message);
        process.exitCode = 1;
    } finally {
        await client.close();
    }
}
main();

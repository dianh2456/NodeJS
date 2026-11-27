const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main() {
    try {
        await client.connect();
        const db = client.db('qlsinhvien');
        const departments = db.collection('departments');
        const students = db.collection('students_join');
        console.log('Kết nối MongoDB thành công!');

        const khoa = [
            { makhoa: 'CNTT', tenkhoa: 'Công nghệ thông tin' },
            { makhoa: 'KT', tenkhoa: 'Kinh tế' }
        ];
        const sinhvien = [
            { masv: 'BT10_01', hoten: 'Nguyễn Lê Duy Anh', makhoa: 'CNTT' },
            { masv: 'BT10_02', hoten: 'Trần Gia Bảo', makhoa: 'KT' },
            { masv: 'BT10_03', hoten: 'Đoàn Mai Nhật Anh', makhoa: 'CNTT' },
            { masv: 'BT10_04', hoten: 'Rah Lan Thiên', makhoa: 'KT' }
        ];

        // Thêm hoặc cập nhật dữ liệu mẫu, không xóa dữ liệu cũ.
        for (const item of khoa) {
            await departments.updateOne({ makhoa: item.makhoa }, { $set: item }, { upsert: true });
        }
        for (const item of sinhvien) {
            await students.updateOne({ masv: item.masv }, { $set: item }, { upsert: true });
        }
        console.log('\n--- DANH SÁCH KHOA ---');
        console.table(await departments.find({ makhoa: { $in: khoa.map(k => k.makhoa) } }, { projection: { _id: 0 } }).toArray());
        console.log('\n--- DANH SÁCH SINH VIÊN ---');
        console.table(await students.find({ masv: { $in: sinhvien.map(s => s.masv) } }, { projection: { _id: 0 } }).sort({ masv: 1 }).toArray());

        const ketqua = await students.aggregate([
            { $match: { masv: { $in: sinhvien.map(s => s.masv) } } },
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'khoa'
                }
            },
            { $unwind: '$khoa' },
            { $project: { _id: 0, masv: 1, hoten: 1, makhoa: 1, tenkhoa: '$khoa.tenkhoa' } },
            { $sort: { masv: 1 } }
        ]).toArray();
        console.log('\n--- KẾT QUẢ LIÊN KẾT SINH VIÊN VÀ KHOA ---');
        console.table(ketqua);
    } catch (err) {
        console.error('Lỗi:', err.message);
        process.exitCode = 1;
    } finally {
        await client.close();
    }
}
main();
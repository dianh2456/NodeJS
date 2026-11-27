const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main() {
    try {
        await client.connect();
        const db = client.db('qlsinhvien');
        const students = db.collection('students_test');
        console.log('Kết nối MongoDB thành công!');


        const data = [
            { masv: 'BT09_01', hoten: 'Nguyễn Lê Duy Anh', tuoi: 19, diem: 8.5 },
            { masv: 'BT09_02', hoten: 'Trần Gia Bảo ', tuoi: 20, diem: 4 },
            { masv: 'BT09_03', hoten: 'Đoàn Mai Nhật Anh', tuoi: 19, diem: 7.5 },
            { masv: 'BT09_04', hoten: 'Phạm Quốc Huy', tuoi: 20, diem: 3.5 },
            { masv: 'BT09_05', hoten: 'Võ Ngọc Hân', tuoi: 19, diem: 9 }
        ];
        for (const sv of data) {
            await students.updateOne({ masv: sv.masv }, { $set: sv }, { upsert: true });
        }
        console.log('\nBƯỚC 1: Đã tạo hoặc cập nhật 5 sinh viên mẫu');
        console.table(await students.find({}, { projection: { _id: 0 } }).toArray());


        const one = await students.deleteOne({ masv: 'BT09_01' });
        console.log('\nBƯỚC 2: deleteOne - Số bản ghi đã xóa: ' + one.deletedCount);


        const many = await students.deleteMany({ diem: { $lt: 5 } });
        console.log('\nBƯỚC 3: deleteMany - Số bản ghi đã xóa: ' + many.deletedCount);

        console.log('\nBƯỚC 4: Tổng số bản ghi đã xóa: ' + (one.deletedCount + many.deletedCount));
        console.log('Danh sách sinh viên còn lại:');
        console.table(await students.find({}, { projection: { _id: 0 } }).toArray());
    } catch (err) {
        console.error('Lỗi:', err.message);
        process.exitCode = 1;
    } finally {
        await client.close();
    }
}
main();
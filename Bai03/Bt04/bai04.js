const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

async function main() {
    if (!url) {
        console.log('Chưa thiết lập MONGODB_URI!');
        return;
    }

    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        const danhSach = [{
                masv: 'CD-CNTT18A03',
                hoten: 'Nguyễn Lê Duy Anh',
                tuoi: 19,
                diem: 9
            },
            {
                masv: 'CD-CNTT18A01',
                hoten: 'Đoàn Mai Nhật Anh',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'CD-CNTT18A05',
                hoten: 'Trần Gia Bảo',
                tuoi: 20,
                diem: 8
            }
        ];

        const result = await students.insertMany(danhSach);

        console.log('Số sinh viên đã thêm:', result.insertedCount);

        const data = await students.find().toArray();

        console.log('\n=== DANH SÁCH SINH VIÊN ===');
        console.table(data.map(({ _id, ...sv }) => sv));

    } catch (err) {
        console.error('Lỗi:', err.message);
    } finally {
        await client.close();
        console.log('Đã đóng kết nối MongoDB!');
    }
}

main();
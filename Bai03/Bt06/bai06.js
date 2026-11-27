const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

const sinhVien = [
    { hoTen: 'Nguyễn Lê Duy Anh', mon1: 9, mon2: 8, mon3: 9 },
    { hoTen: 'Trần Gia Bảo', mon1: 7, mon2: 8, mon3: 6 },
    { hoTen: 'Đoàn Mai Nhật Anh ', mon1: 4, mon2: 5, mon3: 6 }
];

console.log('=== KẾT QUẢ HỌC TẬP ===');
sinhVien.forEach(sv => {
    const diemTB = tinhDiemTrungBinh(sv.mon1, sv.mon2, sv.mon3);
    console.log(`Họ tên: ${sv.hoTen}`);
    console.log(`Điểm trung bình: ${diemTB.toFixed(2)}`);
    console.log(`Xếp loại: ${xepLoai(diemTB)}`);
    console.log('------------------------------');
});
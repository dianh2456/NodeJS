const fs = require('fs');

const fileName = 'thongtin.txt';

const sinhVien = {
    hoTen: 'Nguyễn Lê Duy Anh',
    maSV: 'CD-CNTT18A03',
    lop: 'CD-CNTT18A'
};

console.log('====================================');
console.log('   CHƯƠNG TRÌNH QUẢN LÝ THÔNG TIN');
console.log('====================================');

const noiDung = `Họ tên: ${sinhVien.hoTen}\nMã sinh viên: ${sinhVien.maSV}\n`;

// Tạo tập tin
fs.writeFile(fileName, noiDung, 'utf8', (err) => {
    if (err) return console.error(err);

    console.log('[1] Tạo tập tin thành công.');

    // Đọc tập tin ban đầu
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) return console.error(err);

        console.log('\n[2] Thông tin ban đầu:');
        console.log(data);

        // Ghi nối thêm tên lớp
        fs.appendFile(fileName, `Lớp: ${sinhVien.lop}\n`, (err) => {
            if (err) return console.error(err);

            console.log('[3] Đã bổ sung tên lớp.');

            // Đọc lại tập tin sau cập nhật
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) return console.error(err);

                console.log('\n[4] Thông tin sau cập nhật:');
                console.log(data);

                console.table(sinhVien);

                console.log('====================================');
                console.log(' HOÀN THÀNH TẤT CẢ CÁC THAO TÁC');
                console.log('====================================');
            });
        });
    });
});
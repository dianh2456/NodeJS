# Bài 3 – BT06: Module xử lý điểm sinh viên

## 1. Mục tiêu
Sử dụng module trong Node.js để tính điểm trung bình ba môn và xếp loại học tập.

## 2. Cấu trúc thư mục
```text
NodeJS/
└── Bai03/
    └── Bt06/
        ├── bai06.js
        ├── xulyDiem.js
        ├── Readme.md
        └── images/
            └── 01_KetQua.png
```

## 3. Các bước thực hiện
1. Tạo `xulyDiem.js` với hàm `tinhDiemTrungBinh()` và `xepLoai()`.
2. Xuất hai hàm bằng `module.exports`.
3. Tạo `bai06.js`, dùng `require('./xulyDiem')` để nhập hai hàm.
4. Khai báo mảng gồm ba sinh viên mẫu, mỗi sinh viên có họ tên và điểm ba môn.
5. Duyệt mảng bằng `forEach()`, tính điểm trung bình và in kết quả bằng `console.log()`.

## 4. Quy tắc xếp loại
| Điểm trung bình | Xếp loại |
|---|---|
| Từ 8 trở lên | Giỏi |
| Từ 6,5 đến dưới 8 | Khá |
| Từ 5 đến dưới 6,5 | Trung bình |
| Dưới 5 | Yếu |

Điểm trung bình = (Môn 1 + Môn 2 + Môn 3) / 3. Kết quả hiển thị hai chữ số thập phân bằng `toFixed(2)`; xếp loại dựa trên điểm chưa làm tròn.

## 5. Hướng dẫn chạy
Mở thư mục Bt06 bằng VS Code, chọn Terminal > New Terminal và chạy:
```bash
node bai06.js
```
Không cần cài thêm thư viện npm.

## 6. Ảnh kết quả chạy
![Kết quả chạy bai06.js](images/01_KetQua.png)

Ảnh được dựng từ đầu ra chạy Node.js thực tế trong môi trường kiểm thử. Khi nộp bài, có thể thay bằng ảnh chụp Terminal trên máy của sinh viên. Nếu giáo viên yêu cầu ảnh từng bước, bổ sung ảnh hai file mã nguồn và lệnh chạy tại đây.

## 7. Kết quả cuối cùng
| Họ tên | Điểm trung bình | Xếp loại |
|---|---:|---|
| Nguyễn Minh An | 8.67 | Giỏi |
| Trần Hoàng Nam | 7.00 | Khá |
| Lê Thanh Mai | 5.00 | Trung bình |

Chương trình đã chạy thành công. Các ngưỡng 8, 6.5, 5 và dưới 5 cũng đã được kiểm thử.

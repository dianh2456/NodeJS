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
# BÀI 3 – BT06: MODULE XỬ LÝ ĐIỂM SINH VIÊN

## 1. Thông tin sinh viên

- Họ và tên: Nguyễn Lê Duy Anh
- Mã sinh viên: CD-CNTT18A03
- Lớp: CD-CNTT18A
- Môn học: NodeJS
- Bài thực hành: Bt06

## 2. Mục tiêu bài tập

- Làm quen với cách xây dựng module trong NodeJS.
- Sử dụng module.exports để xuất các hàm.
- Sử dụng require() để gọi các hàm từ module khác.
- Tính điểm trung bình của 3 môn học.
- Xếp loại học tập của sinh viên.
- Hiển thị kết quả trên Terminal.

## 3. Cấu trúc thư mục

    NodeJS/
    └── Bai03/
        └── Bt06/
            ├── bai06.js
            ├── xulyDiem.js
            ├── Readme.md
            └── images/
                └── 01_KetQua.png

## 4. Mô tả các tập tin

### 4.1. Tập tin xulyDiem.js

- Xây dựng hàm tính điểm trung bình của 3 môn.
- Xây dựng hàm xếp loại học tập.
- Sử dụng module.exports để xuất các hàm.

### 4.2. Tập tin bai06.js

- Sử dụng require() để gọi module xulyDiem.js.
- Khởi tạo dữ liệu của 3 sinh viên.
- Tính điểm trung bình và xếp loại từng sinh viên.
- Hiển thị thông tin trên Terminal.

## 5. Quy định xếp loại học tập

| Điểm trung bình | Xếp loại |
|---|---|
| Từ 8 trở lên | Giỏi |
| Từ 6,5 đến dưới 8 | Khá |
| Từ 5 đến dưới 6,5 | Trung bình |
| Dưới 5 | Yếu |

## 6. Các bước thực hiện

### Bước 1: Tạo module xử lý điểm

Tạo tập tin xulyDiem.js chứa hàm tính điểm trung bình và hàm xếp loại học tập.

### Bước 2: Xuất module

Sử dụng module.exports để các tập tin khác có thể sử dụng các hàm đã xây dựng.

### Bước 3: Sử dụng module

Tạo tập tin bai06.js và sử dụng require() để gọi module xulyDiem.js.

### Bước 4: Khởi tạo dữ liệu

Tạo danh sách gồm 3 sinh viên:

- Nguyễn Lê Duy Anh
- Trần Gia Bảo
- Đoàn Mai Nhật Anh

### Bước 5: Chạy chương trình

Mở Terminal tại thư mục Bt06 và thực hiện lệnh:

    node bai06.js

## 7. Kết quả thực hiện

| STT | Họ và tên | Điểm trung bình | Xếp loại |
|---|---|---|---|
| 1 | Nguyễn Lê Duy Anh | 8.67 | Giỏi |
| 2 | Trần Gia Bảo | 7.00 | Khá |
| 3 | Đoàn Mai Nhật Anh | 5.00 | Trung bình |

### Hình ảnh kết quả chạy chương trình

![Kết quả chạy bài 06](# BÀI 3 – BT06: MODULE XỬ LÝ ĐIỂM SINH VIÊN

## 1. Thông tin sinh viên

- Họ và tên: Nguyễn Lê Duy Anh
- Mã sinh viên: CD-CNTT18A03
- Lớp: CD-CNTT18A
- Môn học: NodeJS
- Bài thực hành: Bt06

## 2. Mục tiêu bài tập

- Làm quen với cách xây dựng module trong NodeJS.
- Sử dụng module.exports để xuất các hàm.
- Sử dụng require() để gọi các hàm từ module khác.
- Tính điểm trung bình của 3 môn học.
- Xếp loại học tập của sinh viên.
- Hiển thị kết quả trên Terminal.

## 3. Cấu trúc thư mục

    NodeJS/
    └── Bai03/
        └── Bt06/
            ├── bai06.js
            ├── xulyDiem.js
            ├── Readme.md
            └── images/
                └── 01_KetQua.png

## 4. Mô tả các tập tin

### 4.1. Tập tin xulyDiem.js

- Xây dựng hàm tính điểm trung bình của 3 môn.
- Xây dựng hàm xếp loại học tập.
- Sử dụng module.exports để xuất các hàm.

### 4.2. Tập tin bai06.js

- Sử dụng require() để gọi module xulyDiem.js.
- Khởi tạo dữ liệu của 3 sinh viên.
- Tính điểm trung bình và xếp loại từng sinh viên.
- Hiển thị thông tin trên Terminal.

## 5. Quy định xếp loại học tập

| Điểm trung bình | Xếp loại |
|---|---|
| Từ 8 trở lên | Giỏi |
| Từ 6,5 đến dưới 8 | Khá |
| Từ 5 đến dưới 6,5 | Trung bình |
| Dưới 5 | Yếu |

## 6. Các bước thực hiện

### Bước 1: Tạo module xử lý điểm

Tạo tập tin xulyDiem.js chứa hàm tính điểm trung bình và hàm xếp loại học tập.

### Bước 2: Xuất module

Sử dụng module.exports để các tập tin khác có thể sử dụng các hàm đã xây dựng.

### Bước 3: Sử dụng module

Tạo tập tin bai06.js và sử dụng require() để gọi module xulyDiem.js.

### Bước 4: Khởi tạo dữ liệu

Tạo danh sách gồm 3 sinh viên:

- Nguyễn Lê Duy Anh
- Trần Gia Bảo
- Đoàn Mai Nhật Anh

### Bước 5: Chạy chương trình

Mở Terminal tại thư mục Bt06 và thực hiện lệnh:

    node bai06.js

## 7. Kết quả thực hiện

| STT | Họ và tên | Điểm trung bình | Xếp loại |
|---|---|---|---|
| 1 | Nguyễn Lê Duy Anh | 8.67 | Giỏi |
| 2 | Trần Gia Bảo | 7.00 | Khá |
| 3 | Đoàn Mai Nhật Anh | 5.00 | Trung bình |

### Hình ảnh kết quả chạy chương trình

![Kết quả chạy bài 06](./images/01_KetQua.png)



## 8. Link nộp bài

https://github.com/dianh2456/NodeJS/tree/master/Bai03/Bt06)



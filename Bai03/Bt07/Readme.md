# BÀI TẬP 07 – WEB SERVER SỬ DỤNG HTTP VÀ URL

## 1. Thông tin sinh viên

- Họ và tên: Nguyễn Lê Duy Anh
- Mã sinh viên: CD-CNTT18A03
- Lớp: CD-CNTT18A
- Môn học: NodeJS
- Bài thực hành: Bài 3 – Bài tập 07

## 2. Yêu cầu bài tập

- Sử dụng module http và đối tượng URL.
- Tạo Web Server tại cổng 3001.
- Hiển thị lời chào theo tham số name.
- Tính tổng hai số thông qua tham số a và b.
- Xử lý lỗi khi thiếu tham số hoặc giá trị không hợp lệ.

## 3. Mô tả chương trình

Chương trình sử dụng các phương thức và chức năng:

- `require('http')`: Import module http.
- `require('url')`: Import đối tượng URL.
- `http.createServer()`: Khởi tạo Web Server.
- `url.pathname`: Xác định đường dẫn truy cập.
- `url.searchParams.get()`: Lấy giá trị tham số từ URL.
- `Number()`: Chuyển dữ liệu sang kiểu số.
- `Number.isFinite()`: Kiểm tra giá trị số hợp lệ.
- `trim()`: Loại bỏ khoảng trắng thừa.
- `res.end()`: Trả kết quả về trình duyệt.

Chương trình trả về mã trạng thái HTTP 400 khi dữ liệu không hợp lệ và HTTP 404 khi không tìm thấy đường dẫn.

## 4. Cấu trúc thư mục

    Bt07/
    ├── bai07.js
    ├── Readme.md
    └── images/
        ├── 01_Terminal.png
        ├── 02_Hello.png
        ├── 03_Sum.png
        ├── 04_LoiThamSo.png
        └── 05_LoiGiaTri.png

## 5. Các bước thực hiện

### Bước 1: Mở thư mục bài tập

Mở thư mục Bt07 bằng Visual Studio Code.

### Bước 2: Khởi động Web Server

Mở Terminal và thực hiện lệnh:

    node bai07.js

Web Server chạy tại địa chỉ:

    http://localhost:3001

**Hình ảnh khởi động Web Server:**

<img width="616" height="163" alt="01_Terminal" src="https://github.com/user-attachments/assets/b3eb5bfb-d87c-479d-a762-bc94b6203d79" />


### Bước 3: Kiểm tra chức năng hiển thị lời chào

Truy cập:

    http://localhost:3001/hello?name=Duy%20Anh

Kết quả:

    Xin chào Duy Anh

<img width="805" height="161" alt="02_Hello" src="https://github.com/user-attachments/assets/459d98f4-9e4a-46a7-bef6-2f5f69f2b769" />


### Bước 4: Kiểm tra chức năng tính tổng

Truy cập:

    http://localhost:3001/sum?a=10&b=20

Kết quả:

    Tổng = 30

<img width="475" height="120" alt="03_Sum" src="https://github.com/user-attachments/assets/df998acb-9a1b-4da8-a632-8a5e19083bb7" />


### Bước 5: Kiểm tra lỗi thiếu tham số

Truy cập:

    http://localhost:3001/sum?a=10

Kết quả:

    Lỗi: Thiếu tham số a hoặc b!

<img width="397" height="145" alt="04_LoiThamSo" src="https://github.com/user-attachments/assets/46e10858-9b68-4501-a6a6-c66a3f62a058" />


### Bước 6: Kiểm tra lỗi giá trị không hợp lệ

Truy cập:

    http://localhost:3001/sum?a=abc&b=20

Kết quả:

    Lỗi: Giá trị a hoặc b không hợp lệ!
<img width="418" height="134" alt="05_LoiGiaTri" src="https://github.com/user-attachments/assets/faa0b941-e04d-44c8-a6f8-b8a9e0cf9224" />



## 6. Kết quả thực hiện

| STT | Chức năng | Kết quả mong đợi |
|---|---|---|
| 1 | Khởi động Web Server | Cổng 3001 |
| 2 | Hiển thị lời chào | Xin chào Duy Anh |
| 3 | Tính tổng hai số | Tổng = 30 |
| 4 | Kiểm tra thiếu tham số | HTTP 400 |
| 5 | Kiểm tra giá trị không hợp lệ | HTTP 400 |
| 6 | Đường dẫn không tồn tại | HTTP 404 |

## 7. Kết luận

Bài thực hành xây dựng Web Server bằng NodeJS, sử dụng module http và đối tượng URL để xử lý tham số từ trình duyệt.

Chương trình thực hiện chức năng hiển thị lời chào, tính tổng hai số và xử lý các trường hợp dữ liệu không hợp lệ theo yêu cầu bài tập.

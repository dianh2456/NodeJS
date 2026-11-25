# BÀI TẬP 02 – TẠO WEB SERVER NODE.JS

## 1. Thông tin sinh viên

- Họ và tên: Điền họ tên sinh viên
- Mã sinh viên: CD-CNTT18A03
- Ngành: Công nghệ thông tin
- Môn học: NodeJS

## 2. Mục tiêu bài thực hành

Sử dụng module http trong Node.js để xây dựng Web Server hoạt động tại cổng 3000.

## 3. Các chức năng

- Trang chủ hiển thị lời chào và mã sinh viên.
- Trang /about hiển thị thông tin giới thiệu bản thân.
- Đường dẫn không tồn tại trả về mã trạng thái HTTP 404.
- Giao diện được thiết kế bằng HTML và CSS.

## 4. Các bước thực hiện

- Tạo tập tin bai02.js.
- Khai báo module http bằng require('http').
- Sử dụng http.createServer() để tạo Web Server.
- Kiểm tra đường dẫn bằng req.url.
- Thiết lập mã trạng thái bằng res.statusCode.
- Sử dụng server.listen(3000) để chạy Web Server.

## 5. Lệnh thực hiện

Kiểm tra phiên bản Node.js:

    node -v

Chạy chương trình:

    node bai02.js

Địa chỉ truy cập:

- Trang chủ: http://localhost:3000
- Giới thiệu: http://localhost:3000/about
- Kiểm tra lỗi: http://localhost:3000/404

## 6. Hình ảnh thực hiện

### 6.1. Mã nguồn chương trình

![Mã nguồn](01_Code.png)

### 6.2. Chạy chương trình trên Terminal

![Terminal](02_Terminal.png)

### 6.3. Giao diện trang chủ

![Trang chủ](03_TrangChu.png)

### 6.4. Giao diện giới thiệu bản thân

![Giới thiệu](04_About.png)

### 6.5. Giao diện lỗi HTTP 404

![Lỗi 404](05_404.png)

## 7. Kết quả cuối cùng

Kết quả cần đạt: Web Server hoạt động tại cổng 3000, hiển thị đúng nội dung trang chủ, trang giới thiệu bản thân và xử lý đường dẫn không tồn tại bằng mã trạng thái HTTP 404.
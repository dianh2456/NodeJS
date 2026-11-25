
# BÀI 04 – KẾT NỐI MONGODB VÀ THÊM SINH VIÊN

## 1. Thông tin sinh viên

- Họ và tên: Nguyễn Lê Duy Anh
- Mã sinh viên: CD-CNTT18A03
- Lớp: CD-CNTT18A
- Môn học: NodeJS
- Tài khoản GitHub: dianh2456

## 2. Yêu cầu bài thực hành

- Tạo tập tin bai04.js.
- Kết nối MongoDB đang chạy trên máy tính.
- Sử dụng database qlsinhvien.
- Sử dụng collection students.
- Thêm ít nhất 3 sinh viên bằng insertMany().
- Mỗi sinh viên gồm masv, hoten, tuoi, diem.
- Sử dụng find() để hiển thị danh sách sinh viên.
- Đóng kết nối sau khi hoàn thành.

## 3. Công cụ sử dụng

- Visual Studio Code.
- Node.js.
- MongoDB Community Server.
- MongoDB Compass.
- Thư viện MongoDB.
- GitHub.

## 4. Các bước thực hiện

### Bước 1: Tạo thư mục bài tập

```powershell
cd C:\CD-CNTT18A03
mkdir Bt04
cd Bt04
```

### Bước 2: Khởi tạo dự án NodeJS

```powershell
npm.cmd init -y
```

### Bước 3: Cài đặt thư viện MongoDB

```powershell
npm.cmd install mongodb
```

### Bước 4: Kiểm tra MongoDB Server

```powershell
Get-Service MongoDB
```

Kết quả: MongoDB có trạng thái Running.

![Kiểm tra MongoDB](./images/02_KetNoi.png)

### Bước 5: Tạo tập tin bai04.js

Sử dụng MongoClient để kết nối MongoDB thông qua địa chỉ:

mongodb://127.0.0.1:27017

Các chức năng chính:

- client.connect(): Kết nối MongoDB.
- client.db(): Chọn cơ sở dữ liệu.
- db.collection(): Chọn collection.
- insertMany(): Thêm nhiều sinh viên.
- find().toArray(): Truy vấn danh sách sinh viên.
- console.table(): Hiển thị dữ liệu dưới dạng bảng.
- client.close(): Đóng kết nối MongoDB.

### Hình ảnh mã nguồn

![Mã nguồn bai04.js](./images/01_Code.png)

### Bước 6: Chạy chương trình

```powershell
node bai04.js
```

Chương trình kết nối MongoDB, thêm sinh viên và hiển thị danh sách trên Terminal.

### Hình ảnh kết quả chạy chương trình

![Kết quả Terminal](./images/03_KetQua.png)

### Bước 7: Kiểm tra dữ liệu trong MongoDB Compass

- Mở MongoDB Compass.
- Kết nối mongodb://127.0.0.1:27017.
- Chọn database qlsinhvien.
- Chọn collection students.
- Chọn Documents để xem dữ liệu sinh viên.

### Hình ảnh dữ liệu trong MongoDB

![Dữ liệu MongoDB Compass](./images/04_MongoDB.png)

## 5. Danh sách sinh viên mẫu

| Mã sinh viên | Họ và tên | Tuổi | Điểm |
|---|---|---|---|
| CD-CNTT18A03 | Nguyễn Lê Duy Anh | 19 | 9.0 |
| CD-CNTT18A04 | Nguyễn Văn Minh | 20 | 8.5 |
| CD-CNTT18A05 | Trần Hoàng Nam | 19 | 8.0 |

## 6. Cấu trúc thư mục nộp bài

```text
NodeJS/
└── Bai03/
    └── Bt04/
        ├── bai04.js
        ├── Readme.md
        ├── package.json
        ├── package-lock.json
        └── images/
            ├── 01_Code.png
            ├── 02_KetNoi.png
            ├── 03_KetQua.png
            └── 04_MongoDB.png
```

## 7. Kết quả đạt được

- [x] Kết nối MongoDB thành công.
- [x] Sử dụng database qlsinhvien.
- [x] Sử dụng collection students.
- [x] Thêm 3 sinh viên bằng insertMany().
- [x] Hiển thị danh sách sinh viên bằng find().
- [x] Dữ liệu được lưu trong MongoDB.
- [x] Đóng kết nối sau khi hoàn thành.
- [x] Có hình ảnh minh chứng thực hành.

## 8. Kết luận

Qua bài thực hành, sinh viên hiểu được cách kết nối Node.js với MongoDB, cách thêm nhiều bản ghi bằng insertMany(), truy vấn dữ liệu bằng find() và kiểm tra dữ liệu bằng MongoDB Compass.

Bài thực hành đáp ứng các yêu cầu về kết nối, thêm dữ liệu, hiển thị danh sách sinh viên và đóng kết nối cơ sở dữ liệu.

---

**Sinh viên thực hiện: Nguyễn Lê Duy Anh**

**Mã sinh viên: CD-CNTT18A03**

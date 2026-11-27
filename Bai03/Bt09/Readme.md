# BÀI TẬP 09 – XÓA DỮ LIỆU TRONG MONGODB

## 1. Thông tin sinh viên

- **Họ và tên:** Nguyễn Lê Duy Anh
- **Mã sinh viên:** CD-CNTT18A03
- **Lớp:** CD-CNTT18A
- **Môn học:** NodeJS
- **Bài thực hành:** Bài 3 – Bài tập 09

## 2. Mục tiêu bài tập

Thực hành kết nối NodeJS với MongoDB, sử dụng các phương thức deleteOne(), deleteMany() và find() để xóa dữ liệu và kiểm tra kết quả.

## 3. Nội dung thực hiện

- Kết nối MongoDB tại địa chỉ mongodb://127.0.0.1:27017.
- Sử dụng database qlsinhvien.
- Sử dụng collection riêng students_test.
- Thêm hoặc cập nhật 5 sinh viên mẫu.
- Sử dụng deleteOne() để xóa sinh viên theo mã sinh viên.
- Sử dụng deleteMany() để xóa các sinh viên có điểm dưới 5.
- Hiển thị số bản ghi đã xóa.
- Sử dụng find() để hiển thị danh sách sinh viên còn lại.

## 4. Công nghệ sử dụng

- NodeJS
- JavaScript
- MongoDB
- MongoDB Compass
- Visual Studio Code
- GitHub

## 5. Dữ liệu sinh viên ban đầu

| Mã sinh viên | Họ và tên | Tuổi | Điểm |
|---|---|---:|---:|
| BT09_01 | Nguyễn Lê Duy Anh | 19 | 8.5 |
| BT09_02 | Trần Gia Bảo | 20 | 4 |
| BT09_03 | Đoàn Mai Nhật Anh | 19 | 7.5 |
| BT09_04 | Phạm Quốc Huy | 20 | 3.5 |
| BT09_05 | Võ Ngọc Hân | 19 | 9 |

## 6. Các lệnh thực hiện

### 6.1. Cài đặt thư viện MongoDB

```bash
npm install mongodb
```

### 6.2. Chạy chương trình

```bash
node bai09.js
```

### 6.3. Xóa một sinh viên theo mã sinh viên

```javascript
students.deleteOne({ masv: 'BT09_01' });
```

Sinh viên bị xóa: Nguyễn Lê Duy Anh.

### 6.4. Xóa các sinh viên có điểm dưới 5

```javascript
students.deleteMany({ diem: { $lt: 5 } });
```

Các sinh viên bị xóa:

- Trần Gia Bảo – 4 điểm.
- Phạm Quốc Huy – 3.5 điểm.

### 6.5. Hiển thị danh sách sinh viên còn lại

```javascript
students.find({}).toArray();
```

## 7. Hình ảnh thực hiện

### 7.1. Mã nguồn chương trình bai09.js

![Mã nguồn chương trình](images/01_Code.png)

### 7.2. Kết nối MongoDB và thêm 5 sinh viên mẫu

![Danh sách 5 sinh viên](images/02_ThemSinhVien.png)

### 7.3. Kết quả thực hiện deleteOne() và deleteMany()

![Kết quả xóa sinh viên](images/03_KetQua.png)

### 7.4. Kiểm tra dữ liệu trong MongoDB Compass

![Kết quả MongoDB Compass](images/04_Compass.png)

## 8. Kết quả cuối cùng

| Nội dung | Số lượng |
|---|---:|
| Số sinh viên ban đầu | 5 |
| Số sinh viên xóa bằng deleteOne() | 1 |
| Số sinh viên xóa bằng deleteMany() | 2 |
| Tổng số sinh viên đã xóa | 3 |
| Số sinh viên còn lại | 2 |

### Danh sách sinh viên còn lại

| Mã sinh viên | Họ và tên | Tuổi | Điểm |
|---|---|---:|---:|
| BT09_03 | Đoàn Mai Nhật Anh | 19 | 7.5 |
| BT09_05 | Võ Ngọc Hân | 19 | 9 |

## 9. Kết luận

Chương trình đã kết nối thành công với MongoDB, thêm dữ liệu sinh viên mẫu, thực hiện xóa sinh viên theo mã và điều kiện điểm số.

Kết quả kiểm tra trong MongoDB Compass còn lại 2 sinh viên, phù hợp với yêu cầu bài thực hành.


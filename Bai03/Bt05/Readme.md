# Bài 5 – Truy vấn và cập nhật dữ liệu MongoDB

## 1. Mục tiêu
Sử dụng collection `students` đã tạo ở Bài 4 để lọc, sắp xếp và cập nhật điểm sinh viên.

## 2. Cấu trúc bài tập
- `bai05.js`: mã nguồn thực hành.
- `Readme.md`: mô tả, hướng dẫn và vị trí ảnh minh chứng.

## 3. Chuẩn bị và chạy
Mở thư mục Bt05 trong VS Code. Đảm bảo MongoDB đang chạy và đã thực hiện Bài 4.

```bash
npm install mongodb
node bai05.js
```
Chương trình tự tìm cơ sở dữ liệu có collection `students`. Nếu có nhiều cơ sở dữ liệu hoặc không thể tự tìm, chỉ định tên CSDL của Bài 4:

```bash
node bai05.js TEN_CSDL_BAI04
```
Có thể thêm mã sinh viên thực tế (kiểu chuỗi) sau tên CSDL để chọn người cần cập nhật. Mặc định chương trình chọn một sinh viên có sẵn theo thứ tự mã.

## 4. Các lệnh thực hiện

### Lọc sinh viên có điểm từ 7 trở lên
```js
students.find({ diem: { $gte: 7 } })
```
`$gte` chọn điểm lớn hơn hoặc bằng 7.

### Sắp xếp theo điểm giảm dần
```js
students.find({ diem: { $gte: 7 } }).sort({ diem: -1 }).toArray()
```
`-1` là thứ tự giảm dần.

### Cập nhật điểm theo mã sinh viên
```js
students.updateOne({ masv: sv.masv }, { $set: { diem: diemMoi } })
```
`updateOne()` cập nhật một bản ghi; `$set` thay đổi trường điểm mà không thay thế toàn bộ bản ghi. Điểm mới là 9 (hoặc 8.5 nếu điểm cũ đã là 9).

### Kiểm tra sau cập nhật
```js
students.findOne({ masv: sv.masv })
```

## 5. Kết quả dự kiến
- Danh sách chỉ chứa sinh viên có điểm từ 7 trở lên, theo thứ tự giảm dần.
- Hiển thị điểm trước và sau cập nhật, cùng số bản ghi được thay đổi.
- Thông báo cập nhật thành công khi thay đổi được một bản ghi.

## 6. Ảnh minh chứng
Chụp ảnh thật sau khi chạy, lưu cùng thư mục với README theo các tên sau. Bỏ dấu chú thích HTML quanh các liên kết để hiển thị ảnh trên GitHub.

### 6.1. Mã nguồn
<!-- ![Mã nguồn](01_Code.png) -->

### 6.2. Lọc và sắp xếp
<!-- ![Lọc và sắp xếp](02_LocSapXep.png) -->

### 6.3. Kết quả cập nhật
<!-- ![Kết quả cập nhật](03_KetQua.png) -->

## 7. Kết luận
Bài thực hành sử dụng find(), $gte, sort(), updateOne(), $set và findOne() trên collection students của Bài 4. Không tạo lại hoặc xóa dữ liệu cũ.

const http = require('http');

const hoTen = 'Nguyễn Lê Duy Anh';
const maSV = 'CDCNTT18A03';
const lop = 'CD-CNTT18A';

function giaoDien(noiDung) {
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>Student Portal</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: #eef2f7;
                color: #142b49;
            }

            header {
                background: #142b49;
                color: white;
                padding: 20px 8%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            nav a {
                color: white;
                text-decoration: none;
                margin-left: 20px;
            }

            .card {
                max-width: 650px;
                margin: 50px auto;
                background: white;
                padding: 40px;
                border-radius: 16px;
                box-shadow: 0 5px 20px #00000010;
                text-align: center;
            }

            .avatar {
                font-size: 60px;
                background: #e1edff;
                width: 100px;
                height: 100px;
                line-height: 100px;
                border-radius: 50%;
                margin: auto;
            }

            p {
                line-height: 1.8;
                color: #64748b;
            }

            .btn {
                display: inline-block;
                padding: 13px 25px;
                background: #2563eb;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                margin-top: 15px;
            }

            .btn:hover {
                background: #1d4ed8;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                text-align: left;
            }

            td {
                padding: 15px;
                border-bottom: 1px solid #ddd;
            }

            footer {
                text-align: center;
                color: #64748b;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <header>
            <b>STUDENT PORTAL</b>
            <nav>
                <a href="/">Trang chủ</a>
                <a href="/about">Giới thiệu</a>
            </nav>
        </header>

        <div class="card">
            ${noiDung}
        </div>

        <footer>
            © 2026 Student Portal - Bài tập NodeJS
        </footer>
    </body>
    </html>
    `;
}

const server = http.createServer((req, res) => {
    res.setHeader(
        'Content-Type',
        'text/html; charset=utf-8'
    );

    if (req.url === '/') {
        res.statusCode = 200;
        res.end(giaoDien(`
            <div class="avatar">🎓</div>
            <h1>CHÀO MỪNG ĐẾN VỚI WEBSITE</h1>
            <p>Website thực hành lập trình Node.js</p>
            <hr>
            <h2>${hoTen}</h2>
            <p>Mã sinh viên: ${maSV}</p>
            <a class="btn" href="/about">
                Xem hồ sơ sinh viên
            </a>
        `));

    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(giaoDien(`
            <div class="avatar">🎓</div>
            <h1>HỒ SƠ SINH VIÊN</h1>

            <table>
                <tr>
                    <td>Họ và tên</td>
                    <td>${hoTen}</td>
                </tr>
                <tr>
                    <td>Mã sinh viên</td>
                    <td>${maSV}</td>
                </tr>
                <tr>
                    <td>Lớp</td>
                    <td>${lop}</td>
                </tr>
                <tr>
                    <td>Chuyên ngành</td>
                    <td>Công nghệ thông tin</td>
                </tr>
                <tr>
                    <td>Sở thích</td>
                    <td>Lập trình, công nghệ</td>
                </tr>
                <tr>
                    <td>Môn học</td>
                    <td>Node.js</td>
                </tr>
            </table>

            <a class="btn" href="/">
                Quay về trang chủ
            </a>
        `));

    } else {
        res.statusCode = 404;
        res.end(giaoDien(`
            <h1 style="font-size:80px">404</h1>
            <h2>Không tìm thấy trang</h2>
            <p>Đường dẫn bạn yêu cầu không tồn tại.</p>
            <a class="btn" href="/">Về trang chủ</a>
        `));
    }
});

server.listen(3000, () => {
    console.log('Server đang chạy!');
    console.log('http://localhost:3000');
    console.log('http://localhost:3000/about');
});
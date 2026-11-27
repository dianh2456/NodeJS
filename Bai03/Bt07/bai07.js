const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const url = new URL(req.url, 'http://localhost:3001');

    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');
        if (!name || !name.trim()) {
            res.statusCode = 400;
            return res.end('Lỗi: Thiếu tham số name!');
        }
        return res.end('Xin chào ' + name.trim());
    }

    if (url.pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');
        if (a === null || b === null || !a.trim() || !b.trim()) {
            res.statusCode = 400;
            return res.end('Lỗi: Thiếu tham số a hoặc b!');
        }
        const x = Number(a);
        const y = Number(b);
        if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(x + y)) {
            res.statusCode = 400;
            return res.end('Lỗi: Giá trị a hoặc b không hợp lệ!');
        }
        return res.end('Tổng = ' + (x + y));
    }

    if (url.pathname === '/') {
        return res.end('Web Server - Bài 07\n/hello?name= Duy Anh\n/sum?a=10&b=20');
    }
    res.statusCode = 404;
    res.end('Lỗi 404: Không tìm thấy đường dẫn!');
});

server.listen(3001, () => {
    console.log('Web Server đang chạy tại http://localhost:3001');
});
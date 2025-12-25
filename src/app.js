const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());

// Route mặc định
app.get('/', (req, res) => {
    res.json({
        message: "Chào mừng bạn đến với demo-project-be!",
        status: "Server đang hoạt động tốt"
    });
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server demo-project-be đang chạy tại: http://localhost:${PORT}`);
});
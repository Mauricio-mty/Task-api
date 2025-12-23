const cors = require('cors');

module.exports = cors({
    origin: ['http://127.0.0.1:5173','http://192.168.1.5:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});
const cors = require('cors');

module.exports = cors({
    origin: ['http://localhost:5173','http://192.168.1.5:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});
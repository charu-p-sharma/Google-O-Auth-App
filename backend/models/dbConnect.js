const mongoose = require('mongoose');

const DB = process.env.DB_URL;
console.log('DB connection string', DB);
mongoose
    .connect(DB)
    .then(() => {
        console.log('✅ DB connection established');
    })
    .catch((err) => {
        console.log(' ❌ DB connection failed');
        console.log('ERR: ', err);
    });
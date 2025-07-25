const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require("./models/dbConnect")
const authRoutes = require('./routes/authRouter');
const PORT = process.env.PORT || 5000;

app.use(cors({origin:"*"}));

console.log('typeof authRoutes:', typeof authRoutes);

app.use('/auth', authRoutes);

app.all('*', (req, res) => {
    res.status(404).json({
        message: `Can't find ${req.originalUrl} on the server`,
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
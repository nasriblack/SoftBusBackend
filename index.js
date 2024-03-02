const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 7000
const morgan = require('morgan');

const userRoutes = require("./routes/user.routes");
const busRoutes = require("./routes/bus.routes");
const busListRoutes = require("./routes/busList.routes");
const connectDB = require('./config/db');




app.use(cors());
app.use(express.json())
app.use(morgan('dev'));

connectDB()

app.use("/api/user", userRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/busList", busListRoutes);



app.get('/', (req, res) => res.send('Welcome!'))

app.listen(PORT, () => console.log('server is working on port ', PORT))

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});

module.exports = app;
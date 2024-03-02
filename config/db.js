const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// local url 
const DB_URL = 'mongodb://0.0.0.0:27017/busBooking';
// mongodb url
// const MONGO_URI = secret.db_url;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('mongodb connection success!');
    } catch (err) {
        console.log('mongodb connection failed!', err.message);
    }
};

module.exports = connectDB;

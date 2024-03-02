const connectDB = require("./config/db");

const User = require('./model/user.js');


const Bus = require('./model/Bus');
const BusData = require('./utils/bus.js');
const busList = require('./model/BusList.js');


connectDB();


const importData = async () => {
    try {
        await Bus.deleteMany()
        await Bus.insertMany(BusData)


        console.log('data inserted successfully');
        process.exit();

    } catch (error) {
        console.log('error', error);
        process.exit(1);
    }
}

importData();
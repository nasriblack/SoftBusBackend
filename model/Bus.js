/* 
Bus : [
id,
BusNum,
NbrOfSeats,
destinations,
UserId
]
*/

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const BusSchema = mongoose.Schema({
    BusNum: {
        type: String,
        required: true,
        unique: true
    },
    NbrOfSeats: {
        type: Number,
        required: true
    },
    destinations: {
        type: [String],
        required: true
    },
    seats: [{
        seat_number: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            default: null
        }
    }]
}, {
    timestamps: true
})

const Bus = mongoose.model('Bus', BusSchema);
module.exports = Bus;

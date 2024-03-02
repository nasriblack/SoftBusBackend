/* 
busList [
id,
busId,
userId[]
date
]
*/

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const BusListSchema = mongoose.Schema(
    {
        busId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Bus' // Reference to Bus model
        },
        userId: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        }],
        seatNumber: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true // All bookings are active when first created
        }

    }, {
    timestamps: true
}
)

const BusList = mongoose.model('BusList', BusListSchema);
module.exports = BusList;
const Bus = require("../model/Bus")

exports.getBus = async () => {
    const BusResult = await Bus.find({})
    console.log('checking the bus', BusResult)
    return BusResult
}
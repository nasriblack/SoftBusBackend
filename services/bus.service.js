const Bus = require("../model/Bus")

exports.getBus = async () => {
    const BusResult = await Bus.find({})
    console.log('checking the bus', BusResult)
    return BusResult
}

exports.updateBusService = async (id, bodyReq) => {
    const BusResult = await Bus.findByIdAndUpdate(id, bodyReq);
    await BusResult.save();
    return BusResult;
}

exports.updateSeatBusService = async (BusId, SeatId, bodyReq) => {

    const updatedBus = await Bus.findOneAndUpdate(
        { _id: BusId, "seats._id": SeatId },
        { $set: { "seats.$.user_name": bodyReq } },
        { new: true }
    );
    return updatedBus;

}
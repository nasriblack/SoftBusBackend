const { getBus } = require("../services/bus.service")

exports.getSingleBus = async (req, res, next) => {
    try {
        const result = await getBus()
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}
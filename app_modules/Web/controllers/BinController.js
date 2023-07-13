const catchAsync = require("./catchAsync");

const { BinService } = require('../services');

exports.getTotalCardsInBinsByUserId = catchAsync(async (req, res, next) => {
    const { user_id } = req.user || { user_id: null };
    const results = await BinService.getTotalCardsInBinsByUserIdService({user_id});

    return res.send(results)
})

exports.getCardsInBinByUserId = catchAsync(async (req, res, next) => {
    const { user_id } = req.user || { user_id: null };
    let { bin_id } = req.params;
    const results = await BinService.getCardsInBinByUserIdService({user_id, bin_id});

    return res.send(results)
})
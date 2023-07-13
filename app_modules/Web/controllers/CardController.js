const catchAsync = require("./catchAsync");

const { CardService } = require('../services');

exports.createNewFlashCard = catchAsync(async (req, res, next) => {
    const { user_id } = req.user || { user_id: null };

    const { word, definition } = req.body;

    const results = await CardService.createNewFlashCardService({
        user_id,
        word,
        definition        
    });

    return res.send(results)
})
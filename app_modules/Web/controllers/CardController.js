const catchAsync = require("./catchAsync");
const constants = require('../lib/constants');
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


exports.cardAnswer = catchAsync(async (req, res, next) => {
    const { user_id } = req.user || { user_id: null };
    const { card_id } = req.params;
    let { correct, bin_id, word_wrong_count } = req.body;

    bin_id = (correct)? bin_id + 1 : 1;       

    const results = await CardService.answerCardService({
        user_id,
        card_id,
        move_to_bin_id:bin_id,
        interval_seconds: constants.NEXT_DISPLAY_TIME_DELAY_BIN[bin_id],
        increment_wrong_count: (!correct)? 1 : 0,
        hard_to_remember: (!correct && word_wrong_count > 8)? true : false       
    });

    return res.send(results)
})

exports.drawCard = catchAsync(async (req, res, next) => {
    const { user_id } = req.user || { user_id: null };  

    //Cards active are cards that eligible to be drawn
    const cardsActiveResults = await CardService.getCardsActiveService({ user_id });

    const cardsToDrawResults = await CardService.getCardsToDrawService({ user_id });

    //filter first for bin_level 1 - 11
    const bin1to11Cards = cardsToDrawResults.filter((card)=>card.bin_level > 0)
    if(bin1to11Cards.length > 0){
        const nextCardToDraw = bin1to11Cards.shift()
        return res.send(nextCardToDraw)
    }
    //if results equal to zero for bin levels greater than 0, filter for bin_level 0 cards
    const bin0Cards = cardsToDrawResults.filter((card)=>card.bin_level === 0)
    if(bin0Cards.length > 0){
        const nextCardToDraw = bin0Cards.shift()
        return res.send(nextCardToDraw)
    }
    /*if there are no words in bin 0 and all other words still have positive timers, display
    a message:*/
    if(bin0Cards.length === 0 && cardsActiveResults.length > 0){
        return res.send({
            status:'alert',
            message:'You are temporarily done; please come back later to review more words'
        })
    }

    /*
    If all words are either in the last bin (never review) or in “hard to remember”,
    display a message “you have no more words to review; you are permanently
    done!”
    */
    if(cardsActiveResults.length === 0){
        return res.send({
            status:'alert',
            message:'You have no more words to review; you are permanently done!'
        })
    }
})
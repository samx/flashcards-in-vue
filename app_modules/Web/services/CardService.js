const { CardDAO } = require('../dao');

exports.createNewFlashCardService = ({ user_id, word, definition }) =>
    CardDAO.createNewFlashCardFunc({ user_id, word, definition })
    
exports.getCardsActiveService = ({ user_id }) =>
    CardDAO.getCardsActiveFunc({ user_id })

exports.getCardsToDrawService = ({ user_id }) =>
    CardDAO.getCardsToDrawFunc({ user_id })

exports.answerCardService = ({  
    user_id,
    card_id,
    move_to_bin_id,
    interval_seconds,
    increment_wrong_count,
    hard_to_remember 
}) =>
    CardDAO.answerCardFunc({ 
        user_id,
        card_id,
        move_to_bin_id,
        interval_seconds,
        increment_wrong_count,
        hard_to_remember
    })

    
const { db } = require(__basedir + '/global/databases');

exports.createNewFlashCardFunc = ({ user_id, word, definition }) => {
    return db.func('cards_create_card', [user_id, word, definition]).then((results) => {
        return results
    })
}

exports.getCardsActiveFunc = ({ user_id }) => {
    return db.func('cards_active_cards', [user_id]).then((results) => {
        return results
    })
}

exports.getCardsToDrawFunc = ({ user_id }) => {
    return db.func('cards_draw_cards', [user_id]).then((results) => {
        return results
    })
}

exports.answerCardFunc = ({         
    user_id,
    card_id,
    move_to_bin_id,
    interval_seconds,
    increment_wrong_count,
    hard_to_remember }) => {
    return db.func('cards_update_bin_card', [       
        card_id, 
        user_id,    
        move_to_bin_id,
        interval_seconds,
        increment_wrong_count,
        hard_to_remember
    ]).then((results) => {
        return results
    })
}

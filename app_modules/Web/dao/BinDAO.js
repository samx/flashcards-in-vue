const { db } = require(__basedir + '/global/databases');

exports.getTotalCardsInBinsByUserIdFunc = ({ user_id }) => {
    return db.func('bins_get_total_cards_in_bins', [user_id]).then((results) => {
        return results
    })
}

exports.getCardsInBinByUserIdFunc = ({ user_id, bin_id }) => {
    return db.func('bins_get_cards_in_bin', [user_id, bin_id]).then((results) => {
        return results
    })
}

const { BinDAO } = require('../dao');

exports.getTotalCardsInBinsByUserIdService = ({ user_id }) =>
    BinDAO.getTotalCardsInBinsByUserIdFunc({ user_id })

exports.getCardsInBinByUserIdService = ({ user_id, bin_id }) =>
    BinDAO.getCardsInBinByUserIdFunc({ user_id, bin_id })

    




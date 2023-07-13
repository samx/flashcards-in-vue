const { BinDAO } = require('../dao');

exports.getTotalCardsInBinsByUserIdService = ({ user_id }) =>
    BinDAO.getTotalCardsInBinsByUserIdFunc({ user_id })




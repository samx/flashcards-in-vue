const { CardDAO } = require('../dao');

exports.createNewFlashCardService = ({ user_id, word, definition }) =>
    CardDAO.createNewFlashCardFunc({ user_id, word, definition })
    




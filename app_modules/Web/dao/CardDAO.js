const { db } = require(__basedir + '/global/databases');

exports.createNewFlashCardFunc = ({ user_id, word, definition }) => {
    return db.func('cards_create_card', [user_id, word, definition]).then((results) => {
        return results
    })
}
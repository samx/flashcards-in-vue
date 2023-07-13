const { db } = require(__basedir + '/global/databases');

exports.getUserByProviderIdFunc = ({ provider, provider_id }) => {
    return db.func('users_get_user_by_provider_id', [provider, provider_id]).then((results) => {
        let user = false;
        if (results.length > 0) user = results[0];
        return user;
    })
}

exports.createUserFunc = ({ username, provider_id, provider }) => {
    return db.func('users_create_user', [
        username, provider, provider_id,
    ]).then((result) => {
        let user_id;
        if (result.length > 0) user_id = result[0].new_user_id;
        else user_id = false;
        return user_id;
    })
}
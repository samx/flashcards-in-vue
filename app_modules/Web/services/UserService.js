const { UserDAO } = require('../dao');

exports.getUserByProviderIdService = ({ provider, provider_id }) =>
    UserDAO.getUserByProviderIdFunc({ provider, provider_id })

    
exports.createUserService = ({
    username,
    provider,
    provider_id
}) =>
    UserDAO.createUserFunc({
        username,
        provider,
        provider_id
    })



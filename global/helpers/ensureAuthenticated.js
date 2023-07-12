function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    //not authenicated
    //res.redirect('/login')
}

module.exports = {
    ensureAuthenticated
}

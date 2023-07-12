const catchAsync = require("./catchAsync");


exports.helloWorld = catchAsync(async (req, res, next) => {
    return res.send({
        status: 'success',
        message:'Hello World from API'
    })
})

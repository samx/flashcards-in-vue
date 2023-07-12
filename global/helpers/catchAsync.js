const catchAsync = fn => {
    fn(req, res, next).catch(err => next(err));
};

exports.createTour = catchAsync(async (req, res, next) => {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
        status: 'success',
        data: { tour: newTour }
    });
});
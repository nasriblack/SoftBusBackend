exports.signup = (req, res, next) => {
    console.log('checking in controller the res', req.body)
    next()
}

exports.login = (req, res, next) => {
    console.log('checking incontroller the res', req.body)
    next()
}
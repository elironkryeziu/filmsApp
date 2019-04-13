const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const FilmsController = require('./controllers/FilmsController')

module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', 
    AuthenticationController.login)

    app.get('/films', 
    FilmsController.index)

    app.post('/films', 
    FilmsController.post)

}

const passport = require('passport');
const User = require('../model/user.modle');

module.exports.create = async function (req, res) {
    let user = await User.create(
        req.body
    )
    console.log(user)
    return res.status(201).send("Register successfully")
}

module.exports.createSession = function (req, res) {
    console.log(req.body)
        return res.status(200).send('You have sign in successfully !')

    // passport.authenticate(
    //     'local',
    //     { failureRedirect: '/user/sign-in' }
    // ),

}



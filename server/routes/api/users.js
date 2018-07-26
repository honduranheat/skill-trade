const express = require('express');
const router = express.Router();
const User = require('../../database/models/User');
const passport = require('../../passport');
const userController = require("./../../controllers/userController");

router.post('/', (req, res) => {
    
    console.log('user signup');

    const { username, password } = req.body;
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err);
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                console.log(savedUser);
                res.json(savedUser);
            })
        }
    })
});

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        // console.log(req.body)
        next();
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username,
            id: req.user._id
        };
                // var userId = {id: req.user.id}
        res.send(userInfo); //.send(userId);
    }

);

router.post("/send", userController.sendMessage);

// router.get('/', (req, res, next) => {
//     console.log('===== user!!======')
//     console.log(req.user)
//     if (req.user) {
//         res.json({ user: req.user })
//     } else {
//         res.json({ user: null })
//     }
// })

router.get('/profile', (req, res, next) => {
    console.log('===== user!!======');
    console.log(req.user);
    if (req.user) {
        res.json({ user: req.user, id: req._id });
    } else {
        res.json({ user: null });
    }
});

router.get("/:username", userController.getUser);

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }

});


// class UserId extends React.Component {

//     // return (
//         constructor(props) {
//             super(props);
//             this.state = {
//                 userInfo: []
//             };
//         }

// }

module.exports = router;
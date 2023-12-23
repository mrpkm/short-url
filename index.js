const express = require('express');
const bodyParser = require('body-parser')
const urlRouter = require('./router/url.router');
const userRouter = require('./router/user.router')
const { conectToMongo } = require('./config/mongodb');
const URL = require('./model/url.model');
const passport = require('passport');
const localPassport = require('./config/localStatagey');
const cookeiParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = 8000;

//
app.use(cookeiParser());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({
    name: "ninjas",
    // to do change secert before development before in a production mode
    secret: "balhsomethdfdings",
    saveUninitialized: false,
    resave: false,
    Cookie: {
        maxAge: (5000)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://127.0.0.1:27017/coding_ninjas',
            autoRemove: "disabled"
        },
    )
}));
// for cookies
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

conectToMongo('mongodb://localhost:27017/sort-url-pk').then(() => console.log("connected to mongodb"))

app.use('/url', urlRouter);
app.use('/user', userRouter)



app.listen(PORT, () => {
    console.log(`server is running port :: ${PORT}`)
})
const LocalStratagy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport){
    const authenticateUser = (email,passwrod,done)=>{
        const user = 
    }
    passport.use(new LocalStratagy({usernameField: 'email'}));

}
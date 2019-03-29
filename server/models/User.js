const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate:{ 
            // validator: (value) => {
            //     return validator.isEmail(value);
            // },
            validator: validator.isEmail,
            message: '{value} is not email'
        }   
    },

    password: {
        type: String,
        required: true,
        minlength: 6

    },

    tockens: [{
        access: {
            type: String,
            required: true
        },
        tocken: {
            type: String,
            required: true
        }
    }]

});

module.exports = {User};
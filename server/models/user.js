var mongoose = require('mongoose');
console.log('user model');
var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required:[true, "Please provide First Name"],
    trim: true
  },
  last_name: {
    type: String,
    required:[true, "Please provide Last Name"],
    trim: true
  },
  email: { type: String,
    index: true,
    unique: true,
    required: [true, "Please provide Email"],
    uniqueCaseInsensitive: true
  },
  password: {
        type: String,
        required: [true, "Please provide Password"],
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      }
})
var User = mongoose.model('User', UserSchema);

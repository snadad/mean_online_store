console.log('user controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  create: function(request,response){
    User.create(request.body, function(err, data){
      if(err){
        console.log('from server user',err);
        response.json(err);
      }
      else{
        console.log('user created', data);
        console.log('logging the id', data._id);
        request.session.user_id = data._id;
        request.session.first_name = data.first_name;
        response.json(data);
      }
    })
  },
  login: function(request, response){
    User.findOne({email: request.body.email}, function(error, user){
      if (error){
        console.log('there was an error', error);
        response.json(error);
      }
      else if (user === null){
        console.log('user not found',user);
        response.json({errors:'User not found. Please register!'});
      }
      else{
        if (user.password === request.body.password){
          request.session.user_id = user._id;
          request.session.name = user.first_name;
          response.json(user)
        }
        else{
          response.json({errors:'Password didn\'t match'});
        }
      }
    })
  }





}

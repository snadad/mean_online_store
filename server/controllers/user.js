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
        console.log(request.session);
        response.json(data);
      }
    })
  // create: function(request,response){
  //   console.log('got to the create function in server', request.body);
  //   var newfriend = new Friend(request.body);
  //   console.log(newfriend);
  //   newfriend.save(function(err){
  //     if (err){
  //       console.log('error in creation');
  //       response.json(err);
  //     }
  //     else{
  //       console.log('created');
  //       Friend.find({}, function(err, data){
  //         if (err){
  //           console.log('there was a problem here');
  //         }
  //         else{
  //           console.log('your sending all the friends json');
  //           response.json(data);
  //         }
  //       })
  //     }
  //   })
  // },
  // update: function(request,response){
  //     Friend.update({_id: request.params.id},request.body, function(err) {
  //       if(err){
  //         console.log('Updating didnt work');
  //       }
  //       else{
  //         console.log('you updated');
  //         Friend.findOne({_id: request.params.id}, function(err, friend) {
  //           if (err){
  //             console.log('the show had an error');
  //             response.json(err);
  //           }
  //           else{
  //             response.json(friend)
  //           }
  //     })  }
  //   })
  // },
  //
  // delete: function(request,response){
  //   Friend.remove({_id: request.params.id}, function(err){
  //     if(err){
  //       console.log('delete had an err');
  //       response.json(err)
  //     }
  //     else{
  //       console.log('The delete worked');
  //       response.json({placeholder:'deleted'});
  //     }
  //   })
  // },
  // show: function(request,response){
  //   Friend.findOne({_id: request.params.id}, function(err, friend) {
  //     if (err){
  //       console.log('the show had an error');
  //       response.json(err);
  //     }
  //     else{
  //       response.json(friend)
  //     }
// })
 }
}

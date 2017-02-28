console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(request,response){
    Friend.find({}, function(err, data){
      if (err){
        console.log('there was a problem here');
      }
      else{
        response.json(data)
      }
    })},
  create: function(request,response){
    console.log('got to the create function in server', request.body);
    var newfriend = new Friend(request.body);
    console.log(newfriend);
    newfriend.save(function(err){
      if (err){
        console.log('error in creation');
        response.json(err);
      }
      else{
        console.log('created');
        Friend.find({}, function(err, data){
          if (err){
            console.log('there was a problem here');
          }
          else{
            console.log('your sending all the friends json');
            response.json(data);
          }
        })
      }
    })
  },
  update: function(request,response){
      Friend.update({_id: request.params.id},request.body, function(err) {
        if(err){
          console.log('Updating didnt work');
        }
        else{
          console.log('you updated');
          Friend.findOne({_id: request.params.id}, function(err, friend) {
            if (err){
              console.log('the show had an error');
              response.json(err);
            }
            else{
              response.json(friend)
            }
      })  }
    })
  },

  delete: function(request,response){
    Friend.remove({_id: request.params.id}, function(err){
      if(err){
        console.log('delete had an err');
        response.json(err)
      }
      else{
        console.log('The delete worked');
        response.json({placeholder:'deleted'});
      }
    })
  },
  show: function(request,response){
    Friend.findOne({_id: request.params.id}, function(err, friend) {
      if (err){
        console.log('the show had an error');
        response.json(err);
      }
      else{
        response.json(friend)
      }
})  }
}

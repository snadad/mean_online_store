console.log('product controller');
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  addproduct: function(request,response){
    Product.create(request.body, function(err, data){
      if(err){
        console.log('server product controller' ,err);
        response.json(err);
      }
      else{
        console.log(data);
        response.json(data);
      }
    })
  },
  index: function(request, response){
    Product.find({}, function(err, topics){
      if(err){
        console.log("error: ", err);
      } else {
        console.log("topics from DB: ", topics);
        res.json( topics )
      }
    })
  }

}

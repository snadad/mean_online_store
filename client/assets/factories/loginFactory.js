console.log('loginFactory has started');
app.factory('loginFactory', ['$http','$cookieStore', function($http, $cookieStore) {
  var factory = {};

  factory.login = function(user, callback) {
    $http.post('/login', user).then(function(response){
      if(typeof callback === 'function'){
        callback(response.data);
        if (!response.data.errors){
          console.log(response.data);
          $cookieStore.put('user_name', response.data.first_name);
          $cookieStore.put('user_id', response.data._id);
          $cookieStore.put('userloggedin', true);
        }
      }
    })
  }
  factory.create = function(newUser, callback) {
    $http.post('/newuser', newUser).then(function(response){
      if(typeof callback === 'function'){
        callback(response.data);
        if (!response.data.errors){
          console.log(response.data);
          $cookieStore.put('user_name', response.data.first_name);
          $cookieStore.put('user_id', response.data._id);
          $cookieStore.put('userloggedin', true);
        }
      }
    })
  }
  // factory.create = function(newfriend, callback) {
  //     $http.post('/friends', newfriend).then(function(returned_data){
  //       console.log('this is the retun',  returned_data.data);
  //       if (typeof(callback) == 'function'){
  //         callback(returned_data.data);
  //       }
  //     });
  // }
  // factory.update = function(friend, callback) {
  //   $http.put('/friends/'+ friend._id, friend).then(function(returned_data) {
  //       console.log(returned_data.data);
  //       if (typeof(callback) == 'function'){
  //         callback(returned_data.data);
  //       }
  //   })
  // }
  // factory.delete = function(friend, callback) {
  //   $http.delete('/friends/'+friend._id).then(function(response) {
  //           console.log(response.data);
  //           if (typeof callback === 'function') {
  //             callback(response.data);
  //           }
  //         })
  // }
  return factory;
}]);

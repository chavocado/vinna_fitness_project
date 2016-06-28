myApp.controller('UserController', ['$scope', '$http', '$location', 'UserFactory', function ($scope, $http, $location, UserFactory) {

userFactory = UserFactory;


  userFactory.isLoggedIn()
  .then(function (response) {
    console.log(response.data);
      if (response.data.name !== undefined) {
        userFactory.setLoggedIn(true);
        if (response.data.admin === true) {
        userFactory.setAdmin(response.data.admin);
        $location.path('/admin');
      } else {
        $location.path('/trainer');
      }

 } else { // is not logged in on server
   console.log('here');
   userFactory.setLoggedIn(false);
   $location.path('/');
     }

  });

  // _this.logout = function () {
  //   userFactory.logout()
  //     .then(function (response) { // success
  //       userFactory.setLoggedIn(false);
  //         userFactory.isAdmin = false;
  //       $window.location.href = '/login'; // forces a page reload which will update our UserController
  //     },
  //
  //     function (response) { // error
  //       _this.message.text = 'Unable to logout';
  //       _this.message.type = 'error';
  //     });
  // };

}]);
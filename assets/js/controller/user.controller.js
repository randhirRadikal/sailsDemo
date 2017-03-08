angular.module('myApp').controller('usersCtrl',['$scope','$http','$timeout','Upload',

    function($scope,$http,$timeout,Upload){
        $scope.getUserDetails = function(){
          io.socket.get('/user', function (res) {
            $timeout(function () {
              $scope.users = res;
            }, 0);
          });
        };
        $scope.getUserDetails();
        io.socket.on('user', function onServerSentEvent (msg) {
          $scope.getUserDetails();
        });
        $scope.addUser = function(file,user) {
          file.upload = Upload.upload({
            url: 'user/upload',
            data: {file: file},
          });

          file.upload.then(function (response) {
            var profilePicFullUrl = response.data.file[0].fd;
            var array = profilePicFullUrl.split("images");
            var profilePicName = array[1].substr(1);
            var data = {
              name:user.name,
              email:user.email,
              profilePicFullUrl:profilePicFullUrl,
              profilePicName:profilePicName
            };
            io.socket.post('/user', data, function (resData, jwRes) {

            });
          }, function (response) {
            if (response.status > 0)
              $scope.errorMsg = response.status + ': ' + response.data;
          });
        };

        $scope.deleteUser = function(user,index){
          //io.socket.delete('/user/'+user.id, function (resData) {
          //  $scope.getUserDetails();
          //});
          io.socket.post('');
        };

    }
]);

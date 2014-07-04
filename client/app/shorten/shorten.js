angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.loading = false;
  $scope.addLink = function(){
    Links.postData($scope.data).then(function(resp){
      $location.path('/links');
    });
  };
});
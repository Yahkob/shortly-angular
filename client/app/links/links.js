angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.origin = window.location.origin;
  $scope.getLinks = function(){
    Links.getData().then(function(data) {
      $scope.data.links = data;
    })
    .catch(function(err){
      console.error(err)
    })
  };
  $scope.getLinks()
});
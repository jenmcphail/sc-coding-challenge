const storeApp = angular.module('storeApp', []);

storeApp.controller('storeCtrl', function($scope, $http){
  // console.log("controller connected")
  $http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
      .success(function(response){
        console.log(response);
        $scope.response = response
      });
});
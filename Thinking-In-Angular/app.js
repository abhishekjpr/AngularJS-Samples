var module = angular.module("myClockApp", []);
module.controller("myClockController", getTime);
function getTime($scope) {
      $scope.newUser = "";
      d = new Date();
      $scope.time = d.toTimeString();
      $scope.updateTime = function(){
            d = new Date();
            $scope.time = d.toTimeString();
      }
}

var module = angular.module("nestedController", []);
module.controller("ctrl1", ctrl1);
module.controller("ctrl2", ctrl2);

function ctrl1(){
      this.data = "CTRL1";
}

function ctrl2($scope){
      this.data = "CTRL2";
}

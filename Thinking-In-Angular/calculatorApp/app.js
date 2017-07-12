var module = angular.module("calculatorApp", []);
module.controller("calculator", plusOpClicked);

function plusOpClicked(){
      this.plusOpClicked = function (button) {
            this.operationClicked = button;
      }
      this.equalOpClicked = function() {
            var val1 = parseFloat(this.input1);
            var val2 = parseFloat(this.input2);

            if(this.operationClicked == '+') {
                  this.resultFetched = val1 + val2;
            }
            else if(this.operationClicked == '-') {
                  this.resultFetched = val1 - val2;
            }
            else if(this.operationClicked == '*') {
                  this.resultFetched = val1 * val2;
            }
            else if(this.operationClicked == '/') {
                  this.resultFetched = val1 / val2;
            }
      }
}

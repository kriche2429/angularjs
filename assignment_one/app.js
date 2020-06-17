(function () {
'use strict';
var number=0;
angular.module('AssignmentOne', [])
.controller('LunchCheckController', controllerFunction);
controllerFunction.$inject = ['$scope', '$filter'];
function controllerFunction($scope,$filter) {
  $scope.lunchValidate = function(){
    var list=$scope.mylunch;
    if(list){
    var items=list.split(',');
    for (var i = 0; i < items.length; i++) {
      if(!items[i].length === 0 || items[i].trim()){number=number+1;}
    }
    if(number>0&&number<=3)
    {
      $scope.className='green';
      $scope.lunchinfo="Enjoy!";
    }
    else if(number>3)
    {
      $scope.className='green';
      $scope.lunchinfo="Too much!";
    }
    else{
      $scope.className='red';
      $scope.lunchinfo="Please enter data first";
    }
  }
  else{
    $scope.className='red';
    $scope.lunchinfo="Please enter data first";
  }
  number=0;
}

}

})();

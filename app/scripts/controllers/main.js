'use strict';

/**
 * @ngdoc function
 * @name seqcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seqcalcApp
 */
angular.module('seqcalcApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.seqnumber = null;
    $scope.allNumbers = [1,2,3,4,5];
    $scope.plainText = false;
  }]);

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
  }]);

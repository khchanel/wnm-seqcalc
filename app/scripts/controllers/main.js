'use strict';

/**
 * @ngdoc function
 * @name seqcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seqcalcApp
 */
angular.module('seqcalcApp')
  .controller('MainCtrl', ['$scope', 'Sequencer', function ($scope, Sequencer) {
    $scope.seqnumber = null;
    $scope.isPlainText = false;

    $scope.$watch('seqnumber', function() {
      $scope.allNumbers = Sequencer.all($scope.seqnumber);
      $scope.oddNumbers = Sequencer.odd($scope.seqnumber);
      $scope.evenNumbers = Sequencer.even($scope.seqnumber);
      $scope.except = Sequencer.except($scope.seqnumber);
      $scope.fibonacciNumbers = Sequencer.fibonacci($scope.seqnumber);
    });
  }]);

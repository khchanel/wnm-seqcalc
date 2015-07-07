'use strict';

/**
 * @ngdoc function
 * @name seqcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seqcalcApp
 */
angular.module('seqcalcApp')
  .controller('MainCtrl', function ($scope, Sequencer, $window, $timeout) {
    $scope.seqnumber = null;
    $scope.isPlainText = false;

    /* compute sequences */
    $scope.compute = function() {
      if ($scope.seqnumber > 1000 &&
        !$window.confirm($scope.seqnumber + " is a bit large and may take a while, confirm?"))
      {
        // abort & reset
        $scope.seqnumber = null;
        return;
      }

      $scope.allNumbers = Sequencer.all($scope.seqnumber);
      $scope.oddNumbers = Sequencer.odd($scope.seqnumber);
      $scope.evenNumbers = Sequencer.even($scope.seqnumber);
      $scope.except = Sequencer.except($scope.seqnumber);
      $scope.fibonacciNumbers = Sequencer.fibonacci($scope.seqnumber);
    };

    /* delay computation after input */
    var filterTextTimeout;
    $scope.$watch('seqnumber', function(newVal, oldVal) {
      // skip no change
      if (newVal === oldVal) {
        return;
      }

      // cancel previous timeout promise
      if (filterTextTimeout) {
        $timeout.cancel(filterTextTimeout);
      }

      // make timeout action
      filterTextTimeout = $timeout(function() {
        $scope.compute();
      }, 200); // delay in ms
    });

  });

'use strict';

/**
 * @ngdoc directive
 * @name seqcalcApp.directive:numList
 * @description
 * # numList
 */
angular.module('seqcalcApp')
  .directive('numList', function () {
    return {
      templateUrl: 'views/num-list.html',
      restrict: 'E',
      scope: {
        numbers: '=',
        plain: '='
      }
    };
  });

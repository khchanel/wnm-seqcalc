'use strict';

/**
 * @ngdoc service
 * @name seqcalcApp.sequencer
 * @description
 * # sequencer
 * Factory in the seqcalcApp.
 */
angular.module('seqcalcApp')
  .factory('Sequencer', function () {

    return {
      all: function (num) {
        return Array.apply(null, new Array(num)).map(function (x, i) { return ++i; });
      },

      odd: function (num) {
        var arr = [];
        for (var i = 1; i <= num; i++) {
          if (i % 2 !== 0) {
            arr.push(i);
          }
        }
        return arr;
      },

      even: function (num) {
        var arr = [];
        for (var i = 1; i <= num; i++) {
          if (i % 2 === 0) {
            arr.push(i);
          }
        }
        return arr;
      },

      except: function (num) {
        var arr = this.all(num);

        arr = arr.map(function(i, x) {
           // multiple of both 3 & 5 then Z
          if (i % 3 === 0 && i % 5 === 0) {
            return 'Z';
          }

          // multiple of 3 then C
          if (i % 3 === 0) {
            return 'C';
          }

          // multiple of 5 then E
          if (i % 5 === 0) {
            return 'E';
          }

          return i;
        });


        return arr;
      },

      fibonacci: function (num) {
        var arr = [0, 1];

        for(var i = 0, j = 1, x = 0;
          x <= num;
          i = j, j = x)
        {
            x = i + j;
            if (x > num) {
              break;
            }
            arr.push(x);
        }

        return arr;
      }
    };
  });

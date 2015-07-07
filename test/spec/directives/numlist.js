'use strict';

describe('Directive: numList', function () {

  // load the directive's module
  beforeEach(module('seqcalcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // place holder, does nothing
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<num-list numbers="[1,2,3]" plain="true"></num-list>');
    element = $compile(element)(scope);
  }));
});

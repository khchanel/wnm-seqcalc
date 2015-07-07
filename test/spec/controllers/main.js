'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('seqcalcApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      // place here mocked dependencies
      $scope: scope
    });
  }));

  it('should attach seqnumber to the scope', function () {
    expect(scope.seqnumber).toBeDefined();
    expect(scope.seqnumber).toBe(null);
  });
});

'use strict';

describe('Service: Sequencer', function () {

  // load the service's module
  beforeEach(module('seqcalcApp'));

  // instantiate service
  var sequencer;
  beforeEach(inject(function (_Sequencer_) {
    sequencer = _Sequencer_;
  }));

  it('should do something', function () {
    expect(!!sequencer).toBe(true);
  });

  it('should sequence All number', function () {
    var x = sequencer.all(3);
    var exp = [1,2,3];
    expect(x.length).toBe(3);
    expect(angular.equals(x, exp)).toBe(true, x);
  });

  it('should sequence Odd number', function () {
    var x = sequencer.odd(3);
    var exp = [1,3];
    expect(x.length).toBe(2);
    expect(angular.equals(x, exp)).toBe(true, x);
  });

  it('should sequence Even number', function () {
    var x = sequencer.even(3);

    expect(x.length).toBe(1);
    expect(x).toContain(2);
  });

  it('should sequence execption number', function () {
    expect(angular.equals(sequencer.except(6), ['C'])).toBe(true);
    expect(angular.equals(sequencer.except(10), ['E'])).toBe(true);
    expect(angular.equals(sequencer.except(15), ['Z'])).toBe(true);
    expect(angular.equals(sequencer.except(8), [])).toBe(true);
  });

  it('should sequence fibonacci sequence', function () {
    var x = sequencer.fibonacci(50);
    var exp = [0,1,1,2,3,5,8,13,21,34];
    expect(angular.equals(x, exp)).toBe(true, x);
  });

});

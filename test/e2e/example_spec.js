'use strict';

describe('angularjs homepage', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('should have help message', function() {
    element(by.id('help')).getText().then(function(x) {
      expect(x).toContain('Enter a postive whole number');
    });
  });

  it('should hide error message at the beginning', function() {
    var error = element(by.id('errormsg'));

    expect(error.isDisplayed()).toBeFalsy();
  });

  it('should show error message when input invalid', function() {
    var error = element(by.id('errormsg'));
    var input = element(by.model('seqnumber'));

    // beginning
    expect(error.isDisplayed()).toBeFalsy();

    // valid input
    input.sendKeys('15');
    expect(error.isDisplayed()).toBeFalsy();

    // invalid input
    input.clear();
    input.sendKeys('asd');
    expect(error.isDisplayed()).toBeTruthy();
  });
});

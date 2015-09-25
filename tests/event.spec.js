xdescribe('', function() {

  var controller;
  var scope;

  beforeEach(module('directivesT'));
  beforeEach(inject(function($controller, $rootScope) {

    scope = $rootScope.$new();
    controller = $controller('DirectivesController', {$scope: scope});

  }));

  it('', function() {

    // setup spy
    spyOn(scope, '$emit');

    // Act
    controller.do();

    // Assert
    expect(scope.$emit).toHaveBeenCalledwith('REQUEST_STARTED', 1);

  });

});

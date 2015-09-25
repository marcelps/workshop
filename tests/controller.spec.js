describe('When the controller is initialized...', function() {

  var scope;
  var $timeout;
  var digestController;

  //beforeEach(angular.mocks.module('digest'));
  beforeEach(module('digest'));

  //beforeEach(angular.mocks.inject());
  beforeEach(inject(function($controller, $rootScope, _$timeout_) {
    scope = $rootScope.$new();
    $timeout = _$timeout_;

    // digestController = $controller('controller', { $scope: scope });
    digestController = $controller('controller', { $timeout: $timeout });
  }));

  it('should define a name with the value Gregor', function() {
    expect(digestController.name).toBeDefined();
    expect(digestController.name).toBe('Gregor');
  });

  it('should change the name to Alexander after 5 sec', function() {
    $timeout.flush();
    expect(digestController.name).toBe('Alexander');
  });

});

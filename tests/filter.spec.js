describe('When names are joined...', function() {

  var $filter;
  var list;

  beforeEach(module('filterDemo'));
  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
    list = ['dfg', 'rtz', '234'];
  }));

  it('sould result in a list containing a ;', function() {
    expect($filter('join')(list, ';')).toContain(';');
  });

  // list = undefined
  it('sould handle a list which is undefined', function() {
    list = undefined;
    expect($filter('join')(list)).toBe('');
  });

  // list = 'sdfgsdf'
  it('sould result in a single string', function() {
    list = 'sdfgsdf';
    expect($filter('join')(list, ';')).toBe(list);
  });

  // list = [0, -1, undefined]
  it('sould result in a list without undefined', function() {
    list = [0, -1, undefined];
    expectedValue = '0;-1';
    expect($filter('join')(list, ';')).toBe(expectedValue);
  });
});

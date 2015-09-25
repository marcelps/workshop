describe('some testing...', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should....', function() {
    expect(element(by.css('h2'))).toBeDefined();
  });

  it('should....', function() {
    var expected = element(by.css('h2')).getText();
    expect(expected).toBe('21 Movies');

    expected.then(function(value) {
      console.log(value);
    });
  });

  xit('should....', function() {
    var title = element(by.css('h2')).getText();

    element(by.model('search.trackName')).sendKeys('insi');

    var expected = element(by.css('h2')).getText();

    expect(expected).not.toBe(title);
  });

  it('should filter the movies by the given search query', function() {
    var title;
    element(by.css('h2')).getText().then(function(value){
      title = value;
    });

    element(by.model('search.trackName')).sendKeys('insi').then(function() {
      expect(
        element(by.css('h2')).getText()
      ).not.toBe(title);
    });
  });

});

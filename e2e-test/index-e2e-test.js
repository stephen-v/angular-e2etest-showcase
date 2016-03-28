/**
 * Created by stephen on 2016/3/24.
 */

describe('index.html', function() {

    beforeEach(function() {
        browser.get('http://localhost:8000/html');
    });

    it('get index html', function() {

        var a = element(by.model('a'));
        var b = element(by.model('b'));
        a.sendKeys(1);
        b.sendKeys(2);
        var result = element(by.id('result'));
        expect(result.getText()).toEqual('4');
    });
});
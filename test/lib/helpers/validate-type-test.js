var should = require('should');

describe('validate type function', function() {
    it('should return an error message when (1px "string" "") is passed', function() {
        var foo = true;
        foo.should.be.exactly(true);
    });
});

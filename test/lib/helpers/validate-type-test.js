var sass = require('node-sass');
var includePaths = '../stylesheets/lib-sass';

describe('validate type function', function() {
    var error = false;

    it('should return an error message when (1px "string" "") is passed', function(done) {
        sass.render({
           data: '$error: validate-type(1px "string" "")',
           includePaths: includePaths
        },
        function(error, result) { // node-style callback from v3.0.0 onwards
            if (error) {
                error = true;
                done();
            }
        });

        expect(error).toBe(true);
    });
    it('should return an error message when (1px "string" "") is passed', function() {
        sass.render({
           data: '$error: validate-type(1px "string" "")',
           includePaths: includePaths
        },
        function(error, result) { // node-style callback from v3.0.0 onwards
            if (error) {
                console.log(error.status); // used to be "code" in v2x and below
                console.log(error.column);
                console.log(error.message);
                console.log(error.line);
            } else {
            }
        });
    });
});

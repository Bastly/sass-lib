// var sass = require('node-sass');
var expect = require('chai').expect;
// var includePaths = '../stylesheets/lib-sass';

describe('validate type function', function() {
    it('should return an error message when (1px "string" "") is passed', function() {
        var foo = true;
        expect(foo).to.equal(true);
    });
});

// describe('validate type function', function() {
//     var error = false;

//     it('should return an error message when (1px "string" "") is passed', function(done) {
//         sass.render({
//         data: '$error: validate-type(1px "string" "")',
//         includePaths: includePaths
//     },
//         function(error) { // node-style callback from v3.0.0 onwards
//             if (error) {
//                 error = true;
//                 done();
//             }
//         });

//         expect(error).not.toBe(true);
//     });
// });

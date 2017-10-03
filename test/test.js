const average = require('../average');
const assert = require('chai').assert;
describe('Average Of An Array',function(){
    it('Function Shuld Return Average Of An Array',function(){
        assert.equal(average([1,-2,-1,-5]),-1.75);
        assert.equal(average([1]),1);
        assert.isArray(average([]),[]);
        assert.isObject(average([1,-2,-1,{}]),{});
        assert.isArray(average([1,-2,-1,[]]),[]);
    });
    it('Function Shuld Return A Type Error',function(){
        assert.equal(average(),'TypeError: average() expects an array parameter');
    });
})
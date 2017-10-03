const average = (function(){
    'use strict';
    const fn = function(arr){
        if(Object.prototype.toString.call(arr).toLowerCase() !== '[object array]'){
            return new TypeError('average() expects an array parameter');
        }
        let s = 0;
        return arr.length === 0 ? null : arr.reduce((pre,cur) => {
            if(typeof cur === 'number'){
                s++;
                return pre + cur;
            }
            return pre;
        },0)/s;
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = average;
}
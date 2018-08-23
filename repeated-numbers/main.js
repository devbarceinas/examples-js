(function() {
    'use strict';

    function hasDuplicates(numbers) {
        let object = [];
        let result = [];
        let total = 0;

        numbers.forEach((item) => {
            if (!object[item]) 
                object[item] = 0;
                object[item] += 1;
        });

        for (let prop in object) {
            if (object[prop] >= 2) {
                result.push(prop);
                total = result.length;
            }
        }

        return total;
    }

    console.log(
        hasDuplicates([1,1,1,2,3,4,5,6,6,6,7,8,8])
    );
})();
const sumAll = function(arg1, arg2) {
    let result = 0;

    // Validate input
    if (
        typeof arg1 !== "number" || 
        typeof arg2 !== "number" || 
        arg1 < 0 || 
        arg2 < 0 || 
        !Number.isInteger(arg1) || 
        !Number.isInteger(arg2)
    ) {
        return "ERROR";
    }

    // Swap if arg1 is greater than arg2
    if (arg1 > arg2) {
        [arg1, arg2] = [arg2, arg1];
    }

    // Sum all numbers between arg1 and arg2 (inclusive)
    for (let step = arg1; step <= arg2; step++) {
        result += step;
    }

    return result;
};


// Do not edit below this line
module.exports = sumAll;

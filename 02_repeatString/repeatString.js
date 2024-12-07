const repeatString = function(word, times) {
    // Validate input
    if (times < 0) {
        return "ERROR";
    }

    let result = ""; // Initialize an empty result string

    // Repeat the word 'times' times
    while (times > 0) {
        result += word; // Append the word to the result
        times--; // Decrement the counter
    }

    return result; // Return the repeated string
};


// Do not edit below this line
module.exports = repeatString;

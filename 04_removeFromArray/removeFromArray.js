const removeFromArray = function(array, ...removeArgument) {
   let index = 0;
   while (index<array.length) {
    if (removeArgument.includes(array[index])) {
        array.splice(index, 1);
    } else {
        ++index;
    }
    }
    console.log(array);
    return array
   };

// Do not edit below this line
module.exports = removeFromArray;

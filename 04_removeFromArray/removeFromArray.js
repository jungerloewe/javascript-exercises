const removeFromArray = function(...args) {
    let array = args[0];
    args = args.slice(1);
    for (arg of args) {
        array = array.filter(item => item !== arg);
    }
    return array;
  }

// Do not edit below this line
module.exports = removeFromArray;

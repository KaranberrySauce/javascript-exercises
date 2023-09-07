const palindromes = function (str) {
    const valueString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return valueString.split("").reverse().join("") == valueString;
};

// Do not edit below this line
module.exports = palindromes;

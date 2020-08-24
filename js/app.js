//#1 function assignment
function addMultiply(numberOne, numberTwo) {
    var addMultipliedNumber = (numberOne + numberTwo)*5;
    return addMultipliedNumber;
}

var result = addMultiply(10, 15);
console.log(result);

//#2 function assignment
function lengthSort(word) {
    if(word.length > 10) {
        return true;
    } else if(word.length <= 10) {
        return false;
    } else {
        console.log("Something went very wrong");
    }
}

var lengthResult = lengthSort("have a nice weekend");
console.log(lengthResult);

//#3 function assignment
function stringFilter(text) {
    for (var i = 0; i < text.length; i++) {
        if(text[i].startsWith("ph")) {
            return text[i];
        }
    }
}

var stringInput = ["phone", "physical", "Telephone", "panda"];
var stringResult = stringFilter(stringInput);
console.log(stringResult);
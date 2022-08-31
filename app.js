// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// just a console log for ourselves.
//console.log(sum(7, 3))

//============Conversiones=====================//

const fromEuroToDollar = function (valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return parseFloat(valueInDollar.toFixed(2));
}

function fromDollarToYen(DollarAmount) {
    //convert the given DollarAmount to Yen
    let valueInYen = (DollarAmount / 1.2) * 127.9;
    //return the yen value
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound = function (YenAmount) {
    //convert the given YenAmount to Pounds
    let valueInPound = (YenAmount / 127.9) * 0.8;
    //return the pound value
    return parseFloat(valueInPound.toFixed(4));
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

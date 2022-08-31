// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollarTwo){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollarTwo * 1.2;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(YenAmount){
    // convert the given valueInEuro to dollars
    let valueInPound = YenAmount * 1.2;
    //return the dollar value
    return valueInPound;
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar  };

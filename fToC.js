const fahrenheitToCelsius = (fahrenheit) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    return Math.round(((fahrenheit) - 32) * 5 / 9);
  }
  
 module.exports = fahrenheitToCelsius;
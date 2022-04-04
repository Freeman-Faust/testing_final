const celsiusToFahrenheit = (celsius) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    return Math.round(((celsius) * 9 / 5) + 32)
  }
  
module.exports = celsiusToFahrenheit
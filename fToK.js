const fahrenheitToKelvin = (fahrenheit) => {
    // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
    // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
    return Math.round((((fahrenheit) - 32) * 5 / 9) + 273.15)
  }


  module.exports = fahrenheitToKelvin;
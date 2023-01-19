const convertToCelsius = function(fahrenheitValue) {
  return Math.round(((fahrenheitValue-32)*5/9) * 10 )/10
};

const convertToFahrenheit = function(celciusValue) {
  return Math.round((celciusValue/(5/9)+32 ) * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

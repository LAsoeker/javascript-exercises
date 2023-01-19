const repeatString = function(string = '', multipicant) {
  if (multipicant<0){
    return 'ERROR';
  }else if (multipicant == 0){
    return '';
  }
  return string.toString().repeat(multipicant);
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(string) {
  const chars = string.split('');
  let reverse = '';
  console.log(chars)
  for(let i = string.length-1; i >= 0; i--){
    reverse = reverse.concat(chars[i]);
  }
  return reverse
};

// Do not edit below this line
module.exports = reverseString;

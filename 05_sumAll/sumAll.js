const sumAll = function(summandStart, summandEnd) {
  if(typeof summandStart !== 'number' || typeof summandEnd !== 'number' || summandStart <= 0 || summandEnd <= 0){
    return "ERROR"
  }
  if(summandStart > summandEnd ) [summandStart, summandEnd] = [summandEnd, summandStart]
  let sum = 0;
  for (let i = summandStart; i<=summandEnd; i++){
    sum += i;
  }
  return sum;
};

sumAll(10, "90")
// Do not edit below this line
module.exports = sumAll;

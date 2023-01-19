

const removeFromArray = function(array, ...toBeRemovedElements) {
  console.log(toBeRemovedElements)
  for (const toBeRemovedElement of toBeRemovedElements){
    for (const element of array){
      if (element === toBeRemovedElement){
        array.splice(array.indexOf(element),1);
      }
    }
  }
  console.log(array)
  return array
};

// Do not edit below this line
module.exports = removeFromArray;

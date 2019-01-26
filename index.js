function doToElementsInArray(array, callback){
  array.forEach(callback);
}

function changeCompletely(index, array) {
  array[index] = `${array[index]}s!!!`;
}

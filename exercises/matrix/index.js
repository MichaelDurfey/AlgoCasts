function matrix(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let top = 0;
  let right = n - 1
  let bottom = n - 1;
  let left = 0;
  let counter = 1;
  
  while (left <= right && bottom >= top) {
    for (let i = left; i <= right; i++){
      result[top][i] = counter;
      counter++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result[i][right] = counter;
      counter++;
    }
    right--
    for (let i = right; i >= left; i--) {
      result[bottom][i] = counter;
      counter++;
    }
    bottom--
    for(let i = bottom; i >= top; i--) {
      result[i][left] = counter;
      counter++;
    }
    left++
  }
  return result;
}

 
module.exports = matrix;

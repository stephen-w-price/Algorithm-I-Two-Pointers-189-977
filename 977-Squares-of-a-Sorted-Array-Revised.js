const nums = [-4, -1, 2, 3, 10]


let sortedSquares = function(nums){
  const result = new Array(nums.length).fill(0)
  let left = 0
  let right = nums.length - 1
  let resultIdx = nums.length -1 
  console.log(result)
  while(left <= right){
    let leftVal = Math.pow(nums[left], 2)
    let rightVal = Math.pow(nums[right], 2)

    if(leftVal < rightVal){
      result[resultIdx] = rightVal
      console.log(result)
      right--
    } else {
      result[resultIdx] = leftVal
      left++
    }
    resultIdx--
  }
  return result

}

console.log(sortedSquares(nums))
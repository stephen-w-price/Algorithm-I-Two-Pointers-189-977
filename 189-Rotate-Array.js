/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/

nums = [-1, -100, 3, 99 ]
k = 3


let rotate = function(nums, k) {
  const length = nums.length
  if(k > length){
    k = k % length
    console.log(k)
    } 
  
  nums.forEach((number, position) => {
    if(position < length - k){
      nums.push(number)
    }
  })
  nums.forEach((number) =>{
    if(nums.length != length){
      nums.shift()
    }
  })
  
  
  return nums 
}


console.log(rotate(nums, k))
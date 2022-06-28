// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]


nums = [-4,-1,0,3,10]

let sortedSquares = function(nums) {
    let squaredArray = nums.map((x) => {
      return x * x
    })
    squaredArray.sort((a, b) =>{
      return a - b
    })
    return squaredArray
};


console.log(sortedSquares(nums))
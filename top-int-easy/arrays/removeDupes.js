// Given a sorted array nums, remove the duplicates in-place such that each element
// appears only once and returns the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the
// input array in-place with O(1) extra memory.

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements 
// of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what
// values are set beyond the returned length.

const removeDupes = (nums) => {
  // problem doesn't actually require you to remove the duplicates so it's poorly named

  if (nums.length === 0) return 0 // if it's an empty array

  let pointerA = 0 // this is the 1st element in the array we will compare with
  // pointerA is basically the count of unique items in the array
  for ( let pointerB = 1; pointerB < nums.length; pointerB++) {
    // so we're going to compare pointerA to pointerB and move forward in the array
    // if the pointer is unique, move it to the next spot in the array
    if ( nums[pointerA] !== nums[pointerB] ) {
      // we have found the 1st appearance of a non duplicate number
      // now we move pointerA to the next element and replace that with the unique number
      pointerA++
      nums[pointerA] = nums[pointerB] 
    }
  }
  return pointerA + 1 // need to add 1 to the array count since it starts at 0
} 

let nums = [-1,0,0,0,0,0,1,2,3,4,5,5,5,6,6,7,7,7,8,8,8,8,8,8,9,10]

let solved = removeDupes(nums)
console.log(solved)


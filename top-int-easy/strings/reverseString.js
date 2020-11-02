// Write a function that reverses a string. The input string is given as an array of
// characters char[].
//
// Do not allocate extra space for another array, you must do this by modifying the
// input array in-place with O(1) extra memory.
//
// You may assume all the characters consist of printable ascii characters.

var reverseString = function(s) {
  // opposite directional two-pointer approach
  // take each letter from each end and work inwards until the whole array is reversed

  let left = 0
  let right = s.length - 1
  
  while ( left < right ) {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
  
  console.log('script executed', s)
}

const tempArray = ['h', 'e', 'l', 'l', 'o']
reverseString(tempArray)

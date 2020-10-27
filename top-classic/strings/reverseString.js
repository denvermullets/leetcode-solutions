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
  
  console.log(s)
}

const tempArray = ['h', 'e', 'l', 'l', 'o']
reverseString(tempArray)

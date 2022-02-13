function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

function isPalindrome(str) {
  const len = str.length
  const mid = Math.floor(len / 2)

  for (const i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }

  return true
}

function getCircumfrence(radius){
    return 2*22/7*radius
}

function getArea(){
   return 22/7*radius**2
}
module.exports={
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea
}
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

function isPalindome(word) {
    let newWord = word.split('').reverse().join('');
    if (newWord === word) {
      return true;
    }
    return false;
  }

function getCircumfrence(radius){
    return 2*22/7*radius
}

function getArea(){
   return 22/7*radius**2
}
module.exports={
    getFullName,
    isPalindome,
    getCircumfrence,
    getArea
}
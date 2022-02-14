function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  function isPalindome(word) {
    let newWord = word.split('').reverse().join('');
    if (newWord === word) {
      return true;
    }
    return false;
  }
  
  function getCircumference(radius) {
    return `The circumference is ${2 * Math.PI * radius}`;
  }
  
  function getArea(radius) {
    return `The area is ${Math.PI * radius * radius}`;
  }
  
  module.exports = {
    getFullName,
    getCircumference,
    getArea,
    isPalindome,
  };
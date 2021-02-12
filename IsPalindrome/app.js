//Написать функцию, которая определяла бы является ли входящая строка палиндромом или нет

function isPalindrome(str) {
  let string = str.toLowerCase().split(' ').join('');
  let stringReverse = string.split('').reverse().join('');
  return string === stringReverse;
}

console.assert(isPalindrome('racecar') === true, 'Actual result: %s', isPalindrome('racecar'));
console.assert(isPalindrome('table') === false, 'Actual result: %s', isPalindrome('table'));
console.assert(isPalindrome('А роза упала на лапу Азора') === true, 'Actual result: %s', isPalindrome('А роза упала на лапу Азора'));
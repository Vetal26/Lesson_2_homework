//Написать функцию, которая принимает на вход 2 строки и проверяет являются ли входные строки анаграммами

function isAnagram(str1, str2) {
  let string1 = modifyWord(str1);
  let string2 = modifyWord(str2);
  return string1 === string2;
}

function modifyWord(str) {
    return str.toLowerCase().split('').sort().join('');
}

console.assert(isAnagram('friend', 'Finder') === true, 'Actual result: %s', isAnagram('friend', 'Finder'));
console.assert(isAnagram('hello', 'bye') === false, 'Actual result: %s', isAnagram('hello', 'bye'));
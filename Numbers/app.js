//В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено (остальные встречаются ровно по одному разу).
//N заранее неизвестно. Определить пропущенное число

function findMissingNumber(nums) {
  let numbers = nums.sort((a, b) => a - b);
  for (let i = 1; i <= numbers[numbers.length - 1]; i++) {
    if (numbers[i] - numbers[i - 1] !== 1) {
        return numbers[i] - 1;
    }
  }
}

console.assert(findMissingNumber([2,8,6,5,3,10,7,4,1]) === 9, 'Actual result: %s', findMissingNumber([2,8,6,5,3,10,7,4]));
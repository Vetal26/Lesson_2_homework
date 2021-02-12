//В последовательности записаны целые числа. Одно из чисел встречается ровно один раз, остальные — по два раза. Найти число, которое встречается один раз.

function findNumber (nums) {
    let numbers = nums.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length;) {
        if (numbers[i] === numbers[i + 1]) {
          numbers.splice(i, 2);
          i--;
        } else {
          i++;
        }
    }
    return numbers[0];
}

console.assert(findNumber([2,45,5,2,8,8,5,3,45,3,4]) === 4, 'Actual result: %s', findNumber([2,45,5,2,8,8,5,3,45,3,4]));
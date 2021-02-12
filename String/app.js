//Имеется строка, скажем, aaabbdcccccf. Преобразовать ее к виду a3b2d1c5f1. Еще пример: aabbaa должна быть преобразована в a2b2a2, а не в a4b2!

function getModifyString (str) {
  let str2 = '';
  let count = 1;
  str.split('').forEach((item, i, arr) => {
    if (item === arr[i + 1]) {
      count++;
    } else if (i === arr.length - 1) {
      str2 += item + count;
    } else {
      str2 += item + count;
      count = 1;
    }
  });
  return str2;
}

console.assert(getModifyString('aaabbdcccccf') === 'a3b2d1c5f1', 'Actual result: %s', getModifyString('aaabbdcccccf'));
console.assert(getModifyString('aabbaa') === 'a2b2a2', 'Actual result: %s', getModifyString('aabbaa'));
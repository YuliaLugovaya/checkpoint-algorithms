// Код для первого задания напиши в этой функции
function crawlTree(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      if (arr[i] === arr[arr.length - 1]) {
        return str += arr[i];
      } else {
        str += arr[i];
      }
    } else {
      str += crawlTree(arr[i]);
    }
  }
  return str;
}

// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
  function executor(a, b) {
    if (b === arr.length) {
      return executor(a + 1, 0);
    } else {
      if (arr[a] + arr[b] === target) {
        return [a, b];
      } else {
        return executor(a, b + 1);
      }
    }
  }
  return executor(0, 1)
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;

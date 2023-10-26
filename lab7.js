// Задание 1
function countSandwiches({ bread, cheese }) {
    const minSandwiches = Math.min(Math.floor(bread / 2), cheese);
    return minSandwiches;
}
console.log(countSandwiches({ bread: 5, cheese: 6 }));
// Задание 2
function generateMultiplicationTable(n) {
    let matrix = [];
    for (let i = 0; i <= n; i++) {
        let row = [];
        for (let j = 0; j <= n; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    for (let i = 1; i <= n; i++) {
        matrix[0][i] = i;
        matrix[i][0] = i;
    }

    // Fill the rest of the matrix elements
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            matrix[i][j] = i * j;
        }
    }

    // Print the matrix
    for (let i = 0; i <= n; i++) {
        console.log(matrix[i].join('\t'));
    }
}

generateMultiplicationTable(6);
// Задание 3
function showQuote(words, symbol) {
    // Определяем самое длинное слово
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    // Выводим рамку
    console.log(symbol.repeat(maxLength + 4));
    for (let i = 0; i < words.length; i++) {
        let spaces = ' '.repeat(maxLength - words[i].length);
        console.log(`${symbol} ${words[i]}${spaces} ${symbol}`);
    }
    console.log(symbol.repeat(maxLength + 4));
}

// Пример вызова функции
showQuote(['Hello', 'World', 'In', 'JS'], '*');
// Задание 4
function combineArrays(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(combineArrays([1, 2, 3], ['a', 'b', 'c', 'd']));
// Задание 5
function countUniqueValues(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
      if (count[arr[i]]) {
        count[arr[i]]++;
      } else {
        count[arr[i]] = 1;
      }
    }
    return count;
  }
  
  console.table(countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5]));

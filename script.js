function capitalize(string) {
    let arr = string.split('');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result += arr[i].toUpperCase();
        } else {
            result += arr[i].toLowerCase();
        }
    }
    return result;
}

function reverseString(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

let calculator = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
};

function caesarCipher(string, shift) {
    let low = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (low.includes(string[i])) {
            result += low[low.indexOf(string[i]) + shift];
        } else if (up.includes(string[i])) {
            result += up[up.indexOf(string[i]) + shift];
        } else {
            result += string[i];
        }
    }
    return result;
}

function analyzeArray(array) {
    return {
        average: array.reduce((a, b) => a + b, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

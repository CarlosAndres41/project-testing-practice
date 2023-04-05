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

let calculator = {};

export { capitalize, reverseString, calculator };

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

export { capitalize };

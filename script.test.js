import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './script';

test('Capitalize a lowercase word', () => {
    expect(capitalize('test')).toBe('Test');
});

test('Capitalize an uppercase word', () => {
    expect(capitalize('TEST')).toBe('Test');
});

test('Capitalize a multicase word', () => {
    expect(capitalize('TeSt')).toBe('Test');
});

test('Capitalize the first letter of a sentence', () => {
    expect(capitalize('test for a sentence')).toBe('Test for a sentence');
});

test('Check for punctuation', () => {
    expect(capitalize('test for punctuation.')).toBe('Test for punctuation.');
});

// Reverse String

test('Reverse a word', () => {
    expect(reverseString('Test')).toBe('tseT');
});

test('Reverse multiple words', () => {
    expect(reverseString('Test multiple')).toBe('elpitlum tseT');
});

test('Reverse a multiple words, including punctuation', () => {
    expect(reverseString('Test multiple.')).toBe('.elpitlum tseT');
});

// Calculator
test('sum', () => {
    expect(calculator.sum(2, 4)).toEqual(6);
});

test('subtract', () => {
    expect(calculator.subtract(2, 4)).toEqual(-2);
});

test('divide', () => {
    expect(calculator.divide(10, 2)).toEqual(5);
});

test('multiply', () => {
    expect(calculator.multiply(2, 4)).toEqual(8);
});

test('divide float', () => {
    expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
});

// Caesar cypher

test('cypher one word', () => {
    expect(caesarCipher('defend', 1)).toBe('efgfoe');
});

test('cypher word with capital letter', () => {
    expect(caesarCipher('Attack', 5)).toBe('Fyyfhp');
});

test('Test for multiple words and punctuacion', () => {
    expect(caesarCipher('Attack at dawn!', 7)).toBe('Haahjr ha khdu!');
});

// Analyze array

test('Analyze empty array', () => {
    expect(analyzeArray([]).average).toBeNaN();
});

test('Analyze empty array', () => {
    expect(analyzeArray([]).min).toBe(Infinity);
});

test('Analyze empty array', () => {
    expect(analyzeArray([]).max).toBe(-Infinity);
});

test('Analyze empty array', () => {
    expect(analyzeArray([]).length).toEqual(0);
});

let object = analyzeArray([1, 8, 3, 4, 2, 6]);

test('Analyze empty array', () => {
    expect(object.average).toEqual(4);
});

test('Analyze empty array', () => {
    expect(object.min).toEqual(1);
});

test('Analyze empty array', () => {
    expect(object.max).toEqual(8);
});

test('Analyze empty array', () => {
    expect(object.length).toEqual(6);
});

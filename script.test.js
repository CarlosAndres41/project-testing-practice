import { capitalize, reverseString } from './script';

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

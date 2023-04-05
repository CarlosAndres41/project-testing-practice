import { capitalize } from './script';

test('Capitalize a lowercase word', () => {
    expect(capitalize('test')).toBe('Test');
});

test('Capitalize an uppercase word', () => {
    expect(capitalize('TEST')).toBe('Test');
});

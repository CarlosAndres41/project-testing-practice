import { capitalize } from './script';

test('Capitalize a lowercase word', () => {
    expect(capitalize('test')).toBe('Test');
});

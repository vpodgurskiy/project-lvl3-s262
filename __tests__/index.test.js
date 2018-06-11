import pageLoad from '../src';

const resultData = '';

test('pageLoad empty', () => {
  expect(pageLoad('')).toBe(resultData);
});

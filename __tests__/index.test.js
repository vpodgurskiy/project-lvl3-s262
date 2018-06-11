import pageLoad from '../src';

const result = 'empty';

test('pageLoad empty', () => {
  expect(pageLoad()).toBe(result);
});

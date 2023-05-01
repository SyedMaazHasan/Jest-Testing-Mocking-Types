import * as app from '../app';
import * as math from '../math';

math.add = jest.fn();
math.subtract = jest.fn();

test('calls math.add', () => {
  app.doAdd(1, 2);
  console.log('math.add=', math.add());
  expect(math.add).toHaveBeenCalledWith(1, 2);
  math.add.mockImplementation(() => 3);

  expect(math.add()).toBe(3);
});

test('calls math.subtract', () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

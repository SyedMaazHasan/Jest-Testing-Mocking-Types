import * as app from '../app';
import * as math from '../math';

// Set all module functions to jest.fn
jest.mock('../math.js');

test('calls math.add', () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  console.log('math.add=', math.add());
  expect(math.add).toHaveBeenCalledWith(1, 2);

  math.add.mockImplementation(() => 3);
  console.log('math.add=', math.add());
  expect(math.add()).toBe(3);
});

test('calls math.subtract', () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
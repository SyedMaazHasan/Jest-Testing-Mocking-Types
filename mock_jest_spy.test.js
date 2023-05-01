import * as app from '../app';
import * as math from '../math';

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add');
  console.log(math.add());

  addMock.mockImplementation(() => 'mock');
  console.log(math.add());
  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual('mock');

  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});

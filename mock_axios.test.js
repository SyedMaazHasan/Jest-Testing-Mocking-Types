import axios from 'axios';
import { fetchUsersData } from '../fetchUser';

jest.mock('axios');

test('should fetch users', async () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };

  //   you can also directly resolve promisevalue
  //   axios.get.mockResolvedValue(resp);

  axios.get.mockImplementation(() => Promise.resolve(resp));

  await expect(fetchUsersData()).resolves.toEqual(resp);
});

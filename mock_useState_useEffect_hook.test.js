
// lets say we use below state in component which we want to mock

const [name, setName] = React.useState("");
==============================================================

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should update state on input change', () => {
  const setName = jest.fn();

  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((initialState) => [initialState, setName]);

  const wrapper = shallow(<App />);

  const newInputValue = 'React is Awesome';
  wrapper
    .find('.input')
    .simulate('change', { target: { value: newInputValue } });
  expect(setState).toHaveBeenCalledWith(newInputValue);
});

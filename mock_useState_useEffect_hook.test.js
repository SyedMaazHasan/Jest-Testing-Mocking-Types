const [name, setName] = React.useState("");
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should update state on input change', () => {
  const setState = jest.fn();

  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((initialState) => [initialState, setState]);

  const wrapper = shallow(<App />);

  const newInputValue = 'React is Awesome';
  wrapper
    .find('.input')
    .simulate('change', { target: { value: newInputValue } });
  expect(setState).toHaveBeenCalledWith(newInputValue);
});

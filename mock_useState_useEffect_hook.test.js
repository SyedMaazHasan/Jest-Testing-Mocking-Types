/////MOCKING USESTATE HOOK/////////

// lets say we use below state in component which we want to mock

const [name, setName] = React.useState("");
==============================================================

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should update state on input change', () => {

  const useStateSpy = jest.spyOn(React, 'useState');
  
  const setName = jest.fn();
  useStateSpy.mockImplementation((initialState) => [initialState, setName]);

  const wrapper = shallow(<App />);

  const newInputValue = 'React is Awesome';
  wrapper
    .find('.input')
    .simulate('change', { target: { value: newInputValue } });
  expect(setName).toHaveBeenCalledWith(newInputValue);
});


///////MOCKING USEEFFECT HOOK/////////////

// lets say you have below useEffect to mock

  React.useEffect(()=> {
      // someLogic
  });
==============================================================

  useEffectMock = jest.spyOn(React, "useEffect");
  useEffectMock.mockImplementation(f => f());




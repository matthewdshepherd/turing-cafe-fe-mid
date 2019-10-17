import React from 'react';
import { shallow } from 'enzyme';
import NewReservation from './NewReservation'

describe('NewReservation', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewReservation
      addReservation={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
})
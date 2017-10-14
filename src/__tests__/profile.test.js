import React from 'react';
import Profile from '../profile/index';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });

describe('<Profile />', () => {
	it('renders 1 <Profile /> Component', () => {
		const component = shallow(<Profile />);
		expect(component).toHaveLength(1);
	});
});

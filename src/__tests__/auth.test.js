import React from 'react';
import Auth from '../auth/index';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });

describe('<Auth />', () => {
	it('renders 1 <Auth /> Component', () => {
		const component = shallow(<Auth />);
		expect(component).toHaveLength(1);
	});
});


test('Sum of Numbers', () => {
	expect(5+5).toBe(10);
});
import React from 'react';
import Facebook from '../auth/Facebook/';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });

describe('<Facebook />', () => {
	it('renders 1 <Facebook /> Component', () => {
		const component = shallow(<Facebook />);
		expect(component).toHaveLength(1);
	});
});

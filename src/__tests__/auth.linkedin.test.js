import React from 'react';
import Linkedin from '../auth/Linkedin/';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });

describe('<Linkedin />', () => {
	it('renders 1 <Linkedin /> Component', () => {
		const component = shallow(<Linkedin />);
		expect(component).toHaveLength(1);
	});
});

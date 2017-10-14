import React from 'react';
import Twitter from '../auth/Twitter/';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });

describe('<Twitter />', () => {
	it('renders 1 <Twitter /> Component', () => {
		const component = shallow(<Twitter />);
		expect(component).toHaveLength(1);
	});
});

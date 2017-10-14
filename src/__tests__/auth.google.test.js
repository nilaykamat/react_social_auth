import React from 'react';
import Google from '../auth/Google/';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });

describe('<Google />', () => {
	it('renders 1 <Google /> Component', () => {
		const component = shallow(<Google />);
		expect(component).toHaveLength(1);
	});
});

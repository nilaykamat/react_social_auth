import React from 'react';
import App from '../index';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });

describe('<App />', () => {
	it('renders 1 <App /> Component', () => {
		const component = shallow(<App />);
		expect(component).toHaveLength(1);
	});
});

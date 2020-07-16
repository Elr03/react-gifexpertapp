import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Test en <GifExpertApp />', () => {
    const wrapper = shallow(<GifExpertApp />)

    test('should show correct component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show a categories list', () => {
        const categories = ['One Punch Man', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
    
})
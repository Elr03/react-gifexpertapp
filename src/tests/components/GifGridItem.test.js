import React from 'react'

import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test en <GifGridItem />', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('should show correct component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should have a phargraph with a title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('should hava a image equal to props', () => {
        const img = wrapper.find('img');
        //console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should have animate_fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    
    
})

import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {
    const category = 'One Punch';
    

    test('should show correct component', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })
        const wrapper = shallow(<GifGrid category= {category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when use  useFetchGifs', () => {

        const gifs = [{
                id:'ABC',
                url:'https://localhoste/loquesea.jpg',
                title: 'Lo que sea'
            },
            {
                id:'ABC',
                url:'https://localhoste/loquesea.jpg',
                title: 'Lo que sea'

            }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        })
        const wrapper = shallow(<GifGrid category= {category}/>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})

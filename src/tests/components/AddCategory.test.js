import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test in <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should be show correct', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should change input', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change',{target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('shouldnt post info on submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories and clean input', () => {
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change',{target: {value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
})

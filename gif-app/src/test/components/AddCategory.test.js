import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>',()=>{
    const setCategories =jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);

    beforeEach(()=>{
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);

    })

    test('debe mostrarse correctamente',()=>{
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto',()=>{
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target:{value:value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la información onsubmit',()=>{
        wrapper.find('form').simulate('submit',{preventDefault:()=>{

         }});

         expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar a setCateries y limpiar la caja de text',()=>{
        const value='Hola Mundo';
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));


        expect(wrapper.find('input').prop('value')).toBe('');

    })
})
import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

const title='Un Título';
const url ='https://localhost/algo.jpg';
const wrapper = shallow(<GifGridItem title={title} url={url} />)

describe('Pruebas en <GridItem></GridItem>',()=>{
    test('Debe mostrar el componente correctamente',()=>{
    
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un párrafo con el title',()=>{
        const p=wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('debe tener la imagen igual al url y alt de los props',()=>{
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener animate__bounce',()=>{
        const div = wrapper.find('div');
        const className=div.prop('className');
        expect(className.includes('animate__bounce')).toBe(true);
    })
})

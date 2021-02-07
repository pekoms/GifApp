import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');



describe('Match ',()=>{


    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs',()=>{
        const gifs=[{
            id:'ABC',
            url:'http://localhost/cualquier/cosa.jpg',
            title:'Cualquier cosa'
        },
        {
            id:'123',
            url:'http://localhost/cualquier/cosa.jpg',
            title:'Cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        const category = 'Pokemon';
        const wrapper=shallow(<GifGrid category={category}/>)
        
       expect(wrapper).toMatchSnapshot();
       expect(wrapper.find('p').exists()).toBe(false);
       expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
})
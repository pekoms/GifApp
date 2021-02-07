import { useFetchGifs } from "../../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs',()=>{
    test('debe rellenar el estado incial',()=>{
        const {result}=renderHook(()=>useFetchGifs('Pokemon')); 
        const{data,loading}=result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    
    })

    test('debe de retornos un array de imagenes y loading en false',async()=>{
        const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs('Pokemon'));
        await waitForNextUpdate();
        const{data,loading}=result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})
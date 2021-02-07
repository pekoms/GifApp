import { getGifs } from "../../../helpers/getGifs";

describe('Pruebas con getGifs',()=>{
    test('debe de traer 10 elementos',async()=>{
       const gifs = await getGifs('Pokemon');

       expect(gifs.length).toBe(10);
    })

    test('debe de traer 10 elementos',async()=>{
        const gifs = await getGifs('Pokemon');
 
        expect(gifs.length).toBe(10);
     })
})
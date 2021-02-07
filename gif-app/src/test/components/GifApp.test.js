import { shallow } from "enzyme"
import { GifApp } from "../../GifApp"

let wrapper=shallow(<GifApp/>)
describe('Test de GifAppTest', () => {

    test('El snapshot cuadra',()=>{
        expect(wrapper).toMatchSnapshot();      
    })

    test('Debe mostrar una lista de catergorias',()=>{
        const categories =['Pokemon','Digimon'];
        wrapper=shallow(<GifApp defaultCategory={categories}/>)
        expect(wrapper).toMatchSnapshot();     
        expect(wrapper.find('GifGrid').length).toBe(categories.length);      


    })
    
})

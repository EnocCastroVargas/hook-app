import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Pruebas en <LoginPage />', () => {
    
    const user = {
        id: 1,
        name: 'Enoc'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage /> 
            </UserContext.Provider >
        );
        
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toBe( 'null' );
        
    });

    test('debe de mostrar el componente con el usuario', () => {
        
        render(
            <UserContext.Provider value={{ user }}>
                <LoginPage /> 
            </UserContext.Provider >
        );
        
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toContain( user.name );

    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        
        const setUserMock = jest.fn(); 

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage /> 
            </UserContext.Provider >
        );

        const button = screen.getByLabelText('button'); //aria-label
        fireEvent.click(button);
        
        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});

    });

});
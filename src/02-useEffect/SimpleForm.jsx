import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'zombi3',
        email: 'zombi32022@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState, // mantener todos los valores del formulario
            [ name ]: value // Propiedades computadas de los objetos 
            // [ nuevaProp ]: value esto ocasiona que se agregue una nueva propieda al objeto **warning**
        });
    };
    
    // useEffect( () => {
    //     console.log('useEffect called');
    // }, []); El useEffect con un arreglo vacio en la lista de dependencias solo se llama una vez
    
    useEffect( () => {
        // console.log('useEffect called!');
    }, []); 

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]); 
    
    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]); 

  
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="example@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'zombi3') && <Message />
            }

        </>
    );
};

import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState, // mantener todos los valores del formulario
            [ name ]: value // Propiedades computadas de los objetos 
            // [ nuevaProp ]: value esto ocasiona que se agregue una nueva propieda al objeto **warning**
        });
    };

    const onResetForm = () => {
        setFormState( initialForm );
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
};

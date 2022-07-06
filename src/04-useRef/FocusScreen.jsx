import { useRef } from 'react';


export const FocusScreen = () => {
    

    const inputRef = useRef(); //nos permite mantener una referencia sin disparar una nueva re-renderización

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();

    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className="form-control" 
                type="text" 
                placeholder="Ingrese su nombre"    
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onClick }
            >
                
                Set Focus
            </button>

        </>
    );
};
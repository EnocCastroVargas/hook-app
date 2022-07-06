import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export default function CallbackHook() {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    ); //Nos ayuda a memorizar funciones cuando algo cambie
    

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={incrementFather}/>
        
        </>
    );
};

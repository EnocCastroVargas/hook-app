

export const todoReducer = ( initialState  = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
            
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload ); //regresa un nuevo arreglo sin mutar el arreglo original
        
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) { // suponiendo que el payload es el id del todo
                    return {
                        ...todo,
                        done: !todo.done
                    };
                } 

                return todo;
            });
        
        default:
            return initialState;
    };

};

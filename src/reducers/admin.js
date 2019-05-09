const initialState = {

};

export function adminReducer(state = initialState, action){
    switch (action.type){
        case "SET_USUARIOS":
            return {...state,
                "usuarios": action.usuarios
            }
        case "SET_CLIENTES":
            return {...state,
                "clientes": action.clientes
            }
        default:
            return state;
    }
}

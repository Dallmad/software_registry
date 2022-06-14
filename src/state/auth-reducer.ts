const SET_IS_LOGGED_IN = 'login/SET-IS-LOGGED-IN'

const initialState = {
    isLoggedIn: false
}

export const authReducer = (state: InitialStateType = initialState, action:
    LoginActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

// actions
export const setIsLoggedIn = (value: boolean) => ({type: SET_IS_LOGGED_IN, value})

// types
type InitialStateType = typeof initialState
export type LoginActionsType = ReturnType<typeof setIsLoggedIn>
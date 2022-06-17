const SET_SORT = 'main/SET_SORT'
const SET_SEARCH = 'main/SET_SEARCH'

const initialState = {
    name:'',
    sort: '0id',
}

export const mainReducer = (state: InitialStateType = initialState, action:
    MainActionsType): InitialStateType => {
    switch (action.type) {
        case SET_SORT:
            return {...state, sort: action.sort}
        case SET_SEARCH:
            return {...state,name:action.name}
        default:
            return state
    }
}

// actions
export const setSortAC = (sort: string) => ({type: SET_SORT, sort} as const)
export const setSearchAC = (name: string) => ({type: SET_SEARCH, name} as const)

// types
type InitialStateType = typeof initialState
export type MainActionsType = ReturnType<typeof setSortAC>
    | ReturnType<typeof setSearchAC>

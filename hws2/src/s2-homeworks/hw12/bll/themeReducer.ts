const initState = {
    themeId: 1 
}

type InitStateType = {
    themeId: number
}

type ThemeActionType = {
    type: string
    id: number
}

export const themeReducer = (state = initState, action: ThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state, themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any



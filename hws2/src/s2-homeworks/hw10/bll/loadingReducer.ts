import { InitStateType } from './store';
const initState : InitStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':{
           return {
            ...state, isLoading:action.isLoading
        }
        }
        default:
            return state
    }
}
// ...state, [action.payload.todoListId] : [{id: v1(), title: action.payload.title, isDone: false }, ...state[action.payload.todoListId]] }

// return {...state, [action.payload.todoListId]: state[action.payload.todoListId].filter(t => t.id !== action.payload.taskId)}


type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}


export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const )




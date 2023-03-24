import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = state.sort((a,b) => a.name >= b.name ? 1 : -1)
            return action.payload === 'up' 
            ?  [...copyState]
            :[...copyState.reverse()]
         
        }
        case 'check': {
            return state.filter(st => st.age >= action.payload).sort((a,b) => a.name >= b.name ? 1 : -1)
            // .sort((a,b) => a.age - b.age)
             // need to fix
        }
        default:
            return state
    }
}




export const sortNameAC = () => {
    return {
        type: 'sort',
        payload: {
            up:'up',
            down: 'down'
        }
    } as const
}

export const checkAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: {
            age
        }
    } as const
}



// type addTodoListACType = ReturnType<typeof addTodoListAC>


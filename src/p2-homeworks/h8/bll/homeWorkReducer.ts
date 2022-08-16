import {UserType} from "../HW8";

export type ActionType = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof filterSortAC>


export const homeWorkReducer = (state: UserType[], action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case "SORT-UP": {
            // need to fix
            return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
        }
        case "SORT-DOWN": {
            // need to fix
            return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
        }
        case "SORT-FILTER": {
            return [...state.filter(e => e.age > 18)]
        }
        default:
            return state
    }
}


export const sortUpAC = () => {
    return {type: "SORT-UP"} as const
}

export const sortDownAC = () => {
    return {type: "SORT-DOWN"} as const
}

export const filterSortAC = () => {
    return {type: "SORT-FILTER"} as const
}
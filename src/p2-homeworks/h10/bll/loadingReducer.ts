export type LoadingType = {
    loading: boolean
}

const initState: LoadingType = {
    loading: false
}

type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: LoadingType = initState, action: ActionType): LoadingType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: "LOADING", loading} as const
}
// fix any
export type InitStateType = {
    color: string
}

const initState = {
    color: 'some'
};


type ActionType = ReturnType<typeof changeThemeC>


export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "COLOR-VARIANT": {
            return {...state, color: action.color};
        }
        default:
            return state;
    }
};

export const changeThemeC = (color: string) => {
    return {type: "COLOR-VARIANT", color} as const
} // fix any
export const initialState = {
    comment: ''
};

export function reducer(state, action) {
    switch(action.type) {
        case 'SET_FIELD': return {
            ...state,
            [action.field]: action.value
        }

        case 'CLEAR_FIELD': return {
            ...state,
            [action.field]: action.value
        }

        default: return state;
    }
}
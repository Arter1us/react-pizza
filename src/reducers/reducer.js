const initialState = {
    pizzas: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PIZZAS_FETCHING':
            return {
                ...state
            }
        default: return state;
    }
}

export default reducer;
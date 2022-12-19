const initialState = {
    products: [],
    productLoadingStatus: 'idle'
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "PRODUCTS_FETCHING":
            return{
                ...state,
                productLoadingStatus: 'loading'
            }
        case "PRODUCTS_FETCHED":
            return{
                ...state,
                products: action.payload,
                productLoadingStatus: 'idle'
            }
        case "PRODUCTS_FETCHING_ERROR":
            return{
                ...state,
                productLoadingStatus: 'error'
            }
        default:
            return state;
    }
}

export default reducer;
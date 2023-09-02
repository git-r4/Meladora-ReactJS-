export const fetchProducts = (request) => (dispatch) => {
    request("https://pr0ducts-default-rtdb.firebaseio.com/products.json")
        .then(data => dispatch(productFetched(data)))
        .catch((e) => dispatch(productFetchingError(e)))
}
export const productFetching = () => {
    return{
        type: "PRODUCTS_FETCHING"
    }
}
export const productFetched = (product) => {
    return{
        type: "PRODUCTS_FETCHED",
        payload: product
    }
}
export const productFetchingError  = () => {
    return{
        type: "PRODUCTS_FETCHING_ERROR"
    }
}
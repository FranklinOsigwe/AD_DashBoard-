export const getOrders = () => {
    return fetch('https://dummyjson.com/products/1').then( (res) => res.json())
}
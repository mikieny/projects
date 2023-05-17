import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket: [],
    countProductsInBasket: 0,
    sumBasket: [],
    countSumInBasket: 0,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addBasket: (state, payload) => {
            state.basket.push(payload.payload)
            console.log(payload.payload);
            state.sumBasket.push(payload.payload.price)
            state.countProductsInBasket = state.basket.length
            state.countSumInBasket = state.sumBasket.reduce((total, amount) => total + amount, 0);
        },
        deleteItem: (state, payload) => {
            const index = state.basket.findIndex(item => item.id === payload.payload.id)
            state.basket.splice(index, 1)
            state.sumBasket.splice(index, 1)
            state.countSumInBasket = state.sumBasket.reduce((total, amount) => total + amount, 0);
            state.countProductsInBasket = state.basket.length
        }
    }
});

export const { addBasket, deleteItem } = productsSlice.actions

export default productsSlice.reducer
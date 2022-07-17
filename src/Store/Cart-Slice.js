import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0
}

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem === undefined) {
                state.items.push({
                    id: newItem.id,
                    category: newItem.category,
                    quantity: newItem.quantity,
                });
                state.totalQuantity += newItem.quantity
            } else {
                existingItem.quantity += newItem.quantity;
                state.totalQuantity += newItem.quantity
            }
        },
        removeItemFromCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem.quantity <= newItem.quantity) {
                state.items = state.items.filter((item) => item.id !== newItem.id);
                state.totalQuantity -= newItem.quantity;
            } else {
                existingItem.quantity -= newItem.quantity;
                state.totalQuantity -= newItem.quantity;
            }
        },
    }
})

export const { addItemToCart, removeItemFromCart, replaceCart } = CartSlice.actions

export default CartSlice.reducer
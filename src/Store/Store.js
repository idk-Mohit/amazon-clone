import { configureStore } from "@reduxjs/toolkit";
import backdropSlice from "./backdrop-Slice";
import AuthSlice from "./Auth-Slice";
import SearchFieldSlice from "./SearchField-Slice";
import CartSlice from "./Cart-Slice";

const store = configureStore({
    reducer: {
        backdrop: backdropSlice,
        searchQuery: SearchFieldSlice,
        Auth: AuthSlice,
        Cart: CartSlice
    }
})


export default store
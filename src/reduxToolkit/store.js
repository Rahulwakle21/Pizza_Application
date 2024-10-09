import { configureStore } from "@reduxjs/toolkit";
import CartSlice from '../reduxToolkit/slicess/CartSlice'
import CategorySlice from '../reduxToolkit/slicess/CategorySlice'
import SearchSlice from '../reduxToolkit/slicess/SearchSlice'

 const Store = configureStore({
    reducer:{
        cart : CartSlice,
     category: CategorySlice,
     search: SearchSlice,

    },
})

export default Store
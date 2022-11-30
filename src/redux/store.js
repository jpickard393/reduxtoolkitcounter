import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});

// import all reducers you need into the store
// give each one a name and make it =  the reducer name from the slice
// adding the reducer to the store makes it available to the store
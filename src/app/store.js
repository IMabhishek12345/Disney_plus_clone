import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer  from  "../features/user/userSlice";

export default configureStore({
    reducer: userReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})
  


import {combineReducers, configureStore} from "@reduxjs/toolkit";
import products from "./reducers/products";
import user from "./reducers/user";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import findUsers from "./reducers/findUsers";
import notification from "./reducers/notification";
import {reqestSlice} from "./reducers/requsets";

const rootReducer = combineReducers({
    products: products,
    user,
    findUsers,
    notification
})

const persistConfig = {
    key : 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        persistedReducer,
        [reqestSlice.reducerPath] : reqestSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(reqestSlice.middleware)
})
export const persistor = persistStore(store)
export default store
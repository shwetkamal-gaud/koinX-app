import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/rootSaga';
import { mainReducer } from './reducers/reducers';


const rootReducer = combineReducers({
    api: mainReducer,
});


const sagaMiddleware = createSagaMiddleware();



const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: false,
            immutableCheck: process.env.NODE_ENV !== 'production',
        }).concat(sagaMiddleware),
}
);


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

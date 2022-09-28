import {combineReducers, configureStore} from '@reduxjs/toolkit';
import Rewards from './reducer/Rewards';
import createSagaMiddleware from '@redux-saga/core';
import {RootSaga} from './saga/RootSaga';

// Here I could add persistStore it would help avoid to load empty frames,
// and user could always see data from last session

const rootReducer = combineReducers({
  Rewards,
});

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof rootReducer>;

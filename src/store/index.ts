import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from '@/modules/';
import { createEpicMiddleware } from 'redux-observable';
// import promise from '@/modules/ColorPanelList/middleware';

// const sagaMiddleware = createSagaMiddleware();
// const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducers, applyMiddleware(logger));

// sagaMiddleware.run(rootSagas);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// epicMiddleware.run(rootEpic as any);

export type AppState = ReturnType<typeof store.getState>;

export default store;

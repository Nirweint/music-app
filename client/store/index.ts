import { Context, createWrapper } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, compose, createStore, Store } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { reducer, RootStateType } from 'store/reducers';

const middleware = [thunk];

const makeStore = (context: Context) =>
  createStore(reducer, compose(applyMiddleware(...middleware)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootStateType>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootStateType, void, AnyAction>;

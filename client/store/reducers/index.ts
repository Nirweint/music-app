import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import { playerReducer } from 'store/reducers/Player';

export const rootReducer = combineReducers({
  player: playerReducer,
});

// @ts-ignore
export const reducer = (state, action): RootStateType => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootStateType = ReturnType<typeof rootReducer>;

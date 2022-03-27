import { Context, createWrapper } from 'next-redux-wrapper';
import { createStore, Store } from 'redux';

import { reducer, RootStateType } from 'store/reducers';

const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootStateType>>(makeStore, { debug: true });

export const appSelector = state => state.appReducer;

export const isAuthSelector = state => appSelector(state).isAuthReducer.isAuth;

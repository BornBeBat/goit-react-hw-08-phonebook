export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectEmail = state => state.auth.user.email;
export const selectName = state => state.auth.user.name;
export const selectIsLoadingAuth = state => state.auth.isLoading;

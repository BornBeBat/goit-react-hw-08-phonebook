export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectEmail = state => state.auth.user.email;
export const selectIsLoadingAuth = state => state.auth.isLoading;
export const selectName = state => state.auth.user.name;
export const selectToken = state => state.auth.token;

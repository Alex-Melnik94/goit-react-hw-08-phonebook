const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getRefreshingCurrentUser = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getRefreshingCurrentUser,
};

export default authSelectors;

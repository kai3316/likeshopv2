export default {
  userInfo: state => state.app.userInfo || {},
  token: state => state.app.token,
  isLogin: state => !!state.app.token,
};
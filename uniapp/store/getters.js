export default {
  userInfo: state => state.app.userInfo || {},
  token: state => state.app.token,
  isLogin: state => !!state.app.token,
  cartNum: state => state.app.cartNum,
   appConfig: state => state.app.config
};

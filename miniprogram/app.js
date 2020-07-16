// app.js
import {User} from './module/user';
import {px2rpx} from './core/utils/common';
App({
  onLaunch: async function () {
    let user = new User();
    user.login();
  },
  globalData: {
    user: User,
  }
});

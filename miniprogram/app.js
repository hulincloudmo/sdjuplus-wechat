// app.js
import {User} from './module/user';
App({
  onLaunch: async function () {
    let user = new User();
    user.login();
    const systemInfo = await wx.getSystemInfo()
    this.globalData.statusBarHeight = systemInfo.statusBarHeight
  },
  globalData: {
    user: User,
    statusBarHeight: 0
  }
});

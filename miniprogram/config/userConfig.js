/**
 * @author 陌上青夏
 * @创建时间 2020/8/18 6:16 下午
 */
export class UserConfig {

  static instance = null

  setting = null

  constructor () {
    if (UserConfig.instance !== null) {
      return UserConfig.instance
    } else {
      UserConfig.instance = this
      return this
    }
  }

  IsInit () {
    let config = wx.getStorageSync('setting')
    if (config) {
      return config
    } else {
      return false
    }
  }

  initSetting () {
    let config = {
      showWeekend: true,
      userCourseList: [],
      nowWeek: 1
    }
    this.setting = config
    wx.setStorageSync('setting', config)
  }

  getData () {
    if (this.setting) {
      return this.setting
    } else {
      this.initSetting()
    }
  }

}

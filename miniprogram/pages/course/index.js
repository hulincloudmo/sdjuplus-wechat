// miniprogram/pages/course/index.js
import {weekList, workList} from '../../config/index';
import {px2rpx} from '../../core/utils/common';
import {UserConfig} from '../../config/userConfig'

const app = getApp();
Page({

  /**
     * 页面的初始数据
     */
  data: {
    week: 1,
    statusBar: {
      height: 0,
      icon: 'arrow-down'
    },
    setting: {
      showWeekend: true
    },
    showSwitchWeek: false,
    showSetting: false,
    weekSelected: weekList
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    this.init();
    const config = new UserConfig()
    console.log(config)
  },

  async init () {
    const newState = {...this.data.statusBar};
    newState.height = await this.getStatusBarHeight();
    this.setData({
      statusBar: newState
    });
  },

  async getStatusBarHeight () {
    const systemInfo = await wx.getSystemInfo();
    return px2rpx(systemInfo.statusBarHeight);
  },
  showPanel (event) {
    const clickModel = event.currentTarget.dataset.showmodel
    switch (clickModel) {
    case 'switchWeek':
      this.setData({
        showSwitchWeek: true
      }); break;
    case 'setting':
      this.setData({
        showSetting: true
      });
    }
  },
  closePanel () {
    this.setData({
      showSwitchWeek: false,
      showSetting: false
    });
  },
  changeWeek (event) {
    const week = event.target.dataset.week;
    this.setData({
      week: week
    });
  },
  onChangeWeekendShow ({detail}) {
    const newSetting = {...this.data.setting}
    newSetting.showWeekend = detail
    this.setData({
      setting: newSetting,
      weekSelected: detail ? weekList : workList
    })
  }
}
);

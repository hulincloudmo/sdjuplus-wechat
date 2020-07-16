// miniprogram/pages/course/index.js
import { weekList } from '../../config/index';
import {px2rpx} from '../../core/utils/common';
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
    showPanel: false,
    weekList: weekList
  },

  /**
       * 生命周期函数--监听页面加载
       */
  onLoad: function (options) {
    this.init();
  },

  async init () {
    const newState = {...this.data.statusBar};
    newState.height = await this.getStatusBarHeight();
    this.setData({
      statusBar: newState
    });
  },

  async getStatusBarHeight() {
    const systemInfo = await wx.getSystemInfo();
    return px2rpx(systemInfo.statusBarHeight);
  },
  showPanel () {
    this.setData({
      showPanel: true
    });
  },
  closePanel () {
    this.setData({
      showPanel: false
    });
  }
}
);

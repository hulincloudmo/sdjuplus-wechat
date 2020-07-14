// miniprogram/pages/course/index.js
import { weekList } from '../../config/index';
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

  init () {
    const newState = {...this.data.statusBar};
    newState.height = app.globalData.statusBarHeight;
    this.setData({
      statusBar: newState
    });
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

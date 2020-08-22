// miniprogram/pages/course/index.js
import {weekList, workList} from '../../config/index';
import {px2rpx} from '../../core/utils/common';
import {UserConfig} from '../../config/userConfig'
import {Course} from '../../module/course'
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify.js';

const app = getApp();
const course = new Course()
Page({

  /**
     * 页面的初始数据
     */
  data: {
    statusBar: {
      height: 0,
      icon: 'arrow-down'
    },
    setting: {
      showWeekend: true
    },
    courseList: [],
    showSwitchWeek: false,
    showSetting: false,
    thisWeek: 1,
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

  onShow () {
    const courseList = course.getData()
    this.setData({
      courseList,
      thisWeek: Course.thisWeek
    })
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
    Course.thisWeek = week
    this.setData({
      thisWeek: week
    });
  },
  onChangeWeekendShow ({detail}) {
    const newSetting = {...this.data.setting}
    newSetting.showWeekend = detail
    this.setData({
      setting: newSetting,
      weekSelected: detail ? weekList : workList
    })
    if (!detail) {
      Notify({ type: 'success', message: '周末没课，开心啊！', safeAreaInsetTop: true })
    } else {
      Notify({ type: 'primary', message: '周末学习，勤奋！', safeAreaInsetTop: true })
    }
  },
  refreshCourse () {
    course.freshenCourse(1002, true)
  }
}
);

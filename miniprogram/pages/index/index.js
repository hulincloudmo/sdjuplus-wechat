// index.js
import {randomColor} from '../../core/utils/common';

const app = getApp();
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify.js';
import {Course} from '../../module/course'

Page({
  data: {
    grid: [
      {
        title: '最新校历',
        icon: '/images/icons/index/2019semester.png',
        url: ''
      },
      {
        title: '学校通知',
        icon: '/images/icons/index/elective.png',
        url: ''
      },
      {
        title: '常用手册',
        icon: '/images/icons/index/retrieve.png',
        url: ''
      }
    ],
    showMain: false,
    userCourseList: []
  },

  onLoad: function () {

  },

  onReady () {
    this.initCourseList()
  },

  initCourseList () {
    const course = new Course()
    this.setData({
      userCourseList: course.getData()
    })
  },

  onShow () {
    this.showTransition();
  },

  showTransition () {
    this.setData({
      showMain: false
    });
    Notify({ type: 'primary', message: '今天可能下雨，记得带伞呢', safeAreaInsetTop: true });
    setTimeout(() => {
      this.setData({
        showMain: true
      }, 1000);
    });
  },

  userCourseIsEmpty () {
    return this.data.userCourseList.length === 0;
  }

});

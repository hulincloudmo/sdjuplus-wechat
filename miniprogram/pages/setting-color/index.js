// miniprogram/pages/setting-color/index.js
import {Course} from '../../module/course'
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onChangeColor () {
    const course = new Course()
    course.initCourseColor()
    Notify({ type: 'success', message: '修改成功，回到课程页看看吧' });
  }
})

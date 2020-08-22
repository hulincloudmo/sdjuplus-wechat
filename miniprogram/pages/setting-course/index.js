// miniprogram/pages/setting-course/index.js
import {Course} from '../../module/course'

const course = new Course()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList: []
  },

  onShow () {
    const courseList = course.getData()
    this.setData({
      courseList
    })
  }
})

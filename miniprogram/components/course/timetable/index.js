// components/course/timetable/index.js
import {Judger} from '../../module/judger';

const app = getApp()
Component({
  options: {
    addGlobalClass: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    week: {
      type: Number,
      default: 7
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    courseList: [],
    judger: {}
  },

  lifetimes: {
    ready () {
      const judger = new Judger()
      this.setData({
        judger
      })
    }
  },

  pageLifetimes: {
    show: function () {
      const courseList = app.globalData.userCourseList
      this.setData({
        courseList
      }
      )
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
});

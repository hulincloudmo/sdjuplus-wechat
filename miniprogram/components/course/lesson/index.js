// components/course/lesson/index.js
import {Judger} from '../../module/judger';
import {randomColor} from '../../../core/utils/common';

Component({

  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    x: {
      type: Number,
      require: true
    },
    y: {
      type: Number,
      require: true
    },
    courseList: {
      type: Array
    },
    thisWeek: {
      type: Number
    }
  },

  observers: {
    'courseList': function () {
      this.getLesson()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lesson: null,
    nodeLength: 2
  },

  lifetimes: {
    ready () {
      this.getLesson()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getLesson () {
      let { x, y, courseList } = this.properties
      let judger = new Judger()
      let lesson = judger.hasLesson(x, y, courseList)
      console.log(lesson)
      this.setData({
        lesson
      })
    },
    showChangePanel () {

    }
  }
})

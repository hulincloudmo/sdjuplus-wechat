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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lesson: null
  },

  lifetimes: {
    ready () {
      let { x, y, courseList } = this.properties
      let lesson = Judger.hasLesson(x, y, courseList)
      this.setData({
        lesson
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

// components/course/timetable/index.js
import {Judger} from '../../module/judger';
import {Course} from '../../../module/course'

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
    },
    courseList: {
      type: Array
    },
    thisWeek: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
});

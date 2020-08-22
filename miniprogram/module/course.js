/**
 * @author 陌上青夏
 * @创建时间 2020/7/24 10:12 上午
 */
import {CourseAPI} from '../api/course'
import {HttpCode} from '../api/common'
import {randomColor} from '../core/utils/common'


class Course {
  courseList = []
  static instance = null
  isInitColor = false
  static thisWeek = 1
  userId = 1002

  constructor () {
    if (Course.instance !== null) {
      return Course.instance
    } else {
      Course.instance = this
      return this
    }
  }

  get hasData () {
    return this.courseList.length !== 0
  }

  refreshCourseStorage () {
    wx.setStorageSync('courseList', this.courseList)
  }

  setCourseList (courseList) {
    this.courseList = courseList
    this.refreshCourseStorage()
  }

  initCourseColor () {
    for (let i = 0; i < this.courseList.length; i++) {
      this.courseList[i].color = randomColor()
    }
    this.refreshCourseStorage()
    this.isInitColor = true
  }

  getData () {
    if (this.courseList.length !== 0) {
      return this.courseList
    } else {
      const courseList = wx.getStorageSync('courseList')
      if (courseList) {
        this.courseList = courseList
        return courseList
      }
    }
  }

  getWeek (node) {
    return node.split('&').charAt(0)
  }

  async updateCourseData (userId) {
    const data = await CourseAPI.getUserCourseMsg(userId)
    if (data.data.code === HttpCode.successCode) {
      this.courseList = data.data.userCourseList
      this.initCourseColor()
      wx.setStorageSync('courseList', this.courseList)
    } else {
      console.error('课程信息请求失败')
    }
  }

  async freshenCourse (userId, force = false) {
    if (force) {
      await this.updateCourseData(userId)
    } else {
      this.getData()
      if (!this.hasData) {
        await this.updateCourseData(userId)
      }
    }
  }
}

export {
  Course
}

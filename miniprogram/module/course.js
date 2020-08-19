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

  constructor () {
    if (Course.instance !== null) {
      return Course.instance
    } else {
      Course.instance = this
      return this
    }
  }

  refreshCourseStorage () {
    wx.setStorageSync('courseList', this.courseList)
  }

  initCourseColor () {
    for (let i = 0; i < this.courseList.length; i++) {
      this.courseList[i].color = randomColor()
    }
    this.refreshCourseStorage()
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

  async freshenCourse (userId) {
    const data = await CourseAPI.getUserCourseMsg(userId)
    if (data.data.code === HttpCode.successCode) {
      this.courseList = data.data.userCourseList
      wx.setStorageSync('courseList', this.courseList)
    } else {
      console.error('课程信息请求失败')
    }
  }

}

export {
  Course
}

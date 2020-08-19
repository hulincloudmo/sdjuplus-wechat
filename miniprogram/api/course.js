/**
 * @author 陌上青夏
 * @创建时间 2020/8/19 10:49 上午
 */
import { Http } from '../core/utils/http'

class CourseAPI {
  static async getUserCourseMsg (userId) {
    return await Http.request({
      url: `userCourseList?userId=${userId}`
    })
  }
}

export {
  CourseAPI
}

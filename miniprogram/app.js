// app.js
import {User} from './module/user';
import {UserConfig} from 'config/userConfig'
import {Course} from './module/course'
App({
  onLaunch: async function () {
    let user = new User();
    let config = new UserConfig();
    const course = new Course()
    course.freshenCourse(1002)
    user.login();
  },
  globalData: {
    user: User
  }
});

// app.js
import {User} from './module/user';
App({
  onLaunch: async function () {
    let user = new User();
    user.login();
  },
  globalData: {
    user: User,
    userCourseList: [
      {
        node: '2-1&2-2',
        name: '计算机网络',
        location: 'A教201',
        teacher: '王者荣耀'
      },
      {
        node: '2-3&2-4',
        name: '数据结构',
        location: 'A教202',
        teacher: '刺激战场'
      }
    ]
  }
});

import {randomColor} from '../../core/utils/common';

class Judger {
  static startNode = 0
  static endNode = 1
  static hasLesson (x, y, courseList) {
    let coordinate = `${x}-${y}`
    for (let i = 0; i < courseList.length; i++) {
      let nodes = courseList[i].node.split('&')
      let index = nodes.findIndex((v) => v === coordinate)
      if (index === Judger.startNode) {
        return {
          has: true,
          data: courseList[i],
          isStart: true
        }
      } else if (index === Judger.endNode) {
        return {
          has: true,
          data: courseList[i],
          isStart: false
        }
      }
    }
    return {
      has: false,
      data: null
    }
  }
}

export {
  Judger
}

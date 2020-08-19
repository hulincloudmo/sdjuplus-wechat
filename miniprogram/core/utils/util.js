const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res)
        },
        fail: (error) => {
          reject(error)
        }
      })
      func(args)
    })
  }
}

const px2rpx = function (pxNumber) {
  const {screenWidth} = wx.getSystemInfoSync()
  return (750 / screenWidth) * pxNumber
}

// 判断传入值是否为空或undefined
const isNotEmpty = function (obj) {
  let type = typeof obj
  if (type === 'undefined') {
    return false
  }
  if (type === 'string') {
    if (obj === '') {
      return false
    }
  }
  if (type === 'object') {
    if (obj === null || obj.length === 0 || JSON.stringify(obj) === '{}') {
      return false
    }
  }
  return true
}

const isEmpty = function (obj) {
  let type = typeof obj
  if (type === 'undefined') {
    return true
  }
  if (type === 'string') {
    if (obj === '') {
      return true
    }
  }
  if (type === 'object') {
    if (obj === null || obj.length === 0 || JSON.stringify(obj) === '{}') {
      return true
    }
  }
  return false
}

const combination = function (arr, size) {
  let r = [];

  function _ (t, a, n) {
    if (n === 0) {
      r[r.length] = t;
      return;
    }
    for (let i = 0, l = a.length - n; i <= l; i++) {
      let b = t.slice();
      b.push(a[i]);
      _(b, a.slice(i + 1), n - 1);
    }
  }

  _([], arr, size);
  return r;
}

export {
  promisic,
  px2rpx,
  isNotEmpty,
  isEmpty,
  combination
}

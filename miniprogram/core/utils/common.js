const colorList = ['#39b54a', '#f37b1d', '#0081ff', '#e54d42', '#1cbbb4', '#e03997', '#9000ff', '#9c26b0', '#e03997', '#39b54a']

const px2rpx = function (pxNumber) {
  const {screenWidth} = wx.getSystemInfoSync();
  return (750 / screenWidth) * pxNumber;
};

const randomColor = function () {
  return colorList[Math.floor(Math.random() * 10)]
}

export {
  px2rpx,
  randomColor
};

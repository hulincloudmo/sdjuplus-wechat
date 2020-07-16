const px2rpx = function (pxNumber) {
  const {screenWidth} = wx.getSystemInfoSync();
  return (750 / screenWidth) * pxNumber;
};

export {
  px2rpx
};

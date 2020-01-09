//index.js
//获取应用实例
const app = getApp()
import httpRequest from '../../utils/request.js'
Page({
  data: {
    isShow: false,
    nameList: []
  },
  //事件处理函数
  clickEvent: function() {
    wx.showLoading({
      title: 'loading',
    })
    var that = this
    httpRequest.get('api/nameList').then(res => {
      wx.hideLoading();
      var nameList = res.data.nameList
      that.setData({ 
        isShow: true,
        nameList
      })
    })
  }
})

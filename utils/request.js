const globalUrl = getApp().globalData.url

/**
 * 请求接口API封装
 *@param {String} url 根路径
 *@param {Object} data 请求参数
 *@param {String} method 请求方式
*/

var httpRequest = (url, data, method) => {
  url = globalUrl + url;
  return new Promise((resolve, reject)=> {
    wx.request({
      url: url,
      method: method,
      data: data,
      dataType: 'json',
      contentType: 'application/json',
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err.data)
      }
    })
  })
}

export default {
  get(url, data) {
    return httpRequest(url, data, "GET")
  },
  post(url, data) {
    return httpRequest(url, data, "POST")
  }
}

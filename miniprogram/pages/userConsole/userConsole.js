// pages/userConsole/userConsole.js
Page({

  data: {
    openid: '',
    unionid:'',
    appid:''
  },

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid,
      unionid: getApp().globalData.unionid,
      appid:getApp().globalData.appid
    })
  }
})
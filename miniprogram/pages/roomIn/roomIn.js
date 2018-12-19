// miniprogram/pages/roomIn/roomIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      name: '宇少',
      imgID: '125445544'
    },
  },
  bindKeyInput(e) {
    this.setData({
      'user.name': e.detail.value
    })
  },
  beginChat(){
    wx.connectSocket({
      url: 'wss://www.yuyuying.top:8089'
    })
    wx.onSocketOpen(res => {

      wx.navigateTo({
        url: `../chatRoom/chatRoom?userName=${this.data.user.name}&userImgID='123456'`,
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
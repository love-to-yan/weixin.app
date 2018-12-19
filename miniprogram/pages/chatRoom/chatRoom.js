// miniprogram/pages/chatRoom/cahrRoom.js
let socketFlag = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      name:'宇少',
      imgID:'125445544',
      userID:0
    },
    userID:0,
    userImgUrl:'',
    room:{
      name:'',
      length:0
    },
    img:{},
    increase:false,
    msg:[],
    userInfo:true,
    scrollTop:0,
    newslist:[],
    info_flag:false,
    newUser:'aaa'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    this.setData({
      'user.name':options.userName,
      'user.imgID':options.userImgID
    })
    wx.sendSocketMessage({
      data: JSON.stringify({
        type: 'user',
        user: this.data.user
      })
    })
    
    wx.onSocketMessage(data=>{
      console.log(JSON.parse(data.data));
      let result = JSON.parse(data.data);
       if(result.type==='user'){
         this.setData({
           'room.length': result.length,
           'user.userID': result.userID
         })
       }

      if (result.type === 'info_out') {
       console.log(result.user.name+'离开了房间')
      } 
      if (result.type === 'room_in') {
        console.log(result.user.name + '进入了房间')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
   sendMessage(msg) {
    if(socketFlag) {
      let data = JSON.stringify({
        user
      })
      wx.sendSocketMessage({
        data: msg,
      })
    }
  }
})


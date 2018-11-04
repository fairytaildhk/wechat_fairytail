//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    systemInfo:{},
    location:{}
  },
  //TODO(dhk)
  viewTap: function () {
    console.log('view tap')
  },
  //分享功能（dhk）
  onShareAppMessage: function () {
    return {
      title: '影视收藏',
      path: '/pages/index/index'
    }
  },
  //点击按钮click改变显示的motto值（dhk）
  changeName: function (e) {
    this.setData({
      motto: '丁黄凯的第一个微信小程序demo'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  systemInfo:function(){
    var that = this;

    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        });
      }
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo:res
        })
      }
    });
    // 获取位置信息    
    wx.getLocation({
    success: function(res) {
      that.setData({
        location: res
      });
    }
  });
    wx.getNetworkType({
      success: function (res) {
        console.log(res)
      }
    });
    // wx.chooseLocation({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // });
    // wx.addPhoneContact({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // });
  }
})

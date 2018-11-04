//index2.js
//获取应用实例
//var app = getApp()
var initData = '《金刚狼》\n《盗梦空间》'
var extraLine = [];
Page({
  data: {
    text: initData
  },
  // data: {
  //   motto: 'Hello World',
  //   userInfo: {}
  // },
  //TODO(dhk)
  viewTap: function () {
    console.log('view tap')
  },
  //Do(dhk)
  add: function (e) {
      extraLine.push('todo')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },

  remove: function (e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },
  //分享功能（dhk）
  onShareAppMessage: function () {
    return {
      title: '电影列表',
      path: '/pages/index/index'
    }
  },
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})


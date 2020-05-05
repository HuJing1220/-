//app.js
App({
  
  onLaunch: function () {
    let that = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {

        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {

                // 可以将 res 发送给后台解码出 unionId
                that.globalData.userInfo = res.userInfo

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (that.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
    //获取手机状态栏高度
    wx.getSystemInfo({
      success: function (res) {
        var info = wx.getMenuButtonBoundingClientRect()
        that.globalData.barInfo.customBarHeight = res.statusBarHeight + info.height + (info.top - res.statusBarHeight)*2
        that.globalData.barInfo.statusBarHeight = res.statusBarHeight
        that.globalData.barInfo.menuButtonHeight = info.height
        that.globalData.barInfo.interval = info.top - res.statusBarHeight
        that.globalData.barInfo.windowHeight = wx.getSystemInfoSync().windowHeight

      }
    })

  },
  globalData: {
    "userInfo": null,
    barInfo:{
      "statusBarHeight":null,
      "customBarHeight":null,
      "menuButtonHeight":null,
      "interval":null,
      "windowHeight":null
    }
  }
})
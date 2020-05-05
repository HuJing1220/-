//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isok:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    customBarHeight: null,
    scrollHeight: null, //屏幕高度
    menuButtonHeight: null, //胶囊高度+上边距
    searchHeight: 28, //搜索框高度
    searchDisabled: true, //搜索框是否可用
    titleMarginTop: null, //标题距离顶部高度
    navigationMarginTop: null, //顶部标签距离顶部高度
    placeholder: "搜索", //顶部搜索框没有内容是显示的内容
    barOpacity: 0.0, //顶部透明度
    TabCur: 0, //顶部选项卡当前位置
    navigationList: [{
        "text": "首页"
      },
      {
        "text": "手机"
      },
      {
        "text": "电脑"
      },
      {
        "text": "平板"
      },
      {
        "text": "电脑"
      },
      {
        "text": "平板"
      },
      {
        "text": "电脑"
      },
      {
        "text": "平板"
      },
      {
        "text": "电脑"
      },
      {
        "text": "平板"
      },
      {
        "text": "电脑"
      },
      {
        "text": "平板"
      },
      {
        "text": "电脑"
      },
    ],
    swiperItem: [ //swiperItem列表数据
      {
        background: "/static/images/bar/0.png"
      },
      {
        background: "/static/images/bar/1.png"
      },
      {
        background: "/static/images/bar/2.png"
      }
    ],
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: '手机'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '平板'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '电脑'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '数码'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '服装'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '公益'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: '乐器'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: '运动器材'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '门票'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: '书籍'
    }],
    gridCol: 5,
    skin: false,
    sortLableList:[
      {"text":"推荐"},
      {"text":"新发"},
      {"text":"推荐"},
      {"text":"新发"},
    ]
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    var barInfo = app.globalData.barInfo
    //设置页面参数
    that.setData({
      customBarHeight: barInfo.customBarHeight,
      menuButtonHeight: barInfo.menuButtonHeight,
      titleMarginTop: barInfo.statusBarHeight + barInfo.interval,
      navigationMarginTop: barInfo.customBarHeight + this.data.searchHeight + 10,
      scrollHeight: barInfo.windowHeight - 50 //剪去底部bar的高度
    })

    
    console.log(that.data.scrollHeight)

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 底部到导航栏点击触发
   * @param {*} e 
   */
  tabbarChange(e) {

    var index = parseInt(e.detail);

    this.setData({
      blockid: index
    })
  },
  upper(e) {
    this.changeOpacity(0.0)
  },
  lower(e) {

  },
  scroll(e) {
    var that = this
  //   let query = wx.createSelectorQuery()
  //   query.selectAll('.goods,.haha').boundingClientRect( (rect) => {

  //     if(rect[1] != null && that.data.navigationMarginTop == rect[1].top){
  //      that.setData({
  //        isok:true
  //      })
  //     }else if(e.detail.deltaY > 0 &&rect[0].top>95){
  //           that.setData({
  //             isok:false
  //           })
  //     }
  // }).exec()

    var that = this
    var scrollTop = e.detail.scrollTop
    if ((scrollTop < 100) && e.detail.deltaY < 0) {
      that.changeOpacity(scrollTop / 100)
    } else if (scrollTop >= 100) {
      that.changeOpacity(1)
    } else if (scrollTop < 10) {
      that.changeOpacity(0.0)
    }

  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },
  /**
   * 改变顶部bar的透明度
   */
  changeOpacity(value) {
    this.setData({
      barOpacity: value
    })
  },
  aa(e){
    console.log(e)
  }
})
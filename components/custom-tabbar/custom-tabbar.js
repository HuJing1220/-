// components/custom-tabbar/custom-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbarData: { //tabbar的数据
      type: null,
      observer: function(newVal, oldVal) {

        this.setData({
          list: newVal
        })
      }
    },
  //   active: { //选中的下标
  //     type: null,
  //     observer: function(newVal, oldVal) {

  //       if (newVal != '') {
  //         this.setData({
  //           selected: newVal
  //         })
  //       }
  //     }
  //   },
  //   bgcolor: { //背景颜色
  //     type: null,
  //     observer: function(newVal, oldVal) {

  //       if (newVal != '') {
  //         this.setData({
  //           bgcolor: newVal
  //         })
  //       }
  //     }
  //   },
  //   color: { //未选中的字体颜色
  //     type: null,
  //     observer: function(newVal, oldVal) {

  //       if (newVal != '') {
  //         this.setData({
  //           color: newVal
  //         })
  //       }
  //     }
  //   },
  //   selectedColor: { //选中的字体颜色
  //     type: null,
  //     observer: function(newVal, oldVal) {
        

  //       if (newVal != '') {
  //         this.setData({
  //           selectedColor: newVal
  //         })
  //       }

  //     }
  //   },
  //   showborder: { //选中的字体颜色
  //     type: null,
  //     observer: function (newVal, oldVal) {

  //       if (newVal != '') {
  //         this.setData({
  //           showborder: newVal
  //         })
  //       }

  //     }
  //   },
  //   bordercolor: { //分割线的颜色
  //     type: null,
  //     observer: function (newVal, oldVal) {

  //       if (newVal != '') {
  //         this.setData({
  //           bordercolor: newVal
  //         })
  //       }

  //     }
  //   },
   },
  /**
   * 数据赋值
   */
  data: {
    selected: 0,//选中的下标
    showborder:false,//显示分割线
    bordercolor:"#1296db",//分割线的颜色
    bgcolor:"#ffffff",//背景颜色
    color: "#333333",//未选中的字体颜色
    selectedColor: "#DC143C",//选中的字体颜色
    list: [
      {
        pagePath: "page/home0/index",
        selectedIconPath: '/static/images/custom-tabbar/home.png',
        iconPath: '/static/images/custom-tabbar/homeh.png',
        text: '首页',
        isdot: false,
        number: 0,
        extrude:false
      }, {
        pagePath: "page/home1/index",
        selectedIconPath: '/static/images/custom-tabbar/kind.png',
        iconPath: '/static/images/custom-tabbar/kindh.png',
        text: '广场',
        isdot: false,
        number: 0,
        extrude:false
      }, {
        pagePath: "page/home0/index",
        selectedIconPath: '/static/images/custom-tabbar/add.png',
        iconPath: '/static/images/custom-tabbar/add.png',
        text: '发布',
        isdot: false,
        number: 0,
        extrude:true
      }, {
        pagePath: "page/home2/index",
        selectedIconPath: '/static/images/custom-tabbar/info.png',
        iconPath: '/static/images/custom-tabbar/infoh.png',
        text: '消息',
        isdot: true,
        number: 0,
        extrude:false
      }, {
        pagePath: "page/home3/index",
        selectedIconPath: '/static/images/custom-tabbar/my.png',
        iconPath: '/static/images/custom-tabbar/myh.png',
        text: '我的',
        isdot: false,
        number: 0,
        extrude:false
      }
    ],//tabbar的数据列表
  },
  //项目初始化
  attached: function() {

  },
    /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      var that = this;
      console.log(e.currentTarget.dataset.index)
      that.setData({
        selected: parseInt(e.currentTarget.dataset.index)
      })

      //回调函数
      that.triggerEvent('tapChange', parseInt(e.currentTarget.dataset.index));
    },
  }
})

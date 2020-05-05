// components/custom-title/custom-title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: String,
      observer: function (newVal, oldVal) {
        if (newVal != '') {
          this.setData({
            height: newVal
          })

        }
      }
    },
    width: {
      type: String,
      observer: function (newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            width: newVal
          })
        }
      }
    },
    color: {
      type: String,
      observer: function (newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            color: newVal
          })
        }
      }
    },
    text: {
      type: String,
      observer: function (newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            text: newVal
          })

        }
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    height: 100,
    width: "90%",
    color: "#000000",
    text: "标题"

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    placeholder : {
      type:String,
      observer: function(newVal,oldVal){
        if(newVal != ''){
          this.setData({
            placeholder:newVal
          })
        }
    
      }
    },
    height : {
      type:String,
      observer: function(newVal,oldVal){
        if(newVal != ''){
          this.setData({
            width:newVal
          })
        }
      }
    },
    width : {
      type:String,
      observer: function(newVal,oldVal){
       
        if(newVal != ''){
          this.setData({
            width:newVal
          })
        }
      }
    },
    disabled:{
      type:Boolean,
      observer:function(newVal,oldVal){
        if(newVal !=''){
          this.setData({
            disabled:newVal
          })
        }
      }
    }
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    placeholder:"搜索",
    height:30,
    width:"90%",
    disabled:false  //搜索框是否听停用

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

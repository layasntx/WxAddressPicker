Page({

  /**
   * 页面的初始数据
   */
  data: {
    ids: [5, 220, 1896]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onColumnChange: function(e) {
    console.log('column: ', e.detail.column, 'value: ', e.detail.value);
  },
  onChange: function(e) {
    console.log('onChange: ', e.detail.value)
  }
})
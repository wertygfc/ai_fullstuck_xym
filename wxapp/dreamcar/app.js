// app.js
App({
  onLaunch() {
    console.log("应用启动了");
    wx.request({
      url: 'http://resources.ninghao.net/wxapp-case/db.json',
      success:(response) => {
        console.log(response, 'ddddd');
        this.globalData = response.data
    }
    })
  },
  globalData: {
    userInfo: null
  }
})

const api = require('../../api/index.js');
const app = getApp();

Page({
  data: {
    title: '登录',
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    accesstoken: '90821d3b-f348-4e74-8fb3-10d765114d20',  // 90821d3b-f348-4e74-8fb3-10d765114d20
    islogin: wx.getStorageSync('id') || ''
  },
  inputhandle(e) {
    this.setData({
      accesstoken: e.detail.value
    });
  },
  tabhandle(e) {
    const data = {
      accesstoken: this.data.accesstoken
    };
    const path = 'accesstoken';

    api.post(data, path).then(res => {
      // 清空缓存
      try {
        wx.clearStorageSync();
      } catch(err) {
        throw new Error(err);
      }
      Object.keys(res.data).filter(key => {
        if (key !== 'success') {
          try {
            wx.setStorageSync(key, res.data[key]);
          } catch(error) {
            throw new Error(error);
          }
        }
      });
    });
  },
  onLoad(e) {
    //调用少验证码接口
    // wx.scanCode({
    //   success(res) {
    //     console.log(res);
    //   },
    //   fail(res) {
    //     console.log(res);
    //   }
    // });
  }
});

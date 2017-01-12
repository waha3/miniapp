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
    islogin: false,
    userinfo: {}
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
      if (!res.data.success) {
        wx.showToast({
          title: res.data.error_msg,
          icon: 'loading',
          duration: 1500
        });
        return false;
      } else {
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1500
        });
      }

      // 清空缓存
      try {
        wx.removeStorageSync('accesstoken');
        wx.removeStorageSync('loginname');
      } catch(error) {
        throw new Error(error);
      }

      try {
        wx.setStorageSync('accesstoken', this.data.accesstoken);
        wx.setStorageSync('loginname', res.data.loginname);
      } catch (err) {
        throw new Error(err);
      }

      // 重新渲染
      this.setData({
        islogin: true
      });

      // 存在topicid 直接条转到评论页面
      if (app.topicid) {
        wx.navigateTo({
          url: `../comment/index?id=${app.topicid}`
        });
      } else {
        if (this.data.islogin) {
          let username = wx.getStorageSync('loginname');
          let _path = `user/${username}`;
          api.get(_path).then(_data => {
            this.setData({
              userinfo: _data.data.data
            });
          });
        }
      }
    });
  },
  clearTokenhandle() {
    try {
      wx.removeStorageSync('accesstoken');
      wx.removeStorageSync('loginname');
    } catch(err) {
      throw new Error(err);
    }

    this.setData({
      islogin: false
    });
  },
  onLoad(e) {
    this.setData({
      islogin: wx.getStorageSync('accesstoken') ? true : false
    });

    if (this.data.islogin) {
      let username = wx.getStorageSync('loginname');
      let path = `user/${username}`;
      api.get(path).then(data => {
        this.setData({
          userinfo: data.data.data
        });
      });
    }
  }
});

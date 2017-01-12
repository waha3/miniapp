const api = require('../../api/index.js');
const app = getApp();

Page({
  data: {
    userinfo: {}
  },
  onLoad(options) {
    const { loginname } = options;
    const path = `user/${loginname}`;
    api.get(path).then(res => {
      this.setData({
        userinfo: res.data.data
      });
    });
  }
});

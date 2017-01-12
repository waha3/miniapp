const api = require('../../api/index.js');
const app = getApp();

Page({
  data: {
    title: 'hello world',
    id: '',
    content: {},
    islogin: false
  },
  makecommentHandle() {
    const { id, islogin } = this.data;
    const path = islogin ? 'comment' : 'home';
    const url =  `../${path}/index?id=${id}`;
    wx.navigateTo({
      url
    });
  },
  onLoad(e) {
    this.setData({
      id: e.id
    });

    const { id } = this.data;
    const path = `topic/${id}?mdrender=false`;
    api.get(path).then(res => this.setData({
      content: res.data.data
    }));

    // 检查有没有登录
    if (wx.getStorageSync('id')) {
      this.setData({
        islogin: true
      });
    }
  }
});

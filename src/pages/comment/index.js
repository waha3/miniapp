const api = require('../../api/index.js');
const app = getApp();

Page({
  data: {
    title: '',
    disabled: false,
    topicid: ''
  },
  makecommentHandle() {
    console.log('xxx');
  },
  onLoad(e) {
    this.setData({
      topicid: e.id
    });
  }
});

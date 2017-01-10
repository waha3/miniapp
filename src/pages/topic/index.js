const api = require('../../api/index.js');
const app = getApp();

Page({
  data: {
    title: 'hello world',
    id: '',
    content: {}
  },
  onLoad(e) {
    this.setData({
      id: e.id
    });

    const { id } = this.data;
    const path = `topic/${id}`;
    api.get(path).then(res => this.setData({
      content: res.data.data
    }));
  }
});

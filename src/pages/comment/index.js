const api = require('../../api/index.js');
const app = getApp();

Page({
  data: {
    title: '',
    disabled: false,
    topicid: '',
    content: '',
    accesstoken: wx.getStorageSync('accesstoken') ? wx.getStorageSync('accesstoken') : ''
  },
  bindTextAreaBlur(e) {
    this.setData({
      content: e.detail.value
    });
  },
  makecommentHandle() {
    const { topicid, content, accesstoken } = this.data;
    const path = `topic/${topicid}/replies`;
    const data = {
      accesstoken,
      content
    };
    api.post(data, path)
      .then(res => {
        if (!res.data.success) {
          wx.showToast({
            title: res.data.error_msg,
            icon: 'loading',
            duration: 1500
          });
          return false;
        } else {
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 1500
          });
        }
        this.setData({
          content: ''
        });
      })
      .catch(err => console.log(err));
  },
  onLoad(e) {
    this.setData({
      topicid: e.id
    });
  }
});

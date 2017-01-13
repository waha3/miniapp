const { post } = require('../../api/index.js');
const app = getApp();

Page({
  data: {
    plateClass: [
      {
        id: 'share',
        name: '分享'
      }, {
        id: 'ask',
        name: '问答'
      }, {
        id: 'job',
        name: '招聘'
      }
    ],
    accesstoken: '',
    title: '',
    tab: '',
    content: ''
  },
  bindDateChange(e) {
    console.log(e);
    // const { tab } = e
  },
  bindInputFocus(e) {
    const title = e.detail.value;
    this.setData({title: title});
  },
  bindTextAreaBlur(e) {
    const content = e.detail.value;
    this.setData({content: content});
  },
  makePostHandle() {}
});

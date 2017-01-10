const api = require('../../api/index.js');
console.log(api);
const WxParse = require('../../components/wxParse/wxParse.js');
const app = getApp();

Page({
  data: {
    navbar: [
      '主页', '精华', '分享'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    toView: 'red',
    scrollTop: 100,
    topics: [],
    wxParseData: []
  },

  lower(e) {
    console.log(e);
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  intervalChange(e) {
    this.setData({interval: e.detail.value});
  },
  durationChange(e) {
    this.setData({duration: e.detail.value});
  },
  onLoad() {
    api.get('topics').then(res => this.setData({
      topics: res.data.data
    }));
  }
});

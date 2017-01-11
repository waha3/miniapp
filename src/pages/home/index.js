const api = require('../../api/index.js');
const objectAssign = require('../../lib/object_assign.js');
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
    wxParseData: [],
    query: {
      page: 1,
      tab: 'all',
      mdrender: false
    }
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
  },
  lower(e) {
    let _page = this.data.query.page;

    this.setData({
      query: objectAssign(this.data.query, {
        page: ++_page
      })
    });
    console.log('xxxxx');

    const {tab, page, mdrender} = this.data.query;
    let query = `page=${page}&tab=${tab}&mdrender=${mdrender}`;
    api.get('topics', query).then(res => {
      this.setData({
        topics: [
          ...this.data.topics,
          ...res.data.data
        ]
      });
    });
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
    const {tab, page, mdrender} = this.data.query;
    let query = `page=${page}&tab=${tab}&mdrender=${mdrender}`;
    api.get('topics', query)
      .then(res => this.setData({topics: res.data.data}));
  }
});

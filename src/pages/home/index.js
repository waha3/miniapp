const api = require('../../api/index.js');
const objectAssign = require('../../lib/object_assign.js');
const app = getApp();

Page({
  data: {
    navbar: [
      '主页', '精华', '分享', '招聘'
    ],
    active: '主页',
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
    },
    loading: {
      hidden: true,
      loading_content: '正在加载...'
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
      }),
      loading: objectAssign(this.data.loading, {
        hidden: false
      })
    });

    const {tab, page, mdrender} = this.data.query;
    let query = `page=${page}&tab=${tab}&mdrender=${mdrender}`;
    api.get('topics', query).then(res => {
      this.setData({
        topics: [
          ...this.data.topics,
          ...res.data.data
        ],
        loading: objectAssign(this.data.loading, {
          hidden: true
        })
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
  navbarTabHandle(e) {
    let map = {
      '主页': 'all',
      '精华': 'good',
      '分享': 'share',
      '招聘': 'job'
    };
    let item = e.currentTarget.dataset.id;
    this.setData({
      active: item,
      query: objectAssign(this.data.query, {
        tab: map[item]
      }),
      loading: objectAssign(this.data.loading, {
        hidden: false
      })
    });

    const {tab, page, mdrender} = this.data.query;
    let query = `page=${page}&tab=${tab}&mdrender=${mdrender}`;
    api.get('topics', query)
      .then(res => this.setData({
        topics: res.data.data,
        loading: objectAssign(this.data.loading, {
          hidden: true
        })
      }));
  },
  onLoad() {
    const {tab, page, mdrender} = this.data.query;
    let query = `page=${page}&tab=${tab}&mdrender=${mdrender}`;
    api.get('topics', query)
      .then(res => this.setData({topics: res.data.data}));
  }
});

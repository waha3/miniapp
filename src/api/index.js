var Promise = require('../lib/es6-promise.min.js');
const base = 'https://cnodejs.org/api/v1/';

module.exports = {
  get(path, query) {
    let url;
    if (query) {
      url = `${base}${path}?${query}`;
    } else {
      url = `${base}${path}`;
    }

    return new Promise((resovle, reject) => {
      wx.request({
        url: url,
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          resovle(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  },

  post(data, path, query) {
    let url;
    if (query) {
      url = `${base}${path}?${query}`;
    } else {
      url = `${base}${path}`;
    }

    return new Promise((resovle, reject) => {
      wx.request({
        url: url,
        data: data,
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          resovle(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }
};

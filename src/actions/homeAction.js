// const Types = require('../constants/ActionTypes.js');
// const get = require('../api/index.js');
//
// // import * as Types from '../constants/ActionTypes.js';
// exports const requestList => {
//   return {
//     type: Types.LIST_REQUEST;
//   }
// }
//
// exports const responseList => (data, page) {
//   return {
//     type: Types.LIST_RESPONSE,
//     data,
//     page
//   }
// }
//
// exports const fecthList = (dispatch) => {
//   dispatch(requestList, () => {
//     get('topics')
//       .then(data => data.json())
//       .then(data => responseList())
//       .catch(err => window.console.error(err));
//   });
// }

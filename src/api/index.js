const base = 'https://cnodejs.org/api/v1/';

const get = (path, query) => {
  let url;
  if (query) {
    url = `${base}${path}?${query}`;
  } else {
    url = `${base}${path}`;
  }

  return fetch(url)
    .then(res => res.json())
    .catch(err => window.console.error(err));
};

const post = (data, path, query) => {
  let url;
  if (query) {
    url = `${base}${path}?${query}`;
  } else {
    url = `${base}${path}`;
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(_data => _data)
    .catch(err => window.console.error(err));
};

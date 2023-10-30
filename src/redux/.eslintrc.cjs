module.exports = {
  root: false,
  rules: {
    'perfectionist/sort-interfaces': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        'always-on-top': ['name', 'id', 'initialState', 'reducers'],
        order: 'asc',
        'partition-by-comment': 'Part:**',
        type: 'natural',
      },
    ],
  },
};

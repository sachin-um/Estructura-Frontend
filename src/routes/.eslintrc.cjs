module.exports = {
  root: false,
  rules: {
    'perfectionist/sort-objects': [
      'error',
      {
        'always-on-top': ['path', 'element'],
        order: 'asc',
        'partition-by-comment': 'Part:**',
        type: 'natural',
      },
    ],
  },
};

const { defaults } = require("jest-config");

module.exports = {
  resetMocks: false,
  setupFiles: ["jest-localstorage-mock"],
};

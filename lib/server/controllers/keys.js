'use strict';

module.exports = function *keys(next) {
  const body = this.request.body;
  const value = body.value;
  this.state.value = yield this.device.setValue(null, value);
  yield next;
};

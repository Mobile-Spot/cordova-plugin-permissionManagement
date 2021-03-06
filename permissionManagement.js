"use strict";

var _exec = require("cordova/exec");

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.requestCapturePermission = function(config, success, error) {
  (0, _exec2.default)(
    success,
    error,
    "PermissionManagement",
    "requestCapturePermission",
    [config]
  );
};

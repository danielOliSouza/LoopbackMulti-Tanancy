var app = require("../server.js");
var LoopBackContext = require('loopback-context');

module.exports = function(options) {
  return function storeCurrentUser(req, res, next) {
    if (!req.accessToken) {
      return next();
    }
    var loopbackContext = LoopBackContext.getCurrentContext();
    loopbackContext.set('AccessToken.userId', req.accessToken.userId);
    
    next();
  };
};

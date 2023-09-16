var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const sess = req.session;
    if (sess.username && sess.password) {
      if (sess.username) {
        res.status(200).json({
          success: true,
          message: "logged in"
        })
      }
    } else {
      res.send("Not logged in")
    }
});

module.exports = router;

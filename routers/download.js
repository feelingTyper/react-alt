var express = require('express');
var router = express.Router();
var list = require('./util');


/**
 *  @method [POST]
 *  return services that the website supports.
 */
router.post('/download', function(req, res, next) {
    var q = req.body;
    var index = q.id;
    var name = list[index];
    if (!name) next();

    res.download('store/download/' + name, function(err) {
        if (err) {
            next()
        } else {
            console.log('download success');
        }
    });

});

module.exports = router;
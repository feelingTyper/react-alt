var express = require('express');
var Service = require('../models/service');
var router = express.Router();


router.use(function timeLog(res, req, next) {
    console.log('Time: ', Date.now());
    next()
})

/**
 *  @method [GET]
 *  return services that the website supports.
 */
router.get('/services', function(req, res, next) {
    Service.find(function(err, services) {
        if (err) return next(err);
        res.status(200).send(services);
    });
});
/**
 * set services 
 * @param  {[type]}  req   [description]
 * @param  {[type]}  res   [description]
 * @param  {Service} next) {               var service [description]
 * @return {[type]}        [description]
 */
router.get('/setService', function(req, res, next) {
    var service = new Service({
        title: 'WEB',
        content: 'abcd'
    });

    service.save(function(err, result) {
        if (err) next(err);
        res.status(200).send(result);
    });
});

module.exports = router;
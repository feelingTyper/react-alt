var express = require('express');
var Service = require('../models/service');

var router = express.Router();
router.get('/services', function(req, res, next) {
    Service.find(function(err, services) {
        if (err) return next(err);
        // services = services.map(function(item) {
        //     return JSON.parse(item);
        // });
        res.status(200).send(services);
    });
});

router.get('/etService', function(req, res, next) {
    var service = new Service({
        title: 'WEB',
        content: 'abcd'
    });

    service.save(function(err, result) {
        if (err) next(err);
        res.status(200).send(result);
    });
});

router.get('/services', function(req, res, next) {

});
module.exports = router;
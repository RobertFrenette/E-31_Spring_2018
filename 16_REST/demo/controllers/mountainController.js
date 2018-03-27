var mongoose = require('mongoose');
var log      = require('log-util');
var Mountain = require('../models/Mountain');
 
var mountainController = {};
 
mountainController.list = (req, res) => {
    log.info('Listing Mountains...');
    Mountain.find({})
    .then((mountains) => {
        res.render('index.hbs', {pageTitle: 'Mountains', mountains: mountains});
    })
    .catch((err) => {
        log.error(`Listing Mountainserror: ${err}`);
        res.end('Listing Mountains error.');
    });
};

mountainController.create = (req, res) => {
    log.info('Creating Mountain...');
    var mountain = new Mountain({
        name: req.body.name,
        elev: req.body.elev,
        desc: req.body.desc
    });

    mountain.save()
    .then((m) => {
        res.redirect('/mountains');
    })
    .catch((err) => {
        log.error(`Creating Mountain error: ${err}`);
        res.end('Creating Mountain error.');
    });
};

mountainController.read = (req, res) => {
    log.info('Reading Mountain...');
    Mountain.findOne({_id: req.params.mountain_id})
    .then((mountain) => {
        res.render('edit.hbs', {pageTitle: 'Mountains', mountain: mountain});
    })
    .catch((err) => {
        log.error(`Reading Mountain error: ${err}`);
        res.end('Reading Mountain error.');
    });
};

mountainController.update = (req, res) => {
    log.info('Updating Mountain...');
    Mountain.findByIdAndUpdate(
        req.params.mountain_id,
        {
            $set: {
                name: req.body.name,
                elev: req.body.elev,
                desc: req.body.desc
            }
        }
    )
    .then((mountain) => {
        res.redirect('/mountains');
    })
    .catch((err) => {
        log.error(`Updating Mountain error: ${err}`);
        res.end('Updating Mountain error.');
    });
};

mountainController.delete = (req, res) => {
    log.info('Deleting Mountain...');
    Mountain.findByIdAndRemove(req.params.mountain_id)
    .then((mountain) => {
        res.redirect('/mountains');
    })
    .catch((err) => {
        log.error(`Deleting Mountain error: ${err}`);
        res.end('Deleting Mountain error.');
    });
};
 
module.exports = mountainController;

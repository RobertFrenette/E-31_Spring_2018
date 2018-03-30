var log             = require('log-util');
var mountainService = require('../services/mountainService');
 
var MountainController = {};
 
MountainController.list = (req, res) => {
    mountainService.list({})
    .then((mountains) => {
        res.render('index.hbs', {pageTitle: 'Mountains', mountains: mountains});
    })
    .catch((err) => {
        log.error(`Listing Mountainserror: ${err}`);
        res.end('Listing Mountains error.');
    });
};

MountainController.create = (req, res) => {
    mountainService.create({
        name: req.body.name,
        elev: req.body.elev,
        desc: req.body.desc
    })
    .then((m) => {
        res.redirect('/mountains');
    })
    .catch((err) => {
        log.error(`Creating Mountain error: ${err}`);
        res.end('Creating Mountain error.');
    });
};

MountainController.read = (req, res) => {
    mountainService.read({_id: req.params.mountain_id})
    .then((mountain) => {
        res.render('edit.hbs', {pageTitle: 'Mountains', mountain: mountain});
    })
    .catch((err) => {
        log.error(`Reading Mountain error: ${err}`);
        res.end('Reading Mountain error.');
    });
};

MountainController.update = (req, res) => {
    mountainService.update(
        req.params.mountain_id,
        {
            name: req.body.name,
            elev: req.body.elev,
            desc: req.body.desc
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

MountainController.delete = (req, res) => {
    mountainService.delete(req.params.mountain_id)
    .then((mountain) => {
        res.redirect('/mountains');
    })
    .catch((err) => {
        log.error(`Deleting Mountain error: ${err}`);
        res.end('Deleting Mountain error.');
    });
};
 
module.exports = MountainController;

var log             = require('log-util');
var mountainService = require('../services/mountainService');
 
var ApiController = {};

ApiController.list = (req, res) => {
    mountainService.list({})
    .then((mountains) => {
        if (mountains) {
            res.json(mountains);
        } else {
            res.end('No Mountains found.');
        }
    })
    .catch((err) => {
        log.error(`Listing Mountainserror: ${err}`);
        res.end('Listing Mountains error.');
    });
};

ApiController.create = (req, res) => {
    mountainService.create({
        name: req.body.name,
        elev: req.body.elev,
        desc: req.body.desc
    })
    .then((m) => {
        res.json(m);
    })
    .catch((err) => {
        log.error(`Creating Mountain error: ${err}`);
        res.end('Creating Mountain error.');
    });
};

ApiController.read = (req, res) => {
    mountainService.read({_id: req.params.mountain_id})
    .then((mountain) => {
        res.json(mountain);
    })
    .catch((err) => {
        log.error(`Reading Mountain error: ${err}`);
        res.end('Reading Mountain error.');
    });
};

ApiController.update = (req, res) => {
    mountainService.update(
        req.params.mountain_id,
        {
            name: req.body.name,
            elev: req.body.elev,
            desc: req.body.desc
        },
        {new: true}
    )
    .then((mountain) => {
        res.json(mountain);
    })
    .catch((err) => {
        log.error(`Updating Mountain error: ${err}`);
        res.end('Updating Mountain error.');
    });
};

ApiController.delete = (req, res) => {
    mountainService.delete(req.params.mountain_id)
    .then((mountain) => {
        res.json(mountain);
    })
    .catch((err) => {
        log.error(`Deleting Mountain error: ${err}`);
        res.end('Deleting Mountain error.');
    });
};

module.exports = ApiController;
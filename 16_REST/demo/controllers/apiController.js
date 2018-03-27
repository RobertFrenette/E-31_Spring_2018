var mongoose = require('mongoose');
var log      = require('log-util');
var Mountain = require('../models/Mountain');
 
var apiController = {};

apiController.list = (req, res) => {
  log.info('API: Listing Mountains...');
  Mountain.find({})
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

apiController.create = (req, res) => {
  log.info('API: Creating Mountain...');
  var mountain = new Mountain({
      name: req.body.name,
      elev: req.body.elev,
      desc: req.body.desc
  });

  mountain.save()
  .then((m) => {
      res.json(m);
  })
  .catch((err) => {
      log.error(`Creating Mountain error: ${err}`);
      res.end('Creating Mountain error.');
  });
};

apiController.read = (req, res) => {
  log.info('API: Reading Mountain...');
  Mountain.findOne({_id: req.params.mountain_id})
  .then((mountain) => {
      res.json(mountain);
  })
  .catch((err) => {
      log.error(`Reading Mountain error: ${err}`);
      res.end('Reading Mountain error.');
  });
};

apiController.update = (req, res) => {
  log.info('API: Updating Mountain...');
  Mountain.findByIdAndUpdate(
      req.params.mountain_id,
      {
          $set: {
              name: req.body.name,
              elev: req.body.elev,
              desc: req.body.desc
          }
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

apiController.delete = (req, res) => {
  log.info('API: Deleting Mountain...');
  Mountain.findByIdAndRemove(req.params.mountain_id)
  .then((mountain) => {
      res.json(mountain);
  })
  .catch((err) => {
      log.error(`Deleting Mountain error: ${err}`);
      res.end('Deleting Mountain error.');
  });
};

module.exports = apiController;
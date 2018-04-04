var log      = require('log-util');
var Mountain = require('../models/Mountain');

var MountainService = {};

MountainService.list = (searchParams) => {
    log.info('Listing Mountains...');
    return Mountain.find(searchParams)
        .then((mountains) => {
            return mountains;
        })
        .catch((err) => {
            throw err;
        });
};

MountainService.create = (mountainObj) => {
    log.info('Creating Mountain...');
    var mountain = new Mountain(mountainObj);

    return mountain.save()
        .then((m) => {
            return m;
        })
        .catch((err) => {
            throw err;
        });
};

MountainService.read = (mountainId) => {
    log.info('Reading Mountain...');
    return Mountain.findOne({_id: mountainId})
        .then((mountain) => {
            return mountain;
        })
        .catch((err) => {
            throw err;
        });
};

MountainService.update = (mountainId, mountainObj) => {
    log.info('Updating Mountain...');
    return Mountain.findByIdAndUpdate(
            mountainId,
            {
                $set: mountainObj
            },
            {
                new: true
            }
        )
        .then((mountain) => {
            return mountain;
        })
        .catch((err) => {
            throw err;
        });
};

MountainService.delete = (mountainId) => {
    log.info('Deleting Mountain...');
    return Mountain.findByIdAndRemove(mountainId)
    .then((mountain) => {
        return mountain;
    })
    .catch((err) => {
        throw err;
    });
};

module.exports = MountainService;
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
            throw errr;
        });
};

MountainService.create = (mountainObj) => {
    log.info('Creating Mountain...');
    console.log(mountainObj);
    var mountain = new Mountain(mountainObj);
    console.log(mountain);

    return mountain.save()
        .then((m) => {
            return m;
        })
        .catch((err) => {
            throw errr;
        });
};

MountainService.read = (mountainId) => {
    log.info('Reading Mountain...');
    return Mountain.findOne({_id: mountainId})
        .then((mountain) => {
            return mountain;
        })
        .catch((err) => {
            throw errr;
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
            throw errr;
        });
};

MountainService.delete = (mountainId) => {
    log.info('Deleting Mountain...');
    return Mountain.findByIdAndRemove(mountainId)
    .then((mountain) => {
        return mountain;
    })
    .catch((err) => {
        throw errr;
    });
};

module.exports = MountainService;
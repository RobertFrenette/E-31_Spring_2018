var Mountain = require('../models/Mountain');

var MountainService = {};

MountainService.list = (searchParams) => {
    return Mountain.find(searchParams)
        .then((mountains) => {
            return mountains;
        })
        .catch((err) => {
            throw err;
        });
};

MountainService.create = (mountainObj) => {
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
    return Mountain.findOne({_id: mountainId})
        .then((mountain) => {
            return mountain;
        })
        .catch((err) => {
            throw err;
        });
};

MountainService.update = (mountainId, mountainObj) => {
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
    return Mountain.findByIdAndRemove(mountainId)
    .then((mountain) => {
        return mountain;
    })
    .catch((err) => {
        throw err;
    });
};

module.exports = MountainService;
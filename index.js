module.exports = function (degrees) {
    "use strict";

    if (typeof degrees !== 'number') {
        throw new TypeError('Degrees should be a number');
    }

    return degrees * (Math.PI / 180);
};

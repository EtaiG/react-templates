define([
    'react/addons',
    'lodash',
    'another/dependency'
], function (React, _, dependency) {
    'use strict';
    return function () {
        return React.createElement('div', dependency({}));
    };
});
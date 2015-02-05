define([
    'react/addons',
    'lodash',
    'test/plugins/rootPropsPlugin'
], function (React, _, rootPropsPlugin) {
    'use strict';
    return function () {
        return React.createElement('div', rootPropsPlugin({}));
    };
});
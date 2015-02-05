define([
    'react/addons',
    'lodash',
    'test/plugins/mockRootPropsPlugin'
], function (React, _, rootPropsPlugin) {
    'use strict';
    return function () {
        return React.createElement('div', rootPropsPlugin.call(this, {}));
    };
});
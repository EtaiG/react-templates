define([
    'react/addons',
    'lodash',
    'test/plugins/rootPropsPlugin'
], function (React, _, rootPropsPlugin) {
    'use strict';
    return function () {
        return React.createElement('div', rootPropsPlugin.call(this, {
            'id': 'outer',
            'style': {
                backgroundColor: 'blue',
                width: '400px',
                height: '400px'
            }
        }), React.createElement('div', {
            'id': 'inner',
            'style': {
                backgroundColor: 'red',
                width: '200px',
                height: '200px'
            }
        }));
    };
});
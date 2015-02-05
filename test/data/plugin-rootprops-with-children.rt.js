define([
    'react/addons',
    'lodash',
    'another/dependency'
], function (React, _, dependency) {
    'use strict';
    return function () {
        return React.createElement('div', dependency({
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
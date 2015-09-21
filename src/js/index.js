/**
 * Created by Oleksandr Tserkovnyi on 17.08.2015.
 * kemperomg@gmail.com
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import main from './main/main.module.js';

angular.module('app', [
    uirouter,
    main
])
    .config(routing)
    .directive('testTest', function () {
        return {
            template: '<div>Hello!</div>',
            replace: true
        };
    });

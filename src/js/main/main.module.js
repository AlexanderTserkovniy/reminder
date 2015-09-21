/**
 * Created by Oleksandr Tserkovnyi on 21.09.2015.
 * kemperomg@gmail.com
 */

import angular from 'angular';

import routing from './main.routing.js';
import mainController from './main.controller.js';

export default angular.module('app.main', [])
    .config(routing)
    .controller('Main', mainController)
    .name;

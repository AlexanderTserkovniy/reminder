/**
 * Created by Oleksandr Tserkovnyi on 17.08.2015.
 * kemperomg@gmail.com
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

console.log(typeof abc);

angular.module('app', [uirouter])
  .config(routing)
  .directive('testTest', function () {
    return {
      template: '<div>Hello!</div>',
      replace: true
    }
  });
/**
 * Created by Oleksandr Tserkovnyi on 17.08.2015.
 * kemperomg@gmail.com
 */

let abc = 25;

function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  console.log(`I am ${abc}`); // 'I am ' + abc
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default routing
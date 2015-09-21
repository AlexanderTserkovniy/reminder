/**
 * Created by Oleksandr Tserkovnyi on 17.08.2015.
 * kemperomg@gmail.com
 */

function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default routing

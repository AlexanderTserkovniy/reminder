/**
 * Created by Oleksandr Tserkovnyi on 21.09.2015.
 * kemperomg@gmail.com
 */

function routing($stateProvider) {
  $stateProvider.state('main', {
      url: '/',
      template: require('./main.html'),
      controller: 'Main as main'
  });
}

routing.$inject = ['$stateProvider'];

export default routing

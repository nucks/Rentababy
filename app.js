angular.module( 'rentababy', [ 'ui.router' ] )
.config( function( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise('/');
  $stateProvider.state( 'home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  } )
  .state( 'shop', {
    url: '/shop',
    templateUrl: './views/shop.html'
  } )
  .state( 'baby', {
    url: '/baby/:baby', 
    templateUrl: './views/baby.html',
    controller: 'homeCtrl'
  } )
  .state( 'about', {
    url: '/about',
    templateUrl: './views/about.html',
    controller: 'homeCtrl'
  } )
  .state( 'services', {
    url: '/services',
    templateUrl: './views/services.html',
    controller: 'homeCtrl'
  } )
  .state( 'contact', {
    url: '/contact',
    templateUrl: './views/contact.html',
    controller: 'homeCtrl'
  } )
} );
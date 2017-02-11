angular.module( 'rentababy' )
.directive( 'customNavbar', function() {
    return {
      restrict: 'EA',
      templateUrl: '../views/navbar.html'
    }
} );
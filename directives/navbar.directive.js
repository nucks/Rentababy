angular.module( 'rentababy' )
.directive( 'customNavbar', function() {
    return {
      restrict: 'EA',
      templateUrl: '../rentababy/views/navbar.html'
    }
} );
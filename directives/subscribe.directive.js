angular.module( 'rentababy' )
.directive( 'subscribe', function() {
    return {
      restrict: 'EA',
      templateUrl: '../rentababy/views/subscribe.html'
    }
} );
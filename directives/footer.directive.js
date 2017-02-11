angular.module( 'rentababy' )
.directive( 'customFooter', function() {
    return {
      restrict: 'EA',
      templateUrl: '../views/footer.html'
    }
} );
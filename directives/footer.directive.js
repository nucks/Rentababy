angular.module( 'rentababy' )
.directive( 'customFooter', function() {
    return {
      restrict: 'EA',
      templateUrl: '../rentababy/views/footer.html'
    }
} );
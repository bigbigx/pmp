angular.module('app.frame.home')
    .controller('HomeController', function($scope, $ionicBackdrop) {
        $scope.homePopoverHide = function() {
            //angular.element('home-title-popover').hide();
            return $scope.homePopover = !$scope.homePopover;
        };
        //$scope.action = function() {
        //  $ionicBackdrop.retain();
        //};
    })

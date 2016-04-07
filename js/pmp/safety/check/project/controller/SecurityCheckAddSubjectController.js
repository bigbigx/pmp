angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckAddSubjectController', function($scope,$ionicPopup,$state, SafetyContentsService, $stateParams, SafetyContentService){


      $scope.checkContent = SafetyContentService.data();
      $scope.safetyContent = SafetyContentsService.get($scope.checkContent.checkContentId);
      console.log(SafetyContentsService.get( $scope.checkContent));
      $scope.checkItems = [];

      $scope.update = function() {

        $scope.safetyContent = SafetyContentsService.get($scope.checkContent.checkContentId);
        $scope.checkItems = SafetyContentService.data().checkItems;
      }

      $scope.$on('$stateChangeSuccess', $scope.update);

      $scope.addIssues = function(index) {

        $state.go('security-check-add-issue', { idx: index });
      };

      $scope.segureToSubjectDetail = function(index) {

        $state.go('security-check-add-subject-detail', { idx: index });
      };

      // A confirm dialog
      $scope.showConfirm = function (index) {

        var confirmPopup = $ionicPopup.confirm({
          title: '提示',
          template: '<p class="center">确认删除？</p>',
          cancelText:'取消',
          okText:'确定'
        });
        confirmPopup.then(function (res) {
          if (res) {
            $scope.checkItems.splice(index, 1);
          } else {

          }
        });
      };

    })
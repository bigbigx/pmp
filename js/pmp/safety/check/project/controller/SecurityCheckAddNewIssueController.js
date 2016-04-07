angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckAddNewIssueController', function($scope, $state, $stateParams) {
      $scope.customerPro = { text: "" };
      $scope.checkText = function() {

        if ($scope.customerPro.text.length > 20) {
          $scope.customerPro.text = $scope.customerPro.text.substr(0, 20);
        }
      };

      $scope.segureToIssure = function() {

        $state.go('security-check-add-issue', { customerPro: $scope.customerPro.text, idx: $stateParams.idx });
      }


    })
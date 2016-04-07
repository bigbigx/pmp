angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckLocationController',function($scope, $ionicPopup) {
        $scope.showPrompt = function() {
            $ionicPopup.prompt({
                title: '新增位置',
                cancelText: '取消',
                okText: '确定'
            }).then(function(res) {
                //console.log('add the new location is', res);
            });
        };
    })

angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckController', function ($scope, $ionicActionSheet, $ionicModal) {

        //控制删选弹框显示或隐藏
        $scope.filterType = false;
        $scope.filterDetail = false;

        $scope.showFilter = function(obj){
            if(obj == 'filterType') {
                $scope.filterType = !$scope.filterType;
                $scope.filterDetail = false;
            }  else if(obj == 'filterDetail'){
                $scope.filterType = false;
                $scope.filterDetail = !$scope.filterDetail;
            }
            //console.log($scope.obj);
            //$scope.filterType = true;
        };
        $scope.hideFilter = function(){
            $scope.filterType = false;
            $scope.filterDetail = false;

        }

        $scope.filter1PopoverHide = function () {
            //angular.element('home-title-popover').hide();

            return $scope.securityCheckPopover1 = !$scope.securityCheckPopover1;
        };
        $scope.filter2PopoverHide = function () {
            //angular.element('home-title-popover').hide();

            return $scope.securityCheckPopover2 = !$scope.securityCheckPopover2;

        };
        $scope.showCheckTypeSheet = function () {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {text: '全部'},
                    {text: '日常检查'},
                    {text: '专项检查'}
                ],
                cancelText: '取消',
                buttonClicked: function (index) {
                    //return true;
                }
            });
        };
        $scope.showCheckIsTroubleSheet = function () {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {text: '全部'},
                    {text: '未发现问题'},
                    {text: '存在问题'}
                ],
                cancelText: '取消',
                buttonClicked: function (index) {
                    return true;
                }
            });
        };

        $ionicModal.fromTemplateUrl('start-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal1Time = modal;
        });

        $ionicModal.fromTemplateUrl('end-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal2Time = modal;
        });

        var currentDate = new Date();
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        $scope.date = date;
        $scope.startTime = {
            date: date,
            mondayFirst: false,
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            daysOfTheWeek: ["日", "一", "二", "三", "四", "五", "六"],
            startDate: new Date(1989, 1, 26),
            endDate: new Date(2024, 1, 26),
            disablePastDays: false,
            disableSwipe: false,
            disableWeekend: false,
            disableDates: '',
            showDatepicker: false,
            showTodayButton: false,
            calendarMode: false,
            hideCancelButton: true,
            hideSetButton: true,
            callback: function () {
                $scope.modal1Time.hide();
            }
        };
        $scope.endTime = {
            date: date,
            mondayFirst: false,
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            daysOfTheWeek: ["日", "一", "二", "三", "四", "五", "六"],
            startDate: new Date(1989, 1, 26),
            endDate: new Date(2024, 1, 26),
            disablePastDays: false,
            disableSwipe: false,
            disableWeekend: false,
            disableDates: '',
            showDatepicker: false,
            showTodayButton: false,
            calendarMode: false,
            hideCancelButton: true,
            hideSetButton: true,
            callback: function () {
                $scope.modal2Time.hide();
            }
        };

        $scope.showStartTime = function () {
            $scope.modal1Time.show();
            if ($scope.startTime.showDatepicker == true) {
                $scope.startTime.showDatepicker = false;
            }
            else if ($scope.startTime.showDatepicker == false) {
                $scope.startTime.showDatepicker = true;
            }
        };
        $scope.showEndTime = function () {
            $scope.modal2Time.show();
            if ($scope.endTime.showDatepicker == true) {
                $scope.endTime.showDatepicker = false;
            }
            else if ($scope.endTime.showDatepicker == false) {
                $scope.endTime.showDatepicker = true;
            }
        };
    })
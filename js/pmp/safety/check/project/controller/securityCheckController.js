angular.module('app.pmp.safety.check.project')
    .controller('SecurityCheckController', function ($scope, $ionicActionSheet, $ionicModal,queryCheckInfoService) {
        var pageIndex = 0,
            rowCount = 10;
        $scope.queryCheckList = [];
        $scope.loadCompleted = true;

        //根据数据模型里检查问题的状态码返回相应的状态名称
        $scope.checkStateName = function(state){
            if(state == 2){
                return '待复查'
            } else if(state == 3){
                return '未通过'
            } else if(state == 4){
                return '待处理'
            }
        }

        //分页加载列表数据
        $scope.loadListData = function(){
            queryCheckInfoService.loadListData(pageIndex,rowCount).success(function (data) {
                loadListDataCallback(data);
                $scope.$broadcast("scroll.refreshComplete");
            });
        };

        //下拉刷新加载数据
        $scope.refreshListData = function(){
            pageIndex = 0;
            $scope.loadCompleted = false;
            queryCheckInfoService.loadListData(pageIndex,rowCount).success( function (data) {
                loadListDataCallback(data);
                $scope.$broadcast("scroll.refreshComplete");
            });
        };

        //异步加载数据回调函数
        function loadListDataCallback(data) {
            var pageInfo = data.items.rows; //根据json数据对象的层级，调用json数据
            for(var i = 0; i < pageInfo.length;i++) {
                //获取json 深层数据，只需记住json数据里，有数组，有对象
                $scope.queryCheckList.push(pageInfo[i]);
            }
            if ((pageIndex + 1 ) >= pageInfo.pageCount) {
                $scope.loadCompleted = true;
            } else {
                $scope.loadCompleted = false;
            }
            pageIndex++;
        }


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
        };
        $scope.hideFilter = function(){
            $scope.filterType = false;
            $scope.filterDetail = false;

        }

        //显示 检查类型 操作表 弹框
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

        //显示 是否存在问题 操作表 弹框
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

        //控制 开始时间弹框 显示或隐藏
        var currentDate = new Date();
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        $scope.date = date;

        $ionicModal.fromTemplateUrl('start-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal1Time = modal;
        });
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
        $scope.showStartTime = function () {
            $scope.modal1Time.show();
            if ($scope.startTime.showDatepicker == true) {
                $scope.startTime.showDatepicker = false;
            }
            else if ($scope.startTime.showDatepicker == false) {
                $scope.startTime.showDatepicker = true;
            }
        };

        //控制 结束时间弹框 显示或隐藏
        $ionicModal.fromTemplateUrl('end-time.html', {
            scope: $scope,
            //animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal2Time = modal;
        });
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
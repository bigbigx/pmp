angular.module('app.pmp.safety.check.project')
    .factory("queryCheckInfoService",['ApiPmpSafetyCheckProject','$http',function(api,$http){
        return{
            condition:{}, //condition 是什么意思？

            //定义服务里的函数，便于controller对数据的获取等操作，此处函数是获取数据
            loadListData: function (pageIndex,rowCount) {
                var condition = {pageIndex:pageIndex,rowCount:rowCount};
                //var searchFilter = this.getSearchFilter();
                //if(searchFilter){
                //    angular.extend(condition,searchFilter);
                //}
                return $http.post(api.queryCheckInfo,condition);
            },
            resetCondition: function () {
                this.condition.type = 0;
                this.condition.typeName = "不限";
                this.condition.title = "";
                return this.condition;
            }
            //创建好服务，里面写操作数据模型用到的方法
        }
    }]);

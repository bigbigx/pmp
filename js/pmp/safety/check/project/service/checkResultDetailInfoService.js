angular.module('app.pmp.safety.check.project')
    .factory("checkResultDetailInfoService",['ApiPmpSafetyCheckProject','$http',function(api,$http){
        return{
            condition:{}, //condition是什么意思？
            //创建好服务，里面写操作数据模型用到的方法
        }
    }]);

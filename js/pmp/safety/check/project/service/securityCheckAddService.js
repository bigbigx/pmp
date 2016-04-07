angular.module('app.pmp.safety.check.project')

    .factory('SafetyContentsService', function() {
      var safetyContents = [{
        checkContentId: '01',
        checkContentName: '安全管理检查',
        checkItems: [{
          checkItemId: '0101',
          checkItemName: '安全生产责任制',
          checkProblems: [{
            checkProblemId: '010101',
            checkProblemName: '未建立安全生产责任制'
          }, {
            checkProblemId: '010102',
            checkProblemName: '安全生产责任制未经责任人签字确认'
          }, {
            checkProblemId: '010103',
            checkProblemName: '未制定各工种安全技术操作规程'
          }]
        }, {
          checkItemId: '0102',
          checkItemName: '施工组织设计',
          checkProblems: [{
            checkProblemId: '010212',
            checkProblemName: '施工组织设计中未制定安全措施'
          }, {
            checkProblemId: '010213',
            checkProblemName: '危险性较大的分部分项工程未编制安全专项施工方案，'
          }, {
            checkProblemId: '010214',
            checkProblemName: '未按规定对专项方案进行专家论证'
          }]
        },{
          checkItemId: '0103',
          checkItemName: '安全技术技术交底',
          checkProblems: [{
            checkProblemId: '010318',
            checkProblemName: '未采取书面安全技术交底'
          }, {
            checkProblemId: '010319',
            checkProblemName: '交底未做到分部分项'
          }, {
            checkProblemId: '010320',
            checkProblemName: '交底内容针对性不强'
          }]
        },{
          checkItemId: '0104',
          checkItemName: '安全检查',
          checkProblems: [{
            checkProblemId: '010423',
            checkProblemName: '未建立安全检查（定期、季节性）制度'
          }, {
            checkProblemId: '010424',
            checkProblemName: '未留有定期、季节性安全检查记录'
          }, {
            checkProblemId: '010425',
            checkProblemName: '事故隐患的整改未做到定人、定时间、定措施'
          }]
        }]
      }, {
        checkContentId: '02',
        checkContentName: '文明施工检查',
        checkItems: [{
          checkItemId: '0201',
          checkItemName: '现场围挡',
          checkProblems: [{
            checkProblemId: '020101',
            checkProblemName: '在市区主要路段的工地周围未设置高于2.5m的封闭围挡'
          }, {
            checkProblemId: '020102',
            checkProblemName: '一般路段的工地周围未设置高于1.8m的封闭围挡'
          }, {
            checkProblemId: '020103',
            checkProblemName: '围挡材料不坚固、不稳定、不整洁、不美观'
          }]
        }, {
          checkItemId: '0202',
          checkItemName: '封闭管理',
          checkProblems: [{
            checkProblemId: '020205',
            checkProblemName: '施工现场出入口未设置大门'
          }, {
            checkProblemId: '020206',
            checkProblemName: '未设置门卫室'
          }, {
            checkProblemId: '020207',
            checkProblemName: '未设门卫或未建立门卫制度'
          }]
        }]
      },{
        checkContentId: '03',
        checkContentName: '扣件式钢管脚手架检查',
        checkItems: [{
          checkItemId: '0301',
          checkItemName: '施工方案',
          checkProblems: [{
            checkProblemId: '030101',
            checkProblemName: '架体搭设未编制施工方案或搭设高度超过24m未编制专项施工方案'
          }, {
            checkProblemId: '030102',
            checkProblemName: '架体搭设高度超过24m，未进行设计计算或未按规定审核、审批'
          }, {
            checkProblemId: '030103',
            checkProblemName: '架体搭设高度超过50m，专项施工方案未按规定组织专家论证或未按专家论证意见组织实施'
          }]
        }, {
          checkItemId: '0302',
          checkItemName: '立杆基础',
          checkProblems: [{
            checkProblemId: '030205',
            checkProblemName: '立杆基础不平、不实、不符合方案设计要求'
          }, {
            checkProblemId: '030206',
            checkProblemName: '立杆底部底座、垫板或垫板的规格不符合规范要求每一处'
          }, {
            checkProblemId: '030207s',
            checkProblemName: '未按规范要求设置纵、横向扫地杆'
          }]
        }]
      }];

      return {
        getAllContents: function() {
          return safetyContents;
        },
        get: function(checkContentId) {
          for (var i = 0; i < safetyContents.length; i++) {
            if (safetyContents[i].checkContentId == parseInt(checkContentId)) {
              return safetyContents[i];
            }
          }
          return null;
        },
        getCheckItem:function(safetyContent,checkItemId){
          var checkItems = safetyContent.checkItems;
          for (var i = 0; i < checkItems.length; i++) {
            if (checkItems[i].checkContentId == parseInt(checkItemId)) {
              return checkItems[i];
            }
          }
          return null;
        }
      }

    })

    .factory('SafetyContentService', function() {
      var safetyContent = {};
      safetyContent.checkContentId = "";
      safetyContent.checkContentName = "";
      safetyContent.checkItems = [];

      return {
        data: function() {
          return safetyContent;
        }
      }
    })

    .filter('ConvertToChineseService', function() {
      var N = [
        "零", "一", "二", "三", "四", "五", "六", "七", "八", "九"
      ];

      var filter = function(num) {
        var str = num.toString();
        var len = num.toString().length;
        var C_Num = [];
        for (var i = 0; i < len; i++) {
          C_Num.push(N[str.charAt(i)]);
        }
        return C_Num.join('');
      }
      return filter;
    });

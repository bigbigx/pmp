angular.module('app.pmp.safety.check.project')
  .controller('SecurityCheckAddController',function(){

});
  //   .controller('SecurityCheckAddController', function($scope,$ionicModal,$ionicActionSheet,$cordovaCamera,$cordovaImagePicker){

  //     $scope.showSheet = function(){
  //     var hideSheet = $ionicActionSheet.show({
  //       buttons:[
  //         {text:'日常检查'},
  //         {text:'专项检查'}
  //       ],
  //       cancelText:'取消',
  //       buttonClicked:function(index){
  //         return true;
  //       }
  //     });
  //   };

  //   $ionicModal.fromTemplateUrl('check-time.html', {
  //     scope: $scope,
  //     //animation: 'slide-in-up'
  //   }).then(function(modal) {
  //     $scope.modal1Time = modal;
  //   });

  //   var currentDate = new Date();
  //   var date = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());
  //   $scope.date = date;
  //   $scope.checkTime = {
  //     date: date,
  //     mondayFirst: false,
  //     months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  //     daysOfTheWeek: ["日", "一", "二", "三", "四", "五", "六"],
  //     startDate: new Date(1989, 1, 26),
  //     endDate: new Date(2024, 1, 26),
  //     disablePastDays: false,
  //     disableSwipe: false,
  //     disableWeekend: false,
  //     disableDates: '',
  //     showDatepicker: false,
  //     showTodayButton: false,
  //     calendarMode: false,
  //     hideCancelButton: true,
  //     hideSetButton: true,
  //     callback: function(){
  //       $scope.modal1Time.hide();
  //     }
  //   };
  //   $scope.showCheckTime = function(){
  //     $scope.modal1Time.show();
  //     if($scope.time.showDatepicker == true){
  //       $scope.time.showDatepicker = false;
  //     }
  //     else if($scope.time.showDatepicker == false){
  //       $scope.time.showDatepicker = true;
  //     }
  //   };

  //   $scope.image_list = [];
  //   $scope.addAttachment = function() {
  //     //nonePopover();
  //     $ionicActionSheet.show({
  //       buttons: [
  //         { text: '相机' },
  //         { text: '图库' }
  //       ],
  //       cancelText: '关闭',
  //       cancel: function() {
  //         return true;
  //       },
  //       buttonClicked: function(index) {
  //         switch (index){
  //           case 0:takePhoto();
  //             break;
  //           case 1:
  //             pickImage();
  //             // <span style="color:#ff0000;">pickImage();</span>
  //             break;
  //           default:
  //             break;
  //         }
  //         return true;
  //       }
  //     });
  //   };
  //   var pickImage = function () {
  //     var options = {
  //       maximumImagesCount: 5,
  //       width: 800,
  //       height: 800,
  //       quality: 100
  //     };
  //     $cordovaImagePicker.getPictures(options)
  //       .then(function (results) {
  //         for(var i=0;i<results.length;i++){
  //           $scope.image_list.push(results[i]);
  //         }
  //       }, function (error) {
  //         // error getting photos
  //       });
  //   };
  //   var takePhoto = function () {
  //     var options = {
  //       //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
  //       quality: 100,                                            //相片质量0-100
  //       destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
  //       sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
  //       allowEdit: false,                                        //在选择之前允许修改截图
  //       encodingType: Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
  //       targetWidth: 800,                                        //照片宽度
  //       targetHeight: 800,                                       //照片高度
  //       mediaType: 0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
  //       cameraDirection: 0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
  //       popoverOptions: CameraPopoverOptions,
  //       saveToPhotoAlbum: true , //保存进手机相册
  //       correctOrientation:true
  //     };

  //     $cordovaCamera.getPicture(options).then(function (imageData) {
  //       //CommonJs.AlertPopup(imageData);
  //       //var image = document.getElementById('myImage');
  //       //image.src = imageData;
  //       //image.src = "data:image/jpeg;base64," + imageData;
  //       $scope.image_list.push(imageData);
  //     }, function (err) {
  //       // error
  //       //CommonJs.AlertPopup(err.message);
  //     });

  //   };
  //   //alert(angular.element(document).find('#add-imgs'));

  // })
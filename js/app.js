angular.module('embedded-twitter',[])

.controller('App-Controller',function($scope,$interval){

  this.data2 = [];
  var params = {
    q: "bcbk",
    count : "50"
  };
  var appendTweet = function(img_url,fullname,username,text){
    var liData = '<li class="media" ng-repeat="data in data"><div class="media-left"><img class="media-object" src="'+img_url+'"></div><div class="media-body"><h5 class="media-heading full-name">'+fullname+'</h5><span class="id-name">@'+username+'</span><h5 class="media-heading text">'+text+'</h5></div></li>';
    $(liData).hide().prependTo('.media-list').slideDown("slow");
  };
  function updateTweet(isMain){
    // var temp = [];
    $.getJSON('http://taweesoft.io/twitter/php/tweets.txt', function(reply) {
      if(isMain){
        $scope.data = reply.statuses;
        this.data2 = $scope.data;
        $scope.$apply();
        setInterval(function () {
          updateTweet(false)
        }, 2000);
      }else{
        console.log(reply.statuses);
        var temp = reply.statuses;
        // $scope.$apply();
        // console.log("running");
        // console.log(temp[0].text);
        // console.log($scope.data[0].text);
        if(temp[0].text != $scope.data[0].text){
          console.log("updated");
          console.log(temp[0].user.name);
          for(var i =0;i<temp.length;i++){
            if(temp[i].text == $scope.data[0].text){
              if(i==0)break;
              for(var k=i-1;k>=0;k--)
                appendTweet(temp[k].user.profile_image_url,temp[k].user.name,temp[k].user.screen_name,temp[k].text);
            }
          }
        $scope.data = temp;
        }
      }
    });


    // var cb = new Codebird;
    // cb.setConsumerKey("a57yFrbUMg5GPFXlc3g0oHIiG", "GbhDee7nrjvIMYIBXckaVdldT4TdM5aQMmuMtJw0KSurDWGvaH");
    // cb.setToken("3327591936-0T499b1pdwNVO6KxAzzuKEPYSQIxTE8t9t1JdTp", "YIQE54GjLifOSDLr6CEJCAn4UB6RCSOU6FN8TCRddOKeT");
    // cb.__call(
    //   "search_tweets",
    //   params,
    //   function (reply) {
    //       // console.log(reply.statuses);
    //       // for(var i =0;i<reply.statuses.length;i++){
    //         // console.log(reply.statuses[i].text);
    //
    //       // }
    //       if(isMain){
    //         $scope.data = reply.statuses;
    //         this.data2 = $scope.data;
    //         $scope.$apply();
    //         setInterval(function () {
    //           updateTweet(false)
    //         }, 1000);
    //       }else{
    //         temp = reply.statuses;
    //         // $scope.$apply();
    //         console.log("running");
    //         console.log(temp[0].user.name);
    //         if(temp[0].text != this.data2[0].text){
    //           console.log("updated");
    //           console.log(temp[0].user.name);
    //           for(var i =0;i<temp.length;i++){
    //             if(temp[i].text != data2[0].text){
    //               appendTweet(temp[0].user.profile_image_url,temp[0].user.name,temp[0].user.screen_name,temp[0].text);
    //             }
    //           }
    //           data2 = temp;
    //           // $scope.$apply();
    //         }
    //
    //       }
    //   }
    // );
  };
  updateTweet(true);

  // appendTweet('xxx','xxx','xxx','xxx');
  // $setInterval(function () {
  //
  // }, 10);(updateTweet(false),1000);
});

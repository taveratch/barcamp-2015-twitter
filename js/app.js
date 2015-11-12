angular.module('embedded-twitter',[])

.controller('App-Controller',function($scope){
  var cb = new Codebird;
  cb.setConsumerKey("a57yFrbUMg5GPFXlc3g0oHIiG", "GbhDee7nrjvIMYIBXckaVdldT4TdM5aQMmuMtJw0KSurDWGvaH");
  cb.setToken("3327591936-0T499b1pdwNVO6KxAzzuKEPYSQIxTE8t9t1JdTp", "YIQE54GjLifOSDLr6CEJCAn4UB6RCSOU6FN8TCRddOKeT");

  var params = {
    q: "#bcbk"
  };
  cb.__call(
    "search_tweets",
    params,
    function (reply) {
        console.log(reply.statuses);
        for(var i =0;i<reply.statuses.length;i++){
          console.log(reply.statuses[i].text);

        }
        $scope.data = reply.statuses;
        $scope.$apply();
    }
  );
});

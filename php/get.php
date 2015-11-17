<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library

$hashtag = "#bcbk";
$notweets = 30;
$consumerkey = "a57yFrbUMg5GPFXlc3g0oHIiG";
$consumersecret = "GbhDee7nrjvIMYIBXckaVdldT4TdM5aQMmuMtJw0KSurDWGvaH";
$accesstoken = "3327591936-0T499b1pdwNVO6KxAzzuKEPYSQIxTE8t9t1JdTp";
$accesstokensecret = "YIQE54GjLifOSDLr6CEJCAn4UB6RCSOU6FN8TCRddOKeT";

function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}

$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

$tweets = $connection->get("https://api.twitter.com/1.1/search/tweets.json?q=".$hashtag."&count=".$notweets);

echo json_encode($tweets);
?>

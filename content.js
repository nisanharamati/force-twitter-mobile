var pattern =/^https?\:\/\/twitter/;
var replace = "twitter";
var substitution = "mobile.twitter";
var newUrl;
if (pattern.test(window.location.origin)) // if origin is https?://twitter\+
{
  newUrl = window.location.href.replace(replace, substitution);
  chrome.extension.sendRequest({redirect: newUrl}); // send message to redirect
}

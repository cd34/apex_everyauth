Twitter
=======

Go to:

http://dev.twitter.com/apps/new

Sign in.

Application Name, Description and Website are not critical, but, are required
fields. Set the Callback URL to:

http://yourdomain.com/auth/twitter/callback

After you agree to the terms, you're presented with a page that contains your
Consumer Key and Consumer Secret.

Click the button, Create my Access token

conf.js:

::

  module.exports = {
    twit: {
        consumerKey: 'consumer key',
        consumerSecret: 'consumer secret'
    }

In your app:

::

  everyauth
    .twitter
      .consumerKey(conf.twit.consumerKey)
      .consumerSecret(conf.twit.consumerSecret)
      .findOrCreateUser( function (sess, accessToken, accessSecret, twitUser) {
  // Apex
        var promise = this.Promise();
        apex_add_check_user ('twitter.com', twitUser, function(user) {
          promise.fulfill(user);
        });
        return promise;
      })
      .redirectPath('/');

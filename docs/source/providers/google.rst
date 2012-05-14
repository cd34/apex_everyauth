Google
========

Go to:

https://www.google.com/accounts/ManageDomains

Sign in.

Add a new Domain:

domain.com

Manage the domain - you'll need to handle their verification process. After you've verified the domain, you'll need to activate it. For the Target URL path prefix put:

Once you've done this, you're presented with your OAuth Consumer Key and OAuth Consumer Secret.

conf.js:

::

  module.exports = {
  , google: {
        clientId: 'xxxxxxxxxxxx.apps.googleusercontent.com'
      , clientSecret: 'xxxxxxxxxxxxxxxxxxxxxx'
    }
  ]

In your app:

::

    everyauth.google
      .appId(conf.google.clientId)
      .appSecret(conf.google.clientSecret)
      .scope('https://www.googleapis.com/auth/userinfo.profile')
      .findOrCreateUser( function (session, accessToken, extra, googleUser) {
        googleUser.refreshToken = extra.refresh_token;
        googleUser.expiresIn = extra.expires_in;
    // Apex
          var promise = this.Promise();
          apex_add_check_user (session, 'google.com', googleUser,
            function(user) {
            promise.fulfill(user);
          });
          return promise;
      })
      .redirectPath('/');

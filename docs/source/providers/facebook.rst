Facebook
========

Go to:

https://developers.facebook.com/apps/

Sign in.

Create New App (Upper Right Corner)

Put in an Application Name and agree to the terms.

Solve the Recaptcha.

Left hand side, Click Web.

For Site URL, put the URL of your site.

Site Domain should be the domain of your site, and needs to be part of the
site URL. So, if you use http://specialname.domain.com, you would need to 
put domain.com or specialname.domain.com. You cannot specify a separate domain.

conf.js:

::

  module.exports = {
    fb: {
        appId: '210641172362705',
        appSecret: '5f10b959f51913c5d549c35981dbeb63'
    }

In your app:

::

  everyauth
    .facebook
      .appId(conf.fb.appId)
      .appSecret(conf.fb.appSecret)
      .findOrCreateUser( function (session, accessToken, accessTokenExtra, fbUserMetadata) {

  // Apex
        var promise = this.Promise();
        apex_add_check_user ('facebook.com', fbUserMetadata, function(user) {
          promise.fulfill(user);
        });
        return promise;
      })
      .redirectPath('/');

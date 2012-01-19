Welcome to Apex Everyauth's documentation!
==========================================

**Quick Overview**

Apex is a framework that works on top of Pyramid_ focused on simplifying
authentication, but, also activating a number of other features. Apex
has a single user model and encourages you to use a Foreign Key relation
to any Profile information you would like to store.

With a recent project, compatibility between node.js and a Pyramid
application required similar functionality between both servers.

**What is included?**

Authentication wrappers around Everyauth

**Authentication**

  * Local authentication uses salt + BCrypt
  * http://codahale.com/how-to-safely-store-a-password/

Everyauth_ is used for OpenID/OpenAuth providers and supports:
  * Google
  * Facebook
  * Twitter
  * Yahoo
  * Microsoft Live
  * Bitbucket
  * Github
  * Identi.ca
  * Last.fm
  * LinkedIn
  * Any OpenID provider

Ability to overload the login form, extend the AuthUser class through
a Foreign Key user profile table.

Contents:

.. toctree::
   :maxdepth: 2

   INSTALL
   providers/facebook
   providers/twitter
   wishlist

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

.. _Pyramid: http://www.pylonsproject.org/
.. _Everyauth: https://github.com/bnoguchi/everyauth
.. _Bcrypt: https://github.com/ncb000gt/node.bcrypt.js

### purescript-hoodie

Hoodie Bindings for PureScript (Work in Progress)

This is a PureSccript library containing bindings for accessing the offline-first, noBackend Framework <a href="http://hood.ie/">Hoodie</a>.

Currently, these API are implemented:

*Store API*
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storeadd">add</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storefind">find</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storefindoradd">findOrAdd</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storefindall">findAll</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storeupdate">update</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storeupdateoradd">updateOrAdd</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storeupdateall">updateAll</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storeremove">remove</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storeremoveall">removeAll</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.store.html#storeon">on</a>

*Event Handling*
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.html#one">one</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.html#off">off</a>
- <a href="http://docs.hood.ie/en/techdocs/api/client/hoodie.html#trigger">trigger</a>

There's more to come. :smile:

#### Installation

```shell
bower install
npm install
```

#### Building

*Library*

```shell
gulp
```

*Demo App*

```shell
gulp make-demo [initial build only or when API implementation chages]
gulp build-demo
```

#### Running

Go to your install directory and type in the console:

```shell
npm start
```

After a few moment you'll see a message like this:

<img src="http://fs5.directupload.net/images/160306/7w49zjdd.png"/>

Hoodie will automatically open your browser and point to the demo app. This app is basically a shallow copy of the original Hoodie TestApp.
Open browser console to see a few messages from your PureScript-based app.

<img src="http://fs5.directupload.net/images/160306/lc83zeuf.png"/>

#### Running on Windows

If your CouchDB installation is not in the default path (C:\Programs ... etc) then you'll likely run into some weird errors like "no CouchDB found".

In this case you can use <a href="https://github.com/hoodiehq/node-multicouch/pull/31">my proposed fix</a>.

The solution is very simple: just copy the contents of the **multicouch-folder** to _your_ multicouch that's located under **node_modules**.

More detailed info on this error can be found <a href="https://github.com/hoodiehq/node-multicouch/issues/26">here</a>.

However, I have **to warn you** that this fix only worked *on my machine* and therefore I can't give you any guarante that'll work the same way on yours.

But if more people test the fix we can find out if it works in general. Thanks for trying it out. :thumbsup:

#### License

<a href="https://github.com/brakmic/purescript-hoodie/blob/master/LICENSE">MIT</a>



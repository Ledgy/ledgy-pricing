## Ledgy Pricing

Our `LedgyPricing` React component used in [ledgy-app] and [ledgy.com] repos.

#### Setup

```
npm install
```

#### Development

One can run webpack dev sever which will open an instance on `http://localhost:3001` with:

```
npm start
```

After making your changes, make sure there are no lint errors:

```
npm run lint
```

#### Release new version

After all changes are committed to master, remember to bump up the `package.json` version and publish it to npm.

The helper utility `npm run prepublish` will copy the transpiled code to the dist folder.

Last step is to update [ledgy-app] and [ledgy.com] to use the latest `ledgy-pricing` version.

[ledgy-app]: https://github.com/morloy/ledgy-app
[ledgy.com]: https://github.com/morloy/ledgy.com

# Website

I have yet to optimised my website.

### Installation

If you use yarn
```
$ yarn
```
If you use npm
```
$ npm
```

### Local Development

If you use yarn
```
$ yarn start
```

If you use npm
```
$ npm run start
```


This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

If you use yarn
```
$ yarn build
```

If you use npm
```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

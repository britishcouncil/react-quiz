React Quiz
==========

A React Quiz component developed by the [British Council](https://www.britishcouncil.org/).

## Usage

### To start the demo

```
npm install
npm start
open http://localhost:3000
```

### To run tests:
```
npm test -- --watch
```

### Releasing
We use [Semantic Versioning](http://semver.org/) and bump versions using the `npm version` command ([see npm docs](https://docs.npmjs.com/cli/version)). We've defined `preversion`, `version` and `postversion`
hooks in `package.json`.

Releasing is a two step process. First we create a new version. Then we publish it.

Example:
```
npm version patch -m "Bug fix..."
```

This will:

1. Transpile the source files to ES5 using babel.
2. Change to the `dist` branch (which is an orphan branch that only includes the files we want to distribute).
3. Bump the version in package.json, commit and tag the release.

Check that you're in the `dist` branch and that the commit has been made. To publish, run:
```
npm publish ./
```

## Credits

webpack setup based on [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

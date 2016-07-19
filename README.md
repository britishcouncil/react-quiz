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

## Releasing
We use [Semantic Versioning](http://semver.org/) and bump versions using the `npm version` command ([see npm docs](https://docs.npmjs.com/cli/version)). We've defined `preversion` and `postversion`
hooks in `package.json`.

### How to release a new version
1. You should only publish the master branch. Make sure to be clear on what kind of version it is (`patch`, `minor` or `major`). Create a new version:
   ```
   npm version patch
   ```
   This transpiles the source files to ES5 using babel. The version is bumped and committed to both master and in the `dist` branch (which is an orphan branch that only includes the files we want to distribute). You'll be left in the `dist` branch.

2. Ensure you are in the `dist` branch. Do a `git log` to check that the version number is correct. Test that the version works correctly. When you're confident, push to GitHub:
   ```
   git push origin && git push origin --tags
   ```

3. Again, make sure you are still in the `dist` branch. Publish to npm:

   Example:
   ```
   npm publish ./
   ```
4. Go back to master branch and push it.

## Credits

webpack setup based on [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

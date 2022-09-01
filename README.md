# Greetings

## Requirements

1. [Node~16](https://nodejs.org/en/download/)
2. [pnpm](https://pnpm.io/installation)

## Develop

```sh
pnpm i
```

For information about how handle dependencies look into [PNPM.md](./PNPM.md).

### Build for development mode

```sh
npm run start
```

This command builds the bundle with `esbuild` (hotreload + sourcemaps) and serves the bundled `./dist/index.js` and `./dist/index.css` through the `index.html` via `serve`.

This you will have to refresh the browser to see the change (after saving in the editor).

## Build for production mode

```sh
npm run build
```

This build a minified bundle without sourcemaps.

## FAQ

### Why do we use esbuild instead of webpack?

Well to use webpack we need trillions of dependencies (webpack, webpack-cli, ts-loader, ...) and esbuild is like 50 times faster. It is a project to try out esbuild and see how it actually performs.

## TODOs

-   hot reload without having to refresh the browser (like in webpack dev mode)
-   make a good production serve setup
-   current dev setup with `serve` seems hacky, probably do something else

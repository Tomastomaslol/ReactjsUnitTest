# React component template

This repository is a template for creating reusable React components installable (recursively if necessary) as NPM modules.

Notes:

- A development/test environment is boilerplated in `./dev`. This folder, in conjunction with the command `npm run dev` is used to test the component.
- The component itself and any other related JS/JSX/etc files should be kept in `./src`.
- **The component does not need to be built/compiled/etc to be usable in other projects.**
- You should probably get rid of this readme when you're done setting up.

## Setting up a new component

- Edit `package.json` to have the right name, description and repository values.
- Added your main component code into `src/component.jsx`.
- Add any non-NPM compatible components into `src/` (using whatever structure you like).
- Add any NPM-compatible components using `npm install --save [ repository URL ]`
- Add your test code to `dev/main.jsx` and modify `dev/index.html` as you see fit.
- To compile and serve the component for development and testing, run 

		npm run dev

- Test and view your component by running `npm run dev` and navigating to `0.0.0.0:8080`. This serves stuff out of `dev/`.

And lastly, delete this readme.

## How it works

### Bootstrap

The entry point of the module is `./index.js`. This allows the component to be `require()`ed by it's name defined in `package.json`. `./index.js` is a simple bootstrapper that exports `./src/component.jsx`. You can put any module (not component) related logic in here. Component logic needs to go in `./src/component.jsx`, and any supporting JSX/JS files need to go in `./src` as well.

### Development

`npm run dev` starts a [Watchify](https://github.com/substack/watchify) process that listens for changes and compiles them to `./dev/dist/`, ready to be used in `./dev/index.html`. It also starts a simple Python HTTP server at `0.0.0.0:8080`, so navigate there to see the results of your hacking.

Any dependencies your component relies on (Underscore, etc) are installed as normal with `npm install [ package ]`. Note that React is a `devDependency`, so please leave it that way.

If you need to use any other React components with NPM (just like this one), you should be able to just install them as NPM dependencies (not dev dependencies) using their Git repository URL.
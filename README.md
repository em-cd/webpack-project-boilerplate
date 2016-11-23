# Simple boilerplate for webpack setup with SASS, React, Babel, and ES2015

## Quick setup instructions

```shell
git clone https://github.com/em-cd/webpack-project-boilerplate
cd webpack-project-boilerplate
npm install
npm run dev
open http://localhost:8080
```

Edit app/index.js and app/main.scss, create components, have fun. This boilerplate is for experimenting with webpack and react, and most likely unsuitable for production usage.

### Dependencies

#### Build

- [webpack](https://github.com/webpack/webpack)
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)

#### React

- [react](https://facebook.github.io/react/)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [babel-loader](https://www.npmjs.com/package/babel-loader) (& its peer-dependency [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core))
- [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)
- [babel-preset-react](https://www.npmjs.com/package/babel-preset-react)

#### CSS/SASS

- [css-loader](https://www.npmjs.com/package/css-loader)
- [style-loader](https://www.npmjs.com/package/style-loader)
- [sass-loader](https://www.npmjs.com/package/sass-loader) (& peer-dependency [node-sass](https://www.npmjs.com/package/node-sass))
- [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)


#### Optional

- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
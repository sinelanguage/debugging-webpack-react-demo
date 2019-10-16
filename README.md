# Debugging Javascript in the browser that has been compiled with Webpack 4
## We will play around with dev, prod builds and a bit of React.

1.  `npm install`
2.  `npm run start:dev`

Make sure we prettify bundle.js in Chrome before we debug/break

**Webpack without React**
1. Show and debug development build without sourcemaps
2. Show and debug development build with sourcemaps
3. Show and debug production build without sourcemaps
4. Show and debug production build with sourcemaps

**Webpack with React**
1. Show and debug development build without sourcemaps
2. Show and debug development build with sourcemaps
3. Show and debug production build without sourcemaps
4. Show and debug production build with sourcemaps


**Presentation notes**

Talk about webpack:

Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

**Different Module Types out of the box**
1. An ES2015 import statement
2. A CommonJS require() statement
3. An AMD define and require statement
4. image URL src

**webpack only understands JavaScript and JSON files. If module type is not supported:**

We use loaders:

```
module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ]
  }
```

**Plugins:  plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.**

```
plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
```

**We are 

1. From `loblaws.ca` Show bundle.js from production:
`https://d3rzy2hoo29vi.cloudfront.net/builds/production/1.3.4/a227e8aa/loblaws-bundle.js`

2. From local show bundle.js, goto line 90.
3. Source maps to the rescue, what are source maps ?

When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack trace will simply point to bundle.js

Source maps map your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

4. Show `webpack:///./app/App.jsx?`

There are different options for sourcemaps:
https://webpack.js.org/configuration/devtool/

4. Webpack 4 in development mode applies rudimentary source maps.
5. Move to this repo `master`
6. Run local build
7. Show development bundle.js
8. Put breakpoint in sourcemapped src file
9. Show that it works
10. Prettify the bundled file
11. Show the breakpoint again.
12. Toggle to production mode
13. Repeat steps 6 to 11, show that breakpoint links to bundle file
14. Stash stuff and checkout `with-react` branch
15. Show react without JSX example
16. Start at step 4 again.

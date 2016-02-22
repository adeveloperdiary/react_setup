npm init
npm install --save react
npm install --save react-dom
npm install --save-dev webpack
npm install --save-dev babel-loader babel-core
npm install babel-preset-es2015 --save-dev
npm install babel-preset-react --save-dev

echo '{ "presets": ["react",""es2015"] }' > .babelrc
./node_modules/.bin/webpack -d --watch


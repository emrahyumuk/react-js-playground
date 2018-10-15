# The Burger Builder (Basic Version)

- ## **create react app**

```sh
npm install -g add create-react-app
```

```sh
create-react-app burger-builder-basic

cd burger-builder-basic

npm start
```

- ## **react-scripts eject**

```sh
npm run eject
```

- ## **webpack css config**

edit config/webpack.config.dev.js
add modules and localIdentName to css options part

```json
{
  ...
    test: /\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]'
        },
      },
  ...
```

- ## **prop-types**

```sh
npm install --save prop-types
```

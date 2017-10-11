# eslint-config

## Usage

```sh
$ npm i -D eslint-config-smashcast babel-eslint@^7.2.3 eslint@^4.1.1 eslint-config-airbnb@^15.0.1 eslint-plugin-import@^2.6.1 eslint-plugin-jsx-a11y@^5.0.1 eslint-plugin-react@^7.1.0

```

Then add it to your .eslintrc

```
{
  "extends": [
    "smashcast"
  ]
}
```

## Notes

Eslint config properties like `env` or `globals` are strongly
project specific so you have to set them in your own .eslintrc file.

For instance:

```
{
  "env": {
    "browser": true
  },
  "globals": {
    "React": true
  },
  "extends": [
    "smashcast"
  ]
}
```

To get an insight how it works check the [official documentation](http://eslint.org/docs/developer-guide/shareable-configs).

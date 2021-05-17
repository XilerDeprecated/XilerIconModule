# Xiler Icon module

Easily manage and distribute all Xiler icons through this package.

## Nextjs error fixing

Add `@svgr/webpack` as a dependency.
Create a `next.config.js` file and paste the following content:
```js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
```

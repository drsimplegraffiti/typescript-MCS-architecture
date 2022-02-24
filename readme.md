# Typescript Setup ---> Nodejs Typescript Express

## Start node project

> npm init -y

## Install packages

> npm i -D typescript tsc-watch eslint prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node @types/express

---

## Install Dependencies

> npm i express dotenv

## Install config files

> npx tsc --init

---

## tsconfig setup

> "baseUrl": "./src"

```
 "paths": {
      "@resources/*": ["*resources/*"],
      "@/utils/*": ["utils/*"],
      "@/middleware/*": ["middleware/*"]
```

> "outDir": "dist"

---

## Run script codes in package.json

> "start" : "node dist/index.js" ----> Production
> "dev" : "tsc-watch --onSuccess \"node ./dist/index.js\"" ----> Development
> "build": "tsc"
> "postinstall" : "npm run build"

---

## Linting ---> Create eslintrc.js and prettierrc.js

Prettier

```javascript
module.exports = {
    tabWidth: 4,
    singleQuote: false,
    semi: true,
};
```

Eslint

```javascript
module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parseOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {},
};
```

---

## Create .gitignore

```
dist
node_modules.env
```

---

## Install module alias

> npm i module-alias

In your package.json

```javascript
{
    "name": "api",
    "version": "1.0.0",
    "description": "",
    "main": "source/server.ts",
    "scripts": {
        "start": "node dist/index.js",
        "dev": "tsc-watch --onSuccess \"node ./dist/index.js\"",
        "build": "tsc",
        "postinstall": "npm run build"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "body-parser": "^1.19.0",
        "config": "^3.3.7",
        "dayjs": "^1.10.7",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "module-alias": "^2.2.2",
        "mongoose": "^6.2.2",
        "pino": "^7.8.0"
    },
    "devDependencies": {
        "@types/express": "^4.17.13",
        "@types/node": "^17.0.21",
        "@typescript-eslint/eslint-plugin": "^5.12.1",
        "@typescript-eslint/parser": "^5.12.1",
        "eslint": "^8.9.0",
        "eslint-config-prettier": "^8.4.0",
        "prettier": "^2.5.1",
        "tsc-watch": "^4.6.0",
        "typescript": "^4.5.5"
    },
    "_moduleAliases": {
        "@/resources": "dist/resources",
        "@/utils": "dist/utils",
        "@/middleware": "dist/midlleware"
    }
}

```

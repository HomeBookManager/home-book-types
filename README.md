# home-book-types

## Table of Contents

- [Installation](#Installation)
- [Build](#Build)
- [Publish](#Publish)
- [Instruction](#Instruction)
- [Related Packages](#Related-Packages)

## Installation

Recommend you to use this version latest Node.

1. Node_Modules

```
npm install or npm i
```

2. Commit lint required global for commit

```
npm install -g @commitlint/cli @commitlint/config-conventional
```

## Build

```
npm run build-library
```

## Publish

Before publish you need to bump up version in package.json.

```
npm publish
```

## Instruction

Before commit are call actions:

- branch name lint
- eslint ts
- eslint tsx
- prettier
- commit syntax

If you need skip linters, after the commit message you have to put command:

```
git commit -m "<message>" --no-verify
```

## Related Packages

1. [home-book-web-components-ui](https://github.com/HomeBookManager/home-book-components-ui)

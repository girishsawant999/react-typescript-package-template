<p align="center">
  <a href="" rel="noopener">
 <img height=200px src="./.github/readme/intro.png" alt="Project logo"></a>
</p>

<h2 align="center">React Package Template</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)](#)
[![GitHub Issues](https://img.shields.io/github/issues/girishsawant999/react-typescript-package-template.svg)](https://github.com/girishsawant999/react-typescript-package-template/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/girishsawant999/react-typescript-package-template.svg)](https://github.com/girishsawant999/react-typescript-package-template/pulls)

[![Build ](https://img.shields.io/github/workflow/status/girishsawant999/react-typescript-package-template/CI/main)](https://github.com/girishsawant999/react-typescript-package-template/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A template code repo for creating typescript based react component or typescript based modules to publish over <a href="https://www.npmjs.com" rel="noopener">npm</a>. Just follow few steps and you can start publishing your code on npm.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Publish](#publish)
- [Built Using](#built_using)
- [Contributing](./.github/CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

A template code for creating typescript based react component or modules. Bundled with configuration for jest, eslint, prettier, and husky pre-commit hook.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [publish](#deployment) notes on how to publish the package on npm.

### Prerequisites

As you already know about JS, you better know the prerequisites, Node JS and NPM.

### Cloning & Setup

A step by step series of examples that tell you how to get a clone and complete setup.

<a href="https://github.com/girishsawant999/react-typescript-package-template/generate">Click here</a> to use this template to create a new repo for package.

Then once repo is created clone it. Now run following commands in project directory.

```
npm run setup
```

thats all you are ready to create new react component package or js module. Just update the src/index.jsx and run command

```
npm run build
```

now your production build is ready.

### Testing component package

You can test this build. Update demo/index.jsx import your component or module from dist directory and run following command in **demo** directory

```
npm run start
```

browser window will open with your component or module rendered. you can test it now.

## 🔧 Running the tests <a name = "tests"></a>

Following step are used to run test cases created for component or module.

Write test cases in src/\_\_tests\_\_ directory and run following command

```
npm run test
```

## 🚀 Publish to npm<a name = "publish"></a>

You have tested your package now you can publish it to npm using following steps.

Login to npm.

```
npm login
```

Update the version and specific props as per your package in package.json. Now run command

```
npm publish
```

you will get message your package has been succesfully deployed to npm.

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org)
- [Parcel](https://parceljs.org)
- [Typescript](https://www.typescriptlang.org)
- [Javascript](https://developer.mozilla.org/en-US/)
- [Jest](https://jestjs.io)

## ✍️ Authors <a name = "authors"></a>

- [@girishsawant999](https://github.com/girishsawant999) - Idea & Initial work

See also the list of [contributors](https://github.com/girishsawant999/react-typescript-package-template/contributors) who participated in this project.

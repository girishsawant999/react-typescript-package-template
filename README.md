<p align="center">
  <a href="#" rel="noopener">
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

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [publish](#publish) notes on how to publish the package on npm.

### Prerequisites

As you already know about JS, you better know the prerequisites, Node JS and NPM.

### Setup & Installation

Let's start with the following steps.

- Now <a href="https://github.com/girishsawant999/react-typescript-package-template/generate">click here</a> to use this template to create a new repo for package.

- Once repo is created clone it into your local machine.

- Now run the following code in project directory to install dependencies.

  ```
    npm run setup
  ```

- Thats all you are ready to create new typescript based react component package or TS module. Just update the **_*src/index.tsx*_**.

### Build Package

Follow to step to create a build.

- Once you updated the **_src/index.tsx_** and created react component or typescript module.

- Then the following command in projet directory.

  ```
    npm run build
  ```

- Once the command output is completed you will get a **_dist_** folder with index.js and index.d.ts files.

- Thats all you are ready to publish your package on npm.

### Testing

can test your package in the following way.

- You can import your component from dist folder in your **_*demo/index.tsx*_** file.

- Then in **_*demo/index.tsx*_** you can pass specific props for the component. Now run following command in **_demo_** directory

  ```
    npm run start
  ```

## 🔧 Running the tests <a name = "tests"></a>

Following step are used to run test cases created for component or module.

- As Jest framework is installed in your package.json. So add test files in **\_\_\_test\_\_\_** folder.

- Then run command to execute test cases.
  ```
    npm run test
  ```

## 🚀 Publish to npm<a name = "publish"></a>

You have tested your package and ready to publish to NPM. Follow the steps.

- Once the build is created successfully & tested.

- Update package.json file with your package name and version and other details.

- Now run the following command in project directory to login with your npm account.
  ```
    npm run login
  ```
- Now run the following command to publish your package on npm.

  ```
    npm run publish
  ```

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org)
- [Parcel](https://parceljs.org)
- [Typescript](https://www.typescriptlang.org)
- [Javascript](https://developer.mozilla.org/en-US/)
- [Jest](https://jestjs.io)

## ✍️ Authors <a name = "authors"></a>

- [@girishsawant999](https://girishsawant999.github.io) - Idea & Initial work

See also the list of [contributors](https://github.com/girishsawant999/react-typescript-package-template/contributors) who participated in this project.

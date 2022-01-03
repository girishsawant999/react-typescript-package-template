import React from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import Title from 'dist';
import './style.scss';

const App = (): JSX.Element => {
  return (
    <div className="main-container">
      <div className="title">
        <Title name="React Typescript Package Template" />
        <p>A template code for creating typescript based react component or typescript module.</p>
      </div>
      <div className="content">
        <fieldset>
          <legend>
            <h2>Setup & Installation</h2>
          </legend>
          <div>
            Let&apos;s start with the following steps.
            <ul>
              <li>
                Now&nbsp;
                <a href="https://github.com/girishsawant999/react-typescript-package-template/generate">
                  click here
                </a>
                &nbsp;to use this template to create a new repo for package.
              </li>
              <li>Once repo is created clone it into your local machine.</li>
              <li>
                Now run the following code in project directory to install dependencies.
                <code>npm run setup</code>
              </li>
              <li>
                Thats all you are ready to create new typescript based react component package or TS
                module. Just update the src/index.tsx.
              </li>
            </ul>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Build Package</h2>
          </legend>
          <div>
            Follow to step to create a build.
            <ul>
              <li>
                Once you updated the src/index.tsx and created react component or typescript module.
              </li>
              <li>
                Then the following command in projet directory
                <code>npm run build</code>
              </li>
              <li>
                Once the command output is completed you will get a dist folder with index.js and
                index.d.ts files.
              </li>
              <li>Thats all your npm package is ready to publish.</li>
            </ul>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Testing</h2>
          </legend>
          <div>
            You can test your package in the following way.
            <ul>
              <li>You can import your component from dist folder in your demo/index.tsx file.</li>
              <li>
                Then in demo/index.tsx you can pass specific props for the component. Now run
                following command in demo directory
                <code>npm run start</code>
              </li>
              <li>
                Also Jest framework is installed in your package.json. So add test files in __test__
                folder.
              </li>
              <li>
                Then run command to execute test cases.
                <code>npm run test</code>
              </li>
            </ul>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Publish to NPM</h2>
          </legend>
          <div>
            You have tested your package and ready to publish to NPM. Follow the steps.
            <ul>
              <li>Once the build is created successfully & tested.</li>
              <li>
                Update package.json file with your package name and version and other details.
              </li>
              <li>
                Now run the following command in project directory to login with your npm account.
                <code>npm login</code>
              </li>
              <li>
                Now run the following command to publish your package to NPM.
                <code>npm publish</code>
              </li>
            </ul>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

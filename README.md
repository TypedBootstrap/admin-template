# Getting Started with Admin Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can see a demo of this template in action [right here](https://admin-template.typedbootstrap.com/)! Simply authenticate with the credentials `admin@typedbootstrap.com` and `password`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn format`

Formats the code, according to predefined rules in the `package.json`, using the code formatter tool Prettier to you ensure that your code follows a consistent style throughout your project - making it easier to read and maintain.

See the official [Prettier](https://prettier.io) website for more information and docs.

## Dockerizing

### `docker build -t admin-template-app .`

Creates a Docker image.

Make sure to include the period at the end of the command to specify the build context. This command should be run from the root directory, where the Dockerfile is located.

### `docker run --name admin-template-app -p 8080:80 -d admin-template-app`

Runs the container in detached mode and map port 8080 on your host machine to port 80 inside the container.

Open [http://localhost:8080](http://localhost:8080), or the appropriate host and port you specified, to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Finally, to learn more about the [styles](https://github.com/TypedBootstrap/admin-styles) and [components](https://github.com/TypedBootstrap/admin-components) used in this template checkout their respective documentation.

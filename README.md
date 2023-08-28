# FirebaseAngularApp

This demo project is to show how to use Firebase to host Angular app.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
This project was generated with [Firebase CLI]( https://firebase.google.com/docs/cli) version 9.23.0.

## Firebase CLI backlog

Create firebase project at: [Firebase Console](https://console.firebase.google.com/)

Run `npm install firebase` to install the latest SDK

Run `npm install -g firebase-tools` for host your site with Firebase Hosting, you need the Firebase CLI (a command line tool), install it with npm (the Node.js package manager). now.. using the Firebase CLI, you can deploy your site with the following command from your project's root directory:

Run `firebase login` to log in via the browser and authenticate the firebase tool.

Run `firebase init` to initialize your project. The Firebase CLI will prompt you to select options about how to set up your project. Accept the defaults by pressing Enter for each prompt.

Run `ng build` to build dist, then copy to public

Run `xcopy .\dist\firebase-angular-app\*.*  .\public` to copy from dist to public,

Run `firebase deploy` to deply

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

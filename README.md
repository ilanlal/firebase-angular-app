# FirebaseAngularApp

This demo project is to show how to use Firebase to host Angular app.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
This project was generated with [Firebase CLI]( https://firebase.google.com/docs/cli) version 9.23.0.

## Firebase CLI backlog

Create firebase project at: [Firebase Console](https://console.firebase.google.com/)

Run `npm install firebase` to install the latest SDK

## Set up Firebase Hosting

### Install the Firebase CLI

To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run `npm install -g firebase-tools` command to install the CLI or update to the latest CLI version.

### Initialise your project

Open a terminal window and navigate to or create a root directory for your web app

#### Sign in to Google

Run `firebase login` to log in via the browser and authenticate the firebase tool.

#### Initiate your project

Run this command from your app's root directory:

Run `firebase init` to initialize your project. The Firebase CLI will prompt you to select options about how to set up your project. Accept the defaults by pressing Enter for each prompt.

### Deploy to Firebase Hosting

Run `ng build` to build dist, then copy to public

Run `xcopy .\dist\firebase-angular-app\*.*  .\public` to copy from dist to public,

When you're ready, deploy your web app
Put your static files (e.g. HTML, CSS, JS) in your app's deploy directory (the default is 'public'). Then, run this command from your app's root directory:

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

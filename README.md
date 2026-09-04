# SfcWebpage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Prerequisites

Node.js 22+ requires the OpenSSL legacy provider for the webpack 3 build chain used by this project. All npm scripts already include this flag, but if you run Angular CLI commands directly, you must set:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app uses hash-based routing, so URLs will contain `/#/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use `npm run build:prod` for a production build (includes server-side rendering bundle).

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm run start`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

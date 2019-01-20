# MovieScout
- This is a Angular 6 project/web-app, which displays a dashboard having movie details on UI.

# Features / User interaction :
- The functionalities provided to the user are filtering, sorting and pagination on the table/grid.
- Filtering requires the user to select a particular filter type from the provided dropdown and then starting typing the keywords/terms for filtering/searching in the input box provided.
- The filter results are immediate based on user input and thus reflects simultaneously in the table/grid as the user types.
- User can sort the details based on ascending or descending.
- If a sorting is applied and then user tries to filter then the applied sorting is removed from all columns, once the user starts typing the filter terms. This is to avoid ambiguity in table/grid data.
- The information displayed on UI is paginated by default, which species 10 rows as page size. User can then navigate back and forth as required.

# Steps to setup and run project :
- run 'npm install' in the project directory after checkout
- Once all dependencies are installed run 'ng serve' and navigate to http://localhost:4200 to access the  web-app

#Demo :
- Navigate to https://abhilashkkale-angular-6-poc-movie-scout.stackblitz.io/#/dashboard 
- At present the project is hosted via stackblitz, which has issues to load fontawesome icons. Here the icons won't be visible beside column enable to sort.
- Fixing this issue is in-progress.

#Project code playground/stackblitz :
- Navigate to https://stackblitz.com/edit/abhilashkkale-angular-6-poc-movie-scout for checking the project code with live load.




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

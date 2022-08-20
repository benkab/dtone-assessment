# dtone

[![codecov](https://codecov.io/gh/benkab/dtone-assessment/branch/main/graph/badge.svg?token=ACB4970FXW)](https://codecov.io/gh/benkab/dtone-assessment)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### How to run the app locally
Note: The application is built with vue 2,
      Make sure you have Vue Cli installed

1. Clone the project
2. Create `.env.local` file and add Environment Variables
   ```
   VUE_APP_AUTH_TOKEN={value}
   VUE_APP_API_URL={value}
   ```
3. Run `yarn` to install the dependencies
3. Run the application with `yarn serve`

### Considerations for production deployment
Note: Considering Vercel as the hosting provider

1. Stabilizing the application and make it bugs free
2. Optimizing the application by improving the performance
3. Ensure that the application is capable of scaling
4. Analytics should be configured
5. SEO optimizing
6. error logging
7. Service monitoring (e.g. Grafana)

### Technologies and Skills
1. Vue 2
2. Vuex for store management and API requests
3. Jest for tests
4. Codecov for tests coverage reporting
5. CI integration for eslint and tests checks
6. ATOMIC pattern design for project structuring
7. Sass as css processor
8. Typescript
9. Custom styling, No external libraries (bootstrap, or material ui)

### Improvements
1. Learn Docker and Dockerize the application
2. Implement filtering by product_type
3. Add dark and light mode support
4. Add end to end testing with Cypress
5. And more

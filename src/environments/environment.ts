// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCAPFezesU6R9GZwmzCe2zTVQudGXpXCoI',
    authDomain: 'getogether-3f261.firebaseapp.com',
    databaseURL: 'https://getogether-3f261.firebaseio.com',
    projectId: 'getogether-3f261',
    storageBucket: 'getogether-3f261.appspot.com',
    messagingSenderId: '451338627783'
  },
  cloud_functions: {
    host_name: 'https://XXXXX.cloudfunctions.net',
  },
  line: {
    login: {
      channel_id: 'XXXXXXXXXX',
    },
  },
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyDhQqqcGicakHO5-moqW4XPjwZZOp7sLHA",
  authDomain: "myproject-da0e2.firebaseapp.com",
  projectId: "myproject-da0e2",
  storageBucket: "myproject-da0e2.appspot.com",
  messagingSenderId: "1083228491598",
  appId: "1:1083228491598:web:51fb7d1228a72119c9d81f"
};

export const environment = {
  production: false,
  firebaseConfig: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

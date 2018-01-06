// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBqejSnXNMLO77eyK74Z4HPU15A6AaH_h4",
    authDomain: "defectbase.firebaseapp.com",
    databaseURL: "https://defectbase.firebaseio.com",
    projectId: "defectbase",
    storageBucket: "defectbase.appspot.com",
    messagingSenderId: "791357441488"

  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  logoPath: 'assets/images/logo.png',
  bottomImagePath: 'assets/images/loginbottomimage.png',
  labelButton: 'Conecteaza-te cu Google',
  bigLogoPath: 'assets/images/abacLogoBig.png',
  roundBtnPath: 'assets/images/rd.png',
  pic1: 'assets/images/pic-one.png',
  pic2: 'assets/images/pic-two.png',
  pic3: 'assets/images/pic-three.png',
  buttonGoToForm: ' + ',
  buttonGoToProfile: 'PB',
  loginIcon : 'perm_identity',
  googleClientId : '625236655303-kpf4ghtnb7epvvkocjmgkqpudsf413rt.apps.googleusercontent.com',
  googleScope: 'profile email',
  googleCookiepolicy: 'single_host_origin',
  javaScriptSrc : 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded',
  defaultItemsPerPage: 10
};

export const urls = {
  loginUrl :  'https://easy-review-api.tech-challenge.abac.software/api/login',
  reviewTemplateUrl : 'https://easy-review-api.tech-challenge.abac.software/api/reviews',
  technologyListUrl : 'https://easy-review-api.tech-challenge.abac.software/api/technologies',
  saveReviewUrlPart1: 'https://easy-review-api.tech-challenge.abac.software/api/reviews',
  saveReviewurlPart2: 'categories',
  typeListUrl : 'https://easy-review-api.tech-challenge.abac.software/api/types',
  experienceListUrl : 'https://easy-review-api.tech-challenge.abac.software/api/experiences',
  finishReviewUrl : 'https://easy-review-api.tech-challenge.abac.software/api/reviews',
  getAllReviewsUrl : 'https://easy-review-api.tech-challenge.abac.software/api/reviews',
  getOneReviewUrl : 'https://easy-review-api.tech-challenge.abac.software/api/reviews/continueReview',
  getReviewsPaged: 'https://easy-review-api.tech-challenge.abac.software/api/reviews/paged'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

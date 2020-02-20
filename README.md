# TKM Page

This readme consist of:

1. Environment Configuration
2. Controlling File Sizes
3. Learn more

## Environment Configuration

On development environment:

```
touch .env.development.local
```

On production environment:

```
touch .env.production.local
```

Or simply use this, only for production purposes:

```
touch .env
```

then fill this:

```
VUE_APP_GOOGLE_CLIENT_ID=[YOUR GOOGLE CLIENT ID]

# POST
VUE_APP_LOGIN_API=https://api.tkm.riliv.co.id/api/v0/tkm/auth/login
VUE_APP_CHECK_TOKEN_API=https://api.tkm.riliv.co.id/api/v0/tkm/auth/checkToken
VUE_APP_SUBMIT_ANSWER_API=https://api.tkm.riliv.co.id/api/v0/tkm/answers
VUE_APP_REGISTRATION_API=https://api.tkm.riliv.co.id/api/v0/tkm/user/register

# GET
VUE_APP_CHECK_USER_API=https://api.tkm.riliv.co.id/api/v0/tkm/user/register/check/
VUE_APP_GET_RESULT_API=https://api.tkm.riliv.co.id/api/v0/tkm/result/
```

> Get your Google client ID from your developer console, and remember to change the API Endpoint to `http://` if your development environment using an `http`

## Environment Configuration

Using the default configuration, this CSS comes in at 78.0kb this happened because we're using a utility-classes framework. The best way to shrink this CSS is using PostCSS plugin

Read more here: https://tailwindcss.com/docs/controlling-file-size#removing-unused-css

## Learn more

1. [Vue.js Documentation](https://vuejs.org/v2/guide/)
2. [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)
3. [TailwindCSS Form Plugin](https://github.com/tailwindcss/custom-forms)
4. [Axios Cheat Sheet](https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index)
5. [Vue.Js Form Wizard](https://github.com/BinarCode/vue-form-wizard)
6. [Using native vue-devtools](https://github.com/vuejs/vue-devtools)
7. [Rajaapi Dokumentasi Wilayah Indonesia](https://docs.rajaapi.com/dokumentasi/wilayahs)

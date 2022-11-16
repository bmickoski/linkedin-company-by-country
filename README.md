# Expo Template Realm TypeScript

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

Simple Expo template to quickly get started with Realm.

## 🚀 How to use

If you haven't already, install the `expo-cli`:

```
npm install --global expo-cli
```

```
yarn global add expo-cli
```

Then use the following command to generate your template:

```
expo init MyAwesomeRealmApp --template @realm/expo-template-ts
```

## 🏃 How to build and run locally

- [Setup development Environment](https://reactnative.dev/docs/environment-setup)
- Build/Run on iOS 🍎

```
yarn ios
```

```
npm run ios
```

- Build/Run on Android 🤖

```
yarn android
```

```
npm run android
```

## 💻 Start the Dev Client

```
expo start --dev-client
```

```
yarn start
```

```
npm run start
```

## 🔀 Setting up sync

See https://github.com/realm/realm-js/blob/master/templates/docs/sync-setup.md for instructions.

## ☁️ Build in the cloud

- [Building with EAS](https://docs.expo.dev/eas/)

## 📝 Notes

- [React Native docs](https://reactnative.dev/docs/getting-started)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Setting Up Realm Sync](https://docs.mongodb.com/realm/sdk/react-native/quick-start/)
- [Realm JS Documentation](https://docs.mongodb.com/realm/sdk/react-native/)
- [@realm/react Readme](https://github.com/realm/realm-js/tree/master/packages/realm-react#readme)

**_NOTE_**

In this project I am using LinkedIn Company Search Scraper from https://console.apify.com/actors/UhgxM3xZ8HL7l1nK7#/console. In http.ts file there is **BACKEND_COMPANY_URL** and **APIFY_KEY** that points to this LinkedIn Company Search. **APIFY_KEY** is key generated with test account and we have trial time that last only 3 days. After this days we must upgrade to PRO which is paid. So if this app is tested after this trial period user who is using this app will need to next:

1. Create account on https://console.apify.com/sign-in
2. Get API_KEY from https://console.apify.com/account?tab=integrations in Personal API TOKENS section
3. This Scraper also requires LinkedIn authentication Token. Set to the value of the li_at cookie from a Web browser after a successful authentication on linkedin.com. The token expires after 1 year or after a logout from LinkedIn. (We have one valid in http.ts file already that we are using)
4. Go to https://console.apify.com/actors/UhgxM3xZ8HL7l1nK7#/console, populate Authentication Token and click on Start Trial Button
5. After this you can use this api with this auth key in this app (just don't forget to update in http.ts)


***NOTE***

Also in android folder there is local.properties file. Please change this path to your own sdk path!! 
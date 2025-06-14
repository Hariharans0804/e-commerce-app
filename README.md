This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


<!-- ======================================================= -->

npx react-native doctor

npx react-native run-android

npx react-native start


<!-- node modules delete Windows command -->
rmdir /s /q node_modules     

<!-- ================================================================== -->
cd > android                                 step - 1

<!-- APK gradlew clean -->
android > gradlew clean                      step - 2

<!-- After this command, this command -->

<!-- APK gradlew assembleRelease -->
android > gradlew assembleRelease            step - 3

<!-- ======================================================= -->


<!-- ============================================================================== -->
<!-- Asset Fonts linking command -->

Create react-native.config.js in the root of your project (where package.json is).

react-native.config.js =>> file name
module.exports={
    project:{
        ios:{},
        android:{},
    },
    assets:['./src/assets/fonts'],
};

<!-- After this command, this command -->

<!-- new version command -->

npx react-native-asset     <== command

<!-- old version command -->

npx react-native link      <== command

<!-- ============================================================================== -->

🔁 Analogy
Package = A wrapped gift box you receive (install)

Library = The item inside the box that you actually use (code, features)


npm i react-native-vector-icons

npm install @react-navigation/native

npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

npm install @react-navigation/bottom-tabs

npm install @react-navigation/drawer

npm install react-native-gesture-handler react-native-reanimated

npm i react-navigation-header-buttons

npm install @reduxjs/toolkit

npm install react-redux

npm i axios

npm i @stripe/stripe-react-native

<!-- This library not using this project -->

npm i react-native-full-responsive

npm i react-native-app-auth
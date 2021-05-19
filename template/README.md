# ReactNativeTemplate

iOS and Android apps for ReactNativeTemplate

## Local setup

Follow the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) for the relevant environment up to (but not including) "Creating a new application".

### Bundler

Install JavaScript Dependencies and start the bundler

```sh
yarn
yarn start
```

### iOS

```sh
npx pod-install
yarn ios
```

You can also run the app directly from XCode by opening the workspace in XCode and clicking on the play icon.

### Android

```sh
yarn android
```

Note if this if your first time running an Android project, you'll need to register an emulator in Android Studio first. This can be done by opening Android studio, and on the launch page choose Configure -> AVD.

You can also run the app directly from Android Studio by opening the project in Android Studio and clicking on the play icon.

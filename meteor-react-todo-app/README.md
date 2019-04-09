# Todo App with React

```sh
meteor create simple-todos

cd simple-todos
meteor

meteor npm install --save react react-dom

meteor remove blaze-html-templates

meteor add static-html

meteor add react-meteor-data

meteor add accounts-ui accounts-password

meteor remove insecure

meteor remove autopublish

meteor npm install --save classnames
```

---

## Test

```sh
meteor add meteortesting:mocha
meteor npm install --save-dev chai

meteor test --driver-package meteortesting:mocha
```

---

## Android

[https://guide.meteor.com/mobile.html#installing-prerequisites](https://guide.meteor.com/mobile.html#installing-prerequisites)

```sh
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

$ANDROID_HOME/tools/bin/sdkmanager "build-tools;27.0.3"

$ANDROID_HOME/emulator/emulator -avd <Android_Emulator_Name>

meteor add-platform android

meteor run android
```

---

[https://www.meteor.com/tutorials/react/creating-an-app](https://www.meteor.com/tutorials/react/creating-an-app)

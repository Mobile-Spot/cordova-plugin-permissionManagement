# cordova-plugin-permissionManagement

## Installation

```
cordova plugin add https://github.com/Mobile-Spot/cordova-plugin-permissionManagement.git --save
```

The iOS part is written in Swift and the [Swift support plugin](https://github.com/akofman/cordova-plugin-add-swift-support) is configured as a dependency.

## Supported Platforms

- iOS
- Android

## Methods

## `PermissionManagement.requestPermission(key, config, success, error)`

Request permissions
key: "CAPTURE" | "LOCATION"

available config properties

```
goSettingModalTitle
goSettingModalMessage
goSettingModalOk
goSettingModalCancel
```

## Example

```
PermissionManagement.requestPermission(
  "CAPTURE",
  {
    goSettingModalTitle:"Capture permession denied",
    goSettingModalMessage:"Go to App settings ?",
    goSettingModalOk:"Settings",
    goSettingModalCancel:"Cancel",
  },
  success,
  error
)
```

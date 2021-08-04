# 📚 Window Parameters

Table of contents:
  - [Table](#table)
  - [Raw data](#raw-data)

A `Window` object can have many kinds of parameters. This small guide will help you to understand those parameters in case you want to create a window.

> **Note**: the example values are taken from Test App 1 which is a default included app for testing purposes.<br>
> In the rest of this document we'll be referring to it as *`ta1`* due to it's app ID.<br>
> Some of the parameters below are not needed and shown as (unset).

## Table

| Parameter              | Default | Type     | Example value (from ta1)    | Explanation                                                                                                                                 |
| ---------------------- | ------- | -------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| id                     | `null`  | `string` | ta1                         | The App ID. Used for HTML elements (the window itself, header, content etc.) and other things.                                              |
| name                   | `null`  | `string` | Test App 1                  | The App's name. Used for taskbar hover and window title. Custom title can be specified with `title` if needed.                              |
| title                  | `null`  | `string` | (unset)                     | The App's Window title. If unset, `name` is used.                                                                                           |
| icon                   | `null`  | `string` | `/images/appicons/ta1.png`  | The App's icon. Needs to be an image file and shows in the window titlebar, taskbar and some other places.                                  |
| isUserPinned           | `false` | `bool`   | `false`                     | Is this app pinned by the user? If this is set to true on startup, it will be automatically pinned and not needed to be pinned by the user. |
| isSystemPinned         | `false` | `bool`   | (unset)                     | App is automatically pinned to the taskbar and can be unpinned only if `isUnpinnable` is set.                                               |
| isUnpinnable           | `true`  | `bool`   | (unset)                     | Allow the app to be unpinned in the taskbar? Only allowed if `isUserPinned` or `isSystemPinned` is set.                                     |
| opensWindow            | `true`  | `bool`   | (unset)                     | Does this app open a window? If `true`, then a window opens when the app is launched.                                                       |
| app                    | `null`  | `string` | `C:/Programs/TestApp1"`     | The app file to open. Takes path from local storage. Can be set to a URL if `openInNewTab` is set to true.                                  |
| openInNewTab           | `false` | `bool`   | (unset)                     | Opens the `app` parameter in a new tab. Only works if `app` is a URL.                                                                       |
| style                  | `null`  | `string` | `width:800px;height:600px;` | The window's inline CSS style. Applied to the element with the app's ID.                                                                    |
| canHaveMultipleWindows | `false` | `bool`   | `false`                     | Specifies if the app can have multiple windows. (A limit can be set using `windowLimit`, default is 25)                                     |
| windowLimit            | 25      | `number` | (unset)                     | The app's window limit. Only takes effect when `canHaveMultipleWindows` is set to `true`.                                                   |

## Raw data

Raw data (taken from ta1's app object directly):

```json
{
    id: "ta1",
    name: "Test App 1",
    icon: "/images/appicons/ta1.png",
    isUserPinned: true,
    app: "C:/Programs/TestApp1",
    style: "width:800px;height:600px;",
    canHaveMultipleWindows: false,
}
```
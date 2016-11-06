# win32.showlockscreen
(Node.js) lock the computer  and show login screen. This module for Node.js is  inspired by the feedback from my friend <a href="https://github.com/serioushare">Ernst</a>. 

This function will lock the computer and show the login screen. (Windows7 and higher only) You  can find it on NPM: <a href="https://www.npmjs.com/package/win32.showlockscreen">https://www.npmjs.com/package/win32.showlockscreen</a>

<img src="https://65.media.tumblr.com/5f96ce56018bcdedea352ecd82ae62d0/tumblr_og73iwoHP41ru9jhqo1_1280.jpg" />

## Install 

```bash
npm install win32.showlockscreen
```

## Use

```js
var showLockScreen = require('win32.showlockscreen')
showLockScreen()
```

## How does it work?
This module will use rundll32.exe to call method ShowLockScreen() inside user32.dll

Until next time.

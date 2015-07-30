'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('ready', function () {
  var atomScreen = require('screen');
  var size = atomScreen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: 300,
    height: 400,
    x: size.width - 300,
    y: 0,
    resizable: false,
    transparent: false,
    frame: false
  });

  mainWindow.setAlwaysOnTop(true);
  mainWindow.setSkipTaskbar(true);
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

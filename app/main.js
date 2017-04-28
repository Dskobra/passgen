/*
Copyright 2017 Jordan Bottoms

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* main process
 *
 * creates main window then calls it*/
const {app, BrowserWindow} = require('electron');
const {Menu} = require('electron')

const template = [
  {
    label: 'Edit',
    submenu: [
      {role: 'cut'},
      {role: 'copy'}
    ]
  },
	{
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'}
    ]
  }]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

var mainWindow = null;

app.on('ready', () =>
{
	mainWindow = new BrowserWindow({ width: 500, height: 300, resizable: true})
	mainWindow.loadURL('file://' + __dirname + '/index.html');
})

app.on('window-all-closed', () =>
{
  app.quit()
})

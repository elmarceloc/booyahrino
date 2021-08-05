// Modules to control application life and create native browser window
const { app, BrowserWindow, protocol, session, Menu,ipcMain, shell} = require("electron");

const path = require("path");

// hot reload for debugging purposes

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})

const PROTOCOL_PREFIX = "booyahrino";

app.setAsDefaultProtocolClient(PROTOCOL_PREFIX);

var mainWindow;

// Deep linked url
var deeplinkingUrl;

// Force Single Instance Application
app.requestSingleInstanceLock()
app.on('second-instance', (event, argv, cwd) => {
    // Someone tried to run a second instance, we should focus our window.

    // Protocol handler for win32
    // argv: An array of the second instance’s (command line / deep linked) arguments
    if (process.platform == "win32") {
        // Keep only command line / deep linked arguments
        deeplinkingUrl = argv.slice(1);
    }
    sendChannelData("app.makeSingleInstance# " + deeplinkingUrl);

    if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
    }
});

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 380,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            nativeWindowOpen: true,
            enableRemoteModule: true,
            sandbox: false,
            nodeIntegrationInSubFrames: true, //for subContent nodeIntegration Enable
            webviewTag: true, //for webView
            nodeIntegrationInWorker: true,
        },
        icon: __dirname + "/icon.ico",
    });
    
    const menu = [
        {
            label: 'Canal',
            submenu: [
              {
                label: 'Abrir en el navegador',
                click() { mainWindow.webContents.send('openInBrowser')},
              },
              
            ]
          },
      {
        label: 'Mostrar',
        submenu: [
          {
            label: 'Normal',
            click() { mainWindow.setAlwaysOnTop(false) },
          },
          {
            label: 'Always on top',
            click() { mainWindow.setAlwaysOnTop(true, 'floating') },
        },
        ]
      }
    ];
    

   mainWindow.setMenu(Menu.buildFromTemplate(menu))

    

    // Protocol handler for win32
    if (process.platform == "win32") {
        // Keep only command line / deep linked arguments
        deeplinkingUrl = process.argv.slice(1);
    }
    //sendChannelData("createWindow# " + deeplinkingUrl);

    //mainWindow.setMenu(null)

    // and load the index.html of the app.
    mainWindow.loadFile("index.html");

    // Open the DevTools.
  //  mainWindow.webContents.openDevTools();
}

// Handle custom uri requests against the running app on Mac OS
app.on("open-url", (event, url) => {
    event.preventDefault();
    // handle the data
    deeplinkingUrl = url
    sendChannelData("open-url# " + deeplinkingUrl)

});

app.whenReady().then(() => {
    createWindow();

    app.on("activate", function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function() {
    if (process.platform !== "darwin") app.quit();
});

// Log both at dev console and at running node console instance
function sendChannelData(url) {
  /*  var [channelID, channelName] = [...url.split(',')]

    if (mainWindow && mainWindow.webContents) {
        url.split('/')
        mainWindow.webContents.executeJavaScript(`addChannel("${channelID}","${channelName}",true)`)
    }*/
}

ipcMain.on('openInBrowser', (event, url) => {
    console.log('opening',url)
    shell.openExternal(url)

})
const { app, BrowserWindow, protocol, session, Menu, ipcMain, shell, webFrame } = require("electron");
var locateChrome = require('locate-chrome');

const path = require("path");

const windowStateKeeper = require('electron-window-state');

const { autoUpdater } = require("electron-updater");

const settings = require("electron-settings");

const isDev = require("electron-is-dev");

var chatWindow;

const extensionPath = __dirname.split("app.asar")[0] + "Booyah";
const localPath = "D:/proyectos/booyahrino/Booyah"

console.log('extension path',extensionPath)

async function createWindow() {
  // loads booyah tv
  let appData = require('app-data-folder');

  console.log(path.join(__dirname, 'Booyahtv'))

  session.defaultSession.loadExtension(isDev ? localPath : extensionPath)

  // Load the previous state with fallback to defaults
  let chatWindowState = windowStateKeeper({
    defaultWidth: 380,
    defaultHeight: 720
  });


  // Create the browser window.
  chatWindow = new BrowserWindow({
    x: chatWindowState.x,
    y: chatWindowState.y,
    width: chatWindowState.width,
    height: chatWindowState.height,
    webPreferences: {
      nodeIntegration: false,
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
  
  chatWindowState.manage(chatWindow);

  chatWindow.setAlwaysOnTop(true, 'floating')


  chatWindow.once("ready-to-show", () => {
    console.log("checking updates...");
    autoUpdater.checkForUpdatesAndNotify();
  });

  // TODO: open links in browser
  

  chatWindow.webContents.setWindowOpenHandler(({ url }) => {
    //shell.openExternal(url);

    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        frame: true,
        fullscreenable: false,
        webPreferences: {
          preload: path.join(__dirname, 'Booyah.tv/custom/jquery.js'),
          nodeIntegration:false,

        }
      }
    }


    // return { action: 'deny' };
  });

  const menu = [
    {
      label: 'Canales',
      submenu: [
        {
          label: 'Dylantero',
          click() {
            chatWindow.loadURL("https://booyah.live/channels/79330097?chat=true") 
          },
        },
        {
          label: 'Cristianghost',
          click() {
            chatWindow.loadURL("https://booyah.live/channels/79895327?chat=true") 
          },
        },
        {
          label: 'MoaiGR',
          click() {
            chatWindow.loadURL("https://booyah.live/channels/63681555?chat=true") 
          },
        },
        {
          label: 'Suwie',
          click() {
            chatWindow.loadURL("https://booyah.live/channels/71614581?chat=true") 
          },
        },
        {
          label: 'Jaidefinichon',
          click() {
            chatWindow.loadURL("https://booyah.live/channels/84242197?chat=true") 
          },
        },
        {
          label: 'Cry',
          click() {
            chatWindow.loadURL("https://booyah.live/xcry?chat=true") 
          },
        },
        {
          label: 'Latesitoo',
          click() {
            chatWindow.loadURL("https://booyah.live/channels/79458266?chat=true") 
          },
        },
        {
          label: 'MAAU',
          click() {
            chatWindow.loadURL("https://booyah.live/78330214?chat=true") 
          },
        },
      ]
    },
    {
      label: 'Ver',
      submenu: [
        {
          label: 'Normal',
          click() { chatWindow.setAlwaysOnTop(false) },
        },
        {
          label: 'Always on top',
          click() { chatWindow.setAlwaysOnTop(true, 'floating') },
        },
        { role: 'zoomin', accelerator: 'CommandOrControl+=' },
        { role: 'zoomout' },
      ]
    },
    {
      label: 'Recargar',
      accelerator: "CmdOrCtrl+R",
      click: () => {
        chatWindow.reload();
      }
    },
    {
      label: 'Abrir reproductor',
      click: () => {
        openPlayer()
      }
    }
  ];

  // saves the selected channel in appdata
  chatWindow.webContents.on('did-finish-load', () => {
    settings.set("general", {
      channel: chatWindow.webContents.getURL(),
    });
  })


  chatWindow.setMenu(Menu.buildFromTemplate(menu))
  //chatWindow.setMenu(null)

  settings.get("general.channel").then((channelURL) => {
    console.log(channelURL)

    if(channelURL){
      chatWindow.loadURL(channelURL);
    }else{ // fallback to cristianghost
      chatWindow.loadURL("https://booyah.live/channels/79895327?chat=true");
    }
  });


  if (isDev) {
    chatWindow.webContents.openDevTools();
  }
}

function openPlayer() {
    const menu = [
      /*{
        label: 'Ver VODS',
        click: () => {
          const url = playerWindow.webContents.getURL().replace('channels','studio').replace('player','vods')
          playerWindow.loadURL(url);
          console.log(url)
        }
      }*/
    ];
    
    playerWindow = new BrowserWindow({
      width: 1280,
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


  playerWindow.setMenu(Menu.buildFromTemplate(menu))

  playerWindow.setAlwaysOnTop(true, 'floating')

  playerWindow.loadURL(chatWindow.webContents.getURL().replace('chat','player'));

}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
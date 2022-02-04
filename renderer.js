// renderer process
var ipcRenderer = require('electron').ipcRenderer;
var shell = require('electron').shell

ipcRenderer.on('openInBrowser', function (event) {
	if(app.currentTab){
		for (let i = 0; i < app.tabs.length; i++) {
			console.log(app.tabs)
			if(app.tabs[i].name = app.currentTab)
				ipcRenderer.sendSync('openInBrowser', `https://booyah.live/${app.channels[i].booyahID}`)
		}
	}
});

var webview;
var reloaded;

var app = new Vue({
  el: "#app",
  data: {
    channels: [
      {
        // cristianghost
        twitchID: 149287198,
        chatroomID: 79543340,
		booyahID: 'cristianghost',
        name: "Cristianghost",
      },
      {
        // moai
        twitchID: 68111739, // 149287198
        chatroomID: 63325494,
		booyahID: 63681555,
        name: "Moai GR",
      },
      {
        //puvloo
        twitchID: 474990645,
        chatroomID: 62474863,
		booyahID: 62813927,
        name: "Puvloo",
      },
      {
        //donsebastian
        twitchID: 38108090,
        chatroomID: 13037025,
		booyahID: 'donsebastian',
        name: "Donsebastian",
      },
      {
        // suwie
        twitchID: 191996164,
        chatroomID: 71191348,
		booyahID: 71614581,
        name: "Suwie",
      },
      // para la otra file, agregar otro container
    ],
    currentTab: "",
    tabs: [],
  },
  methods: {
    setTab: function (tabName) {
      this.currentTab = tabName;
      console.log("tab " + tabName + " selected");
    },
    addNewChannel: function (event) {
      $(".ui.modal").modal("show");
    },
	closeTab: function(index){
		this.tabs.splice(index, 1);
	},
    openChannel: function (index) {
      let channel = this.channels[index];

      this.currentTab = channel.name;

      console.log("ID ", channel.chatroomID);
      console.log("channelName ", channel.name);

      // refactor
      var exists = false;

      this.tabs.forEach((tab) => {
        if (tab.name == channel.name) {
          exists = true;
        }
      });
      if (exists) return;

      this.tabs.push({
        name: channel.name,
        html: `<webview  
			  useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko" webpreferences="allowRunningInsecureContent"
			  partition="booyah" src="https://booyah.live/standalone/chatroom/${channel.chatroomID}"
			  class="webview" 
			  preload="file://${__dirname}/emotes.js"
			  style="position:absolute;width:100%;height:1000px"></webview>`,
      });
      var self = this;
      setTimeout(() => {
		// https://www.electronjs.org/docs/api/webview-tag#webviewreload
        var reloaded = false
		// usamos el utlmo webview creado (TODO:mejorar)
		var webview = document.querySelectorAll(".webview")[document.querySelectorAll(".webview").length -1];
		console.log(webview)

		// ocultamos el webview al crearlo
		//self.$refs.tabs[index].style.display = "none";

        setTimeout(() => {
          if (!reloaded) {
            webview.reload();
			console.log("webview reloaded")
            setTimeout(() => {
            //  self.$refs.tabs[index].style.display = "block";
              webview.insertCSS(`
				html,body {
					height:100%;
			}

		.emote {
				position: relative;
				vertical-align: middle;
				max-height: 28px;
				width: auto;
				height: auto;
			}
			
			@font-face {
				font-family: "Inter";
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthiI2B.woff2)
					format("woff2");
				unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
			}
			@font-face {
				font-family: "Inter";
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZNhiI2B.woff2)
					format("woff2");
				unicode-range: U+1F00-1FFF;
			}
			@font-face {
				font-family: "Inter";
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZxhiI2B.woff2)
					format("woff2");
				unicode-range: U+0370-03FF;
			}
			@font-face {
				font-family: "Inter";
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZBhiI2B.woff2)
					format("woff2");
				unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
					U+01AF-01B0, U+1EA0-1EF9, U+20AB;
			}
			@font-face {
				font-family: "Inter";
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZFhiI2B.woff2)
					format("woff2");
				unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
					U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
			}
			@font-face {
				font-family: "Inter";
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)
					format("woff2");
				unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
					U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
					U+FEFF, U+FFFD;
			}
			
			.components-chatbox-message {
				margin: 4px 0px 0;
			}
			.message-text {
				color: white !important;
				font-weight: normal;
				font-family: "Inter", sans-serif;
			}
			.components-chatbox-message .message-content {
				font-size: 12px;
			}
			.components-chatbox-user-menu {
				font-family: "Inter", sans-serif;
				font-weight: bold;
			}
			
			body {
				background-color: rgb(25, 25, 25);
			}
			
			.scroll-container {
				padding-left: 10px;
			}
			
			#hide {
				background: none repeat scroll 0 0 transparent;
				border: medium none;
				border-spacing: 0;
				color: #ffffff;
				font-family: "PT Sans Narrow", sans-serif;
				font-size: 16px;
				font-weight: normal;
				line-height: 1.42rem;
				list-style: none outside none;
				margin: 0;
				padding: 0;
				text-decoration: none;
				text-indent: 0;
				text-align: center;
				font-family: sans-serif;
			}
			.components-chatbox-message {
				margin: 2px 12px 0 !important;
			}
			
			.scroll-container {
				margin-left: 9px;
			}
			
			#emotes-icon {
				background-image: url("chrome-extension://__MSG_@@extension_id__/icons/emote-icon.png");
				background-position: 0px 0px;
				width: 26px;
				height: 28px;
			}
			#emotes-icon:hover {
				background-position: 26px 0px;
			}
			
			.emoteIcon {
				cursor: pointer;
				width: 32px;
				margin: 2px;
			}
			
			#hidebutton {
				background: none repeat scroll 0 0 transparent;
				border: medium none;
				border-spacing: 0;
				color: #c5aa09;
				font-family: "PT Sans Narrow", sans-serif;
				font-size: 16px;
				font-weight: normal;
				line-height: 1.42rem;
				list-style: none outside none;
				margin: 0;
				padding: 0;
				text-align: left;
				text-decoration: none;
				text-indent: 0;
				width: 100%;
				text-align: center;
				font-family: Inter, sans-serif;
			}
			
			#bttvicon {
				background-image: url("https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/1x");
				background-position: 0px 0px;
				width: 28px;
				height: 28px;
			}
			
			#ffzicon {
				background-image: url("https://cdn.frankerfacez.com/emoticon/243789/1");
				background-position: 0px 0px;
				width: 32px;
				height: 25px;
			}
			
			#twitchicon {
				background-image: url("chrome-extension://__MSG_@@extension_id__/icons/twitch.svg");
				width: 24px;
				height: 24px;
			}
			
			#channelIcon {
				width: 24px;
				height: 24px;
				background-size: cover;
			}
			
			.emoteCategory {
				padding: 12px 12px !important;
			}
			
			.emoteCategory span {
				position: absolute;
				left: 50px;
			}
			#emoteList {
				position: fixed;
				left: 0px;
				transform: translate(0px, -300px);
				overflow: hidden;
				width: 100%;
				max-height: 300px;
				display: none;
				top: -72px;
			}
			
			.default-panel {
				width: 320px;
				min-width: 320px;
				display: inline-block;
				margin: 10px !important;
				vertical-align: top;
			}
			.components-chatbox-banners {
				display: none;
			}
			.views-standalone-chatroom {
				background-color: rgb(24, 24, 27) !important;
			}
			
			.message-connection-status {
				display: none;
			}
			.viewer-count {
				color: red !important;
			}
			
			.fold {
				position: relative !important;
				left: 10px !important;
				color: rgb(255, 176, 0);
			}
			
			.panelsTitle {
				margin-left: 16px;
			}
			.channel-infos {
				margin-top: 0px !important;
			}
			.channel-infos .viewer-count {
				font-size: 20px !important;
			}
			
			.components-chat-menu-users-popover .user:last-child {
				margin-bottom: 0px !important;
			}
			
			.ScTitleText-sc-1gsen4-0 {
				font-size: 20px;
			}
			.donoBadge {
				width: 16px;
				height: 16px;
			}
			.tipsbadge {
				padding: 16px !important;
			}
			
			.downloadvod {
				-webkit-appearance: button;
				-moz-appearance: button;
				appearance: button;
			
				text-decoration: none;
				color: initial;
				margin-left: 40px !important;
				padding: 20px !important;
				background-color: #2525ff !important;
			}
			#createClip {
				-webkit-appearance: button;
				-moz-appearance: button;
				appearance: button;
				color: white !important;
				text-decoration: none;
				color: initial;
				margin-left: 40px !important;
				margin-right: 20px !important;
				padding: 20px !important;
				background-color: #e6269c !important;
			}
			#clipModal {
				padding: 30px;
				text-align: center;
			}
			#clipModal h1 {
				text-align: center;
				color: black;
				font-size: 30px;
				padding-bottom: 30px;
				height: 90%;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			#clipModal input {
				padding: 6px;
				border-radius: 6px;
				border: #00000075 solid 1px;
			}
			
			#clipModal div {
				color: black;
				font-size: 20px;
			}
			#clipBtn {
				padding: 20px;
				margin-top: 30px;
				background-color: rgb(230, 38, 156) !important;
			}
			webview{
				height: 1700px;}
			`);
            }, 500);

            reloaded = true;
          }
        }, 100);
        console.log("inserting css");

        webview.openDevTools();
      }, 4000);
      $(".ui.modal").modal("hide");
    },
  },
});

//document.getElementById('nickname1').innerHTML = channelName
/*if (isBooyah) {
		document.getElementById(
			"tab1"
		).innerHTML = `<webview  useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko" webpreferences="allowRunningInsecureContent"  partition="booyah" src="https://booyah.live/standalone/chatroom/${channelID}" class="webview" preload="file://${__dirname}/emotes.js" style="position:absolute;width:100%;height:100%;"></webview>`;
	} else {
		document.getElementById(
			"tab1"
		).innerHTML = `<webview  useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko" webpreferences="allowRunningInsecureContent"  partition="booyah" src="https://www.twitch.tv/popout/${channelID}/chat?popout=" class="webview" style="position:absolute;width:100%;height:100%;"></webview>`;
	}*/

//	webview = document.querySelector("webview");

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.



const globalBetterttvURL = "https://api.betterttv.net/3/cached/emotes/global";

const betterTTVChannelBaseURL = "https://api.betterttv.net/3/cached/users/twitch/";
const frankerfaceZChannelBaseURL = "https://api.frankerfacez.com/v1/room/id/";


// twitch id grabed in https://api.twitch.tv/kraken/users?login={username} -h Accept = application/vnd.twitchtv.v5+json, Client-ID = cclk5hafv1i7lksfauerry4w7ythu2

var channel;
var donations;

var nickname;

const channels = [
  {
    //puvloo
    twitchID: 474990645,
    booyahID: 62813927,
	chatroomID: 62474863,
    bttv: false,
    ffz: false,
    subsEmotes: [
      { name: "puvlooPOG", id: "305388833" },
      { name: "puvlooFRUTA", id: "304379794" },
      { name: "puvlooCOMBO1", id: "304379754" },
      { name: "puvlooROSAS", id: "304379852" },
      { name: "puvlooCORAZON", id: "304379724" },
      { name: "puvlooCHI", id: "304379655" },
      { name: "puvlooDINERO", id: "304379268" },
      { name: "puvlooBATMAN", id: "304369130" },
      { name: "puvlooBEBESAD", id: "304368803" },
      { name: "puvlooOjo", id: "303233509" },
      { name: "puvlooSLEEP", id: "302293141" },
      { name: "puvlooWhat", id: "302189921" },
      { name: "puvlooMonkey", id: "305612040" },
      { name: "puvlooAsco", id: "306362105" },
      { name: "puvlooAJJA", id: "306362177" },
      { name: "puvlooZADDY", id: "306362216" },
      { name: "puvlooMrLimpio", id: "306362342" },
      { name: "puvlooPreocupado", id: "306362344" },
    ],
  },
  {
    //donsebastian
    twitchID: 38108090,
    booyahID: "donsebastian",
	chatroomID: 13037025,
    bttv: true,
    ffz: true,
    panels: [
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-0"><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/DonSebastian_M"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-b9deeb77-e4d7-45fb-9fd3-c710f564ca6f" alt="Contenido del panel"></a></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-1"><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/donsebastian_m/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-fac9000f-2e62-46e9-9609-6bb0a4ba13c7" alt="Contenido del panel"></a></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/xHebHaHCHL"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-fe9a2dbe-147a-4b21-9ad3-b60bfcf712de" alt="Contenido del panel"></a></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-3"><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="https://steamcommunity.com/tradeoffer/new/?partner=41366819&amp;token=pWEPdp5z"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-57bd901c-8318-4bef-a549-be772eb16c27" alt="Contenido del panel"></a></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="https://streamlabs.com/donsebastianlive"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-72c73c1e-3fca-40ba-a79f-39d89a446ea8" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="sc-AxjAm ScTypeset-xkayed-0 AhGCy tw-typeset"><div class="panel-description"><p>Si quieres puedes donar, es totalmente opcional y solo tendran mi agradecimiento eterno &lt;3. Esto ayuda a mejorar el stream.</p></div></div></div></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-6"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-7cfc6f5d-2297-4b0f-bde1-68d37257c629" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxjAm ScTypeset-xkayed-0 AhGCy tw-typeset"><div class="panel-description"><p>De Rancagua, Chile, streams casi todos los dias. Reacciones, jugar y politica.</p></div></div></div></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-5"><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="http://www.flow.cl/btn.php?token=1ljjapn"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-20c471a6-9349-45c6-99b9-8c2735d3f8ad" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="sc-AxjAm ScTypeset-xkayed-0 AhGCy tw-typeset"><div class="panel-description"><p>Si quieres donar en moneda local lo puedes hacer por Pagos WebPay, tarjetas de casas comerciales y pagos en comercios habilitados.</p></div></div></div></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-7"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-b9ee181a-a081-4ceb-8e6b-3ef97c0aea55" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxjAm ScTypeset-xkayed-0 AhGCy tw-typeset"><div class="panel-description"><p>•Procesador: Intel i5 10400.</p><p>•RAM: 16GB, DDR4, 2666 MHz.</p><p>•Video: Nvidia Asus OC RTX 2060 6GB.</p><p>•Motherboard: Asus Tuf Gaming B460M-Plus.</p><p>•SSD1: Western Digital blue NVME 1TB.</p><p>•SSD2: Crucial BX500 480 GB.</p><p>•HDD: Western Digital Blue 1TB.</p><p>•Mouse: Logitech G302.</p><p>•Teclado: Logitech G710+.</p><p>•Audifonos: Sennheiser HD 400S.</p><p>•WebCam: Logitech C920 HD Pro.</p><p>•Microfono: BM800 + Samson S • Phantom</p></div></div></div></div>`,
      },
      {
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-8"><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="https://discord.io/donsebastian"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-38108090-image-3809013e-289f-495d-a694-ecf0beb3f27d" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="sc-AxjAm ScTypeset-xkayed-0 AhGCy tw-typeset"><div class="panel-description"><p>¡Se parte de la comunidad! Aunque no seas sub, compartimos bellos memes y momentos profundos</p></div></div></div></div>`,
      },
    ],
  },
  {
    // suwie
    twitchID: 191996164,
    booyahID: 71614581,
	chatroomID: 71191348,
    bttv: true,
    ffz: true,
  },
  {
    // cristianghost
    twitchID: 149287198,
    booyahID: 71484262,
    chatroomID: 79543340,
    bttv: true,
    ffz: true,
    subsBadges: [
      "5eb60657-af78-4a2b-97f5-eda2d4cf47e6", // 1 mes
    ],
    subsEmotes: [
      { name: "cristianSerotonina", id: "303892010" },
      { name: "cristianNormie", id: "303891994" },
      { name: "cristianPicardia", id: "303891853" },
      { name: "cristianPog", id: "303891704" },
      { name: "cristianL", id: "303511499" },
      { name: "cristianAYAYA", id: "303307414" },
      { name: "cristianEpico", id: "302211115" },
      { name: "cristianBAN", id: "301078636" },
      { name: "cristianSad", id: "301077023" },
      { name: "cristianUWU", id: "301076947" },
      { name: "cristianCursed", id: "301076882" },
      { name: "cristianM", id: "1933721" },
      { name: "cristianLUL", id: "1933714" },
      { name: "cristianPelao", id: "1733212" },
      { name: "cristianPou", id: "1494247" },
      { name: "cristianChupAYAYA", id: "1178616" },
      { name: "cristianPecky", id: "306756023" },
      { name: "cristianWaton", id: "306756092" },
      { name: "cristianAweonaso", id: "306756484" },
    ],

    panels: [
      {
        // cuenta rut dono
        type: "image",
        img: "https://panels-images.twitch.tv/panel-149287198-image-05234ad8-c503-467c-bad5-9a963dd717d6",
        url: "https://swd.cl/twitch/cristianghost/",
      },
      {
        // paypal dono
        type: "image",
        img: "https://panels-images.twitch.tv/panel-149287198-image-771b0c21-31cc-4213-8340-8d7a4a016539",
        url: "https://streamelements.com/cristianghost/tip",
      },
      {
        // discord
        type: "image",
        img: "https://panels-images.twitch.tv/panel-149287198-image-69a26a8d-aec9-409f-add8-6df53d73edd1",
        url: "http://discord.gg/aweonasogang",
      },
      {
        // instagram
        type: "image",
        img: "https://panels-images.twitch.tv/panel-149287198-image-b9bbf71c-1121-4e8a-92a5-47843aacd384",
        url: "https://www.instagram.com/cristianghostnzalez/",
      },
      {
        // twiter
        type: "image",
        img: "https://panels-images.twitch.tv/panel-149287198-image-810ac60c-6e19-4e2c-b0b3-e21a01db912c",
        url: "https://twitter.com/CristianGhost_",
      },
      {
        // canal secundario
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-6"><h3 data-test-selector="title_test_selector" class="sc-AxirZ ScTitleText-sc-1gsen4-0 hUUiQw tw-title">Canal secundario!</h3><a data-test-selector="link_url_test_selector" class="ScCoreLink-udwpw5-0 FXIKh tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCjk1aSSyCg5KOmzoIn34r1Q"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-149287198-image-db91318f-0990-4521-a39d-5310b095eed3" alt="Contenido del panel"></a></div>`,
      },
      {
        // contacto
        type: "html",
        html: `<div class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-9"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-149287198-image-92d1e342-5384-496e-81a9-f669cdbf042d" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxjAm ScTypeset-xkayed-0 AhGCy tw-typeset"><div class="panel-description"><p><em>cristianghost@rift-agency.com</em>, <strong>intentaré responder lo más rápido posible!</strong></p></div></div></div></div>`,
      },

      {
        // spects
        type: "html",
        html: `
				<div
					class="sc-AxjAm dGeTii default-panel"
					data-test-selector="channel_panel_test_selector"
					data-a-target="panel-7"
					>
					<img
						data-test-selector="image_test_selector"
						src="https://panels-images.twitch.tv/panel-149287198-image-a27899e7-0c17-41cd-93bd-c7a696788be4"
						alt="Contenido del panel"
					/>
					<div data-test-selector="description_test_selector">
						<div class="sc-AxjAm ScTypeset-xkayed-0 AhGCy tw-typeset">
						<div class="panel-description">
							<ul>
							<li><strong>Tarjeta:</strong> GeForce RTX 3080 Trinity</li>
							<li><strong>Procesador:</strong> i9-10850K</li>
							<li><strong>Ram:</strong> 32 GB</li>
							<li><strong>Placa madre:</strong> Z490 AORUS Pro AX</li>
							<li><strong>Mouse:</strong> Logitech G502 Hero SE</li>
							<li>
								<strong>Teclado:</strong> SKYLOONG SK61 (Gateron Optical Brown)
							</li>
							<li><strong>Micrófono:</strong> Electro-voice RE20</li>
							<li><strong>Interfaz:</strong> GoXLR Mini</li>
							<li><strong>Cámara:</strong> Sony A5100</li>
							<li><strong>Lente:</strong> Sigma 16mm 1.4 DC</li>
							<li><strong>Audìfonos:</strong> Sennheiser 660s</li>
							<li><strong>AMP de Audífonos:</strong> FiiO E10K</li>
							<li><strong>Silla:</strong> Ergohuman (cuero)</li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					`,
      },
    ],
  },
  {
    // moai
    twitchID: 68111739, // 149287198
    booyahID: 63681555,
    chatroomID: 63325494,
    bttv: true,
    ffz: true,
  },
];

var twitchEmotes = [
	// https://twitchemotes.com

	{id:'425618', name: 'LUL'},
	{id:'160404', name: 'TehePelo'},
	{id:'120232', name: 'TriHard'},
	{id:'114836', name: 'Jebaited'},
	{id:'84608', name: 'cmonBruh'},
	{id:'81248', name: 'OSFrog'},
	{id:'58765', name: 'NotLikeThis'},
	{id:'55338', name: 'KappaPride'},
	{id:'28087', name: 'WutFace'},
	{id:'27602', name: 'BuddhaBar'},
	{id:'22639', name: 'BabyRage'},
	{id:'3792', name: 'ANELE'},
	{id:'86', name: 'BibleThump'},
	{id:'69', name: 'BloodTrail'},
	{id:'41', name: 'Kreygasm'},
	{id:'25', name: 'Kappa'},
	{id:'461298', name: 'DarkMode'},
	{id:'245', name: 'ResidentSleeper'},

	

	{id:'555555579', name: '8-)', scaped: true},
	{id:'2', 		 name: ':(', scaped: true},
	{id:'1', 		 name: ':)', scaped: true},
	{id:'555555559', name: ':-(', scaped: true},
	{id:'555555557', name: ':-)', scaped: true},
	{id:'555555586', name: ':-/', scaped: true},
	{id:'555555561', name: ':-D', scaped: true},
	{id:'555555581', name: ':-O', scaped: true},
	{id:'555555592', name: ':-P', scaped: true},
	{id:'555555568', name: ':-Z', scaped: true},
	{id:'555555588', name: ":-\\", scaped: true},
	{id:'555555583', name: ":-o", scaped: true},
];

// forsenE, etc
var booyahtvEmotes = [
	{url:'https://zzls.xyz/booyah.tv/1x.png', name: 'YEAHBUTBOOYAHTV'},

	{id:'521050', name: 'forsenE'},
	{id:'116051', name: 'forsen1'},
	{id:'116052', name: 'forsen2'},
	{id:'emotesv2_2f9a36844b054423833c817b5f8d4225', name: 'forsenPls'},

];


var globalEmotes = [];
var channelEmotes = [];

var betterTTV = [];
var frankerFaceZ = [];

// Twitch.tv username colors

const colors = [
  "#002FA7",
  "#8a2be2",
  "#5f9ea0",
  "#E4717A",
  "#1e90ff",
  "#b22222",
  "#00FF00",
  "#ff69b4",
  "#ff4500",
  "#ff0000",
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

// find and replace all instances of an emote given the message and a regex rule.

function replaceEmote(msg, regex, url, title) {

  return msg.replace(
	regex,
	`<img title="${title}" class='emote' src='${url}'>`
  );
}

// remplaces all bettertTTV and frankerFaceZ emotes in a message.

function replaceEmotes(msg) {
  // TWITCH EMOTES

  for (let i = 0; i < twitchEmotes.length; i++) {
	let regex = ''
	// TODO: refactor
	if ( twitchEmotes[i].scaped){
		
		regex = escapeRegex(twitchEmotes[i].name)
	}else{
		regex = "\\b" + twitchEmotes[i].name + "\\b"
	}
	
	regex = new RegExp(regex, "g"); // use scaped if exists

	let url = `https://static-cdn.jtvnw.net/emoticons/v2/${twitchEmotes[i].id}/default/dark/1.0`;

	msg = replaceEmote(msg, regex, url, twitchEmotes[i].name);
  }

  // GLOBAL CHANNEL EMOTES

  for (let i = 0; i < booyahtvEmotes.length; i++) {
	let regex = new RegExp("\\b" + booyahtvEmotes[i].name + "\\b", "g");
	let url = ''

	if (booyahtvEmotes[i].url){
		url	= booyahtvEmotes[i].url
	}else{
		url = `https://static-cdn.jtvnw.net/emoticons/v2/${booyahtvEmotes[i].id}/default/dark/1.0`;
	}
	msg = replaceEmote(msg, regex, url, booyahtvEmotes[i].name);
  }
  

  // SUB EMOTES

  if (channel && channel.subsEmotes) {
	for (let i = 0; i < channel.subsEmotes.length; i++) {
		let regex = new RegExp("\\b" + channel.subsEmotes[i].name + "\\b", "g");
		let url = `https://static-cdn.jtvnw.net/emoticons/v2/${channel.subsEmotes[i].id}/default/dark/1.0`;

		msg = replaceEmote(msg, regex, url, channel.subsEmotes[i].name);
	}
  }

    // BETTER TTV EMOTES (del canal, global, compartidos)
    if(channel && channel.bttv){

	for (let i = 0; i < betterTTV.length; i++) {
		let regex = new RegExp("\\b" + betterTTV[i].code + "\\b", "g");
		let url = `https://cdn.betterttv.net/emote/${betterTTV[i].id}/1x`;
		
		msg = replaceEmote(msg, regex, url, betterTTV[i].code);
	}
  }

  // FRANKER FACE Z EMOTES
  if(channel && channel.ffz){

	for (let i = 0; i < frankerFaceZ.length; i++) {
		let regex = new RegExp("\\b" + frankerFaceZ[i].name + "\\b", "g");
		let url = `https://cdn.frankerfacez.com/emote/${frankerFaceZ[i].id}/1`;

		msg = replaceEmote(msg, regex, url, frankerFaceZ[i].name);
	}
  }


  return msg;
}
// remplace all emotes in message (bttv, ffz, D:,etc) with an image

function addEmotes(objective) {

	// reemplace the emote code with his corresponding code


    var msg = objective.innerHTML

    msg = replaceEmote(msg, new RegExp("( |^)" + "&lt;3" + "\\b(?!&lt;3)", "g"), "https://static-cdn.jtvnw.net/emoticons/v1/9/1.0", "<3"); // harth <3			
    msg = replaceEmote(msg,new RegExp("\\b" + "D:" + "( |$)", "g"),"https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/1x","D:"); // D:
    msg = replaceEmote(msg,new RegExp(":tf:", "g"),"https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/1x",":tf:"); // :tf:

    msg = replaceEmotes(msg); // replace all twitch, sub emotes, betterttv and franker face z emotes

    //console.log('[result] ',msg)

    objective.innerHTML = msg;
}

function changeChatOnChange(e){
    console.log('change')
	for (var j = 0; j < e.target.childNodes.length; j++) {
		var components = e.target.childNodes[j];

		// change the username color
		var usernameContainer = components.childNodes[0].childNodes[0];

		// put tag in chatbox
		usernameContainer.onclick = event => {
			if (event.detail === 2) {

				tagUserByMessage(event.target)
			}
		 };


		if(components.childNodes[0].childNodes[0].childNodes[0].className == 'message-badge'){
			components.childNodes[0].childNodes[0].childNodes[0].childNodes[0].src = 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1'
		}

		//	message-badge

		var username = usernameContainer.childNodes[usernameContainer.childNodes.length - 1];

		var hash = username.innerText.charCodeAt(0);

		var color = "#ffffff";

		for (let i = 0; i < colors.length; i++) {
			if (hash % i === 0) {
				color = colors[i];
			}
		}

		username.style.color = color;

		var messageContent = components.childNodes[0].childNodes // Marcelo : sdfsdf

		var messageText = messageContent[messageContent.length - 1] //sdfsdf

		// check tag

		if(nickname){
			if(messageText.innerHTML.includes('@') && messageText.innerHTML.includes(nickname)){
				console.log('[BOOYAH.TV] tagged')
				e.target.style.background = '#c51919'
				username.style.color =  'rgb(255 255 255)'

			}
		}
		// change the message content with its emotes

		addEmotes(messageText);

	}
}

function watchChatChanges() {
	console.log('[BOOYAH.TV] Watching Chat Changes')

	document.getElementsByClassName("scroll-container")[0].removeEventListener('DOMNodeInserted', changeChatOnChange, true);

	document.getElementsByClassName("scroll-container")[0].addEventListener("DOMNodeInserted",changeChatOnChange,true);
}


function loadAPIs(){
    var currentURL = window.location.href

    // save nickname
   /* let uid = localStorage.getItem('loggedUID')

    console.log('[BOOYAH.TV] USER ID: '+uid)

    if(uid){
      fetch(`https://booyah.live/api/v3/users/${uid}`)
      .then(response => response.json())
      .then(data => {
        nickname = data.user.nickname
        console.log('[BOOYAH.TV] nickname: '+nickname)

      });
    }
*/
	  console.log("[BOOYAH.TV] CURRENT URL: "+currentURL)

  	channels.forEach((currentChannel) => {
      // check if user is in channel or its chatroom (popup)
      console.log(currentURL)
      console.log(currentChannel.chatroomID)
      if (!(currentURL.includes(currentChannel.chatroomID))) return;
      
      // check if user is in channel or its chatroom (popup)

      channel = currentChannel

      console.log( "[BOOYAH.TV] You are in " + currentChannel.booyahID + " Channel.");

      console.log("[BOOYAH.TV] fetching betterttv for channel: ", betterTTVChannelBaseURL + currentChannel.twitchID );
      console.log("[BOOYAH.TV] fetching frankerFaceZ for channel: ",frankerfaceZChannelBaseURL + currentChannel.twitchID );

      Promise.all([
          fetch(globalBetterttvURL).then((value) => value.json()),
          fetch(betterTTVChannelBaseURL + currentChannel.twitchID).then((value) => value.json() ),
          fetch(frankerfaceZChannelBaseURL + currentChannel.twitchID).then((value) => value.json() ),
      ])
      .then(([globalBetterttv, channelBetterttv, channelFrankerfaceZ]) => {
          // limiamos los emotes para que no se junten con los de otro streamer
          
          betterTTV = []
          globalEmotes = []
          frankerFaceZ = []

          // Guardamos los emoes globales de bttv, los compartidos y los del canal dentro del arerglo "betterTTV"
          betterTTV = betterTTV.concat(globalBetterttv);

          betterTTV = betterTTV.concat(channelBetterttv.channelEmotes);
          betterTTV = betterTTV.concat(channelBetterttv.sharedEmotes);

          globalEmotes = channelEmotes.concat(globalBetterttv)

          // cargamos los emotes del canal (bttv)
          if (channelBetterttv.channelEmotes) {
              channelEmotes = channelEmotes.concat(channelBetterttv.channelEmotes)
          }

          // cargamos los emotes del canal (ffz)
          if (channelFrankerfaceZ.status != 404) {
                            
            frankerFaceZ = frankerFaceZ.concat(channelFrankerfaceZ.sets[Object.keys(channelFrankerfaceZ.sets)[0]].emoticons);

            // quitamos los emotes que ya estan en bttv

            frankerFaceZ = frankerFaceZ.filter(ffzEmote => {
                return !betterTTV.some((bttvEmote) => bttvEmote.code == ffzEmote.name);  
            })

        }

          console.log("[BOOYAH.TV] betterttv: ", betterTTV);
          console.log("[BOOYAH.TV] frankerFaceZ: ", frankerFaceZ);

          console.log("[BOOYAH.TV] channelEmotes: ", channelEmotes);

          // emotes ,chat colors, donations button
          var chatExist = setInterval(function() {
            
                  console.log("[BOOYAH.TV] insert on reload");
                  
                  
                  clearInterval(chatExist);
                                  
                  watchChatChanges()

          }, 1500);
      })
      .catch((err) => {
          console.log(err);
      });
    })
}


loadAPIs()


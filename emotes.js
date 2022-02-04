const badgesBaseURL = 'https://badges.twitch.tv/v1/badges/channels/'
const subsEmotesBaseURL = 'https://api.ivr.fi/twitch/allemotes/'

const globalBetterttvURL = "https://api.betterttv.net/3/cached/emotes/global";
const globalBooyahtvURL = "https://api.betterttv.net/3/cached/users/twitch/730866851";

const betterTTVChannelBaseURL = "https://api.betterttv.net/3/cached/users/twitch/";
const frankerfaceZChannelBaseURL = "https://api.frankerfacez.com/v1/room/id/";

const booyahApiBaseURL = "https://bapi.zzls.xyz/api/" // "https://bapi.zzls.xyz/api/"

// twitch id grabed at https://api.twitch.tv/kraken/users?login={username} -h Accept = application/vnd.twitchtv.v5+json, Client-ID = cclk5hafv1i7lksfauerry4w7ythu2

var channel;
var isPopup;
var donations;

var selfUsername;
var userPoints;

const maxLenghtUsername = 25


const channels = [{
		//puvloo
		name: 'puvloo',
		twitchID: 474990645,
		booyahID: 62813927,
		chatroomID: 62474863,
		bttv: false,
		ffz: false,
		panels: [
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-0"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCok4dp9tEPNjCyq93xfB0hw?view_as=subscriber"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-474990645-image-21f207ff-161d-4c5e-9315-b368396c70af" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-3"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/puvlo69/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-474990645-image-36700caf-44fc-4ba6-8701-6ada5df209c1" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-6"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/Puvlo69"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-474990645-image-be64dee4-25b2-46aa-899b-4fffb3525f92" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-9"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://discord.gg/7sNUXvZb"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-474990645-image-543eece1-c679-4765-a7c3-a4847db8cc1f" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-474990645-image-96a68ed3-8ec0-4fc6-8295-e09c8be22feb" alt="Contenido del panel"></div>`,
			}
		],
	},
	{
		//donsebastian
		name: 'donsebastianlive',
		twitchID: 38108090,
		booyahID: 'donsebastian',
		booyahNumericID: 13259566,
		chatroomID: 13037025,
		bttv: true,
		ffz: true,
		panels: [{
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
		name: 'suwie',
		twitchID: 191996164,
		booyahID: 'Suwie',
		booyahNumericID: 71614581,
		chatroomID: 71191348,
		bttv: true,
		ffz: true,
		panels: [
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-191996164-image-dd106a33-1cfb-4f47-896a-a0840534f3b9" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxiKw sc-pscky gzUZnd tw-typeset"><div class="panel-description"><p>1 - No insultar.<br>2- Respetar a los mods y tanto como mods usuarios.<br>3- No hacer spam/flood.<br>4- No hablar de temas religiosos/politicos.<br>5- Divertirse</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-191996164-image-8d73fdb9-9129-484b-b6fa-0b432f78a4fb" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxiKw sc-pscky gzUZnd tw-typeset"><div class="panel-description"><p>Contact: Suwiecontact@gmail.com</p><p>⋆┈┈┈┈┈⋆┈┈⊰✩⊱┈┈⋆┈┈┈┈┈┈⋆</p><p>https://twitter.com/Suwie_</p><p>⋆┈┈┈┈┈⋆┈┈⊰✩⊱┈┈⋆┈┈┈┈┈┈⋆</p><p>https://discord.gg/suwie</p><p>⋆┈┈┈┈┈⋆┈┈⊰✩⊱┈┈⋆┈┈┈┈┈┈⋆</p><p>https://www.youtube.com/c/Suwie</p><p>⋆┈┈┈┈┈⋆┈┈⊰✩⊱┈┈⋆┈┈┈┈┈┈⋆</p><p>https://www.facebook.com/LoliLoliuwu/</p><p>⋆┈┈┈┈┈⋆┈┈⊰✩⊱┈┈⋆┈┈┈┈┈┈⋆</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-7"><h3 data-test-selector="title_test_selector" class="sc-AxgMl sc-fzpmMD jzuMSH tw-title">Discord</h3><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://discord.gg/suwie"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-191996164-image-b10ab5b5-5423-4584-a5a5-53f639209436" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-191996164-image-dd106a33-1cfb-4f47-896a-a0840534f3b9" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxiKw sc-pscky gzUZnd tw-typeset"><div class="panel-description"><p>1 - No insultar.<br>2- Respetar a los mods y tanto como mods usuarios.<br>3- No hacer spam/flood.<br>4- No hablar de temas religiosos/politicos.<br>5- Divertirse</p></div></div></div></div>`,
			}
		],
	},
	{
		// cristianghost
		name: 'cristianghost',
		twitchID: 149287198,
		booyahID: 'cristianghost',
		booyahNumericID: 79895327,
		chatroomID: 79543340,
		bttv: true,
		ffz: true,
		leaderboard: true,
		offlineEmote: {
			url: 'https://static-cdn.jtvnw.net/emoticons/v2/302211115/default/dark/3.0',
			name: 'cristianEpico',
		},
		panels: [{
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
				type: 'html',
				html: `			
				<div id="leaderboard-container" class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-1">
					<div id="table-container"></div>
				</div>`,
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
			}
		],
		botName: 'AweonasoBot',
		streamVipWords: [
			['você ainda não possui', 'Aún no tienes puntos'],
			['você possui', 'tiene'],
			['pontos', 'puntos'],
			['assistiu a live', 'ha visto el live'],
			['A live está offline. 😐', 'El directo está offline Sadge'],
			['A live está aberta há','HYPERS El directo esta online hace'],
			['Lista de comandos da live', 'HACKERMANS Lista de comandos del stream'],
			['o usuário', 'el usuario'],
			['ainda não ha visto a esse canal', 'aún no ha visto este canal'],
			['foi criado há','creó su cuenta hace'],
			['está ativo no canal há','esta activo en el canal hace'],
			['Loja da live','Tienda EpicoD'],
			['foi visto pela última vez em', 'ha visto por ultima vez el live el'],
			['ainda não assistiu esse canal. 😕', 'no ha visto aún el canal :-( '],
			['https://streamvip.app/cristianghost/store','<a class="chaturl" target="__blank" href="https://streamvip.app/cristianghost/store">https://streamvip.app/cristianghost/store</a>'],
			['https://streamvip.app/cristianghost/commands','<a class="chaturl" target="__blank" href="https://streamvip.app/cristianghost/commands">https://streamvip.app/cristianghost/commands</a>'],
			['às','a las'],
			['💰','BASED'],
			['💬',''],
			['♥',''],
			['😍','PeepoJuice'],
			['⏱️','KirbDance'],
			['👍','cristianParty']
		]
	},
	{
		// moai
		name: 'moaigr',
		twitchID: 68111739, // 149287198
		booyahID: 63681555,
		chatroomID: 63325494,
		bttv: true,
		ffz: true,
		leaderboard: true,
		customBonfire: 'Tomate',
		customBonfireImage: 'https://cdn.frankerfacez.com/emoticon/531565/4',
		panels: [
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-0"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-68111739-image-674b3aa9-0282-4680-a1cc-6aad358f69e1" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxiKw sc-pscky gzUZnd tw-typeset"><div class="panel-description"><ul><li>No a la XENOFOBIA.</li><li>No SPAM.</li><li>El ":v" (en exceso).</li><li>Los Copy&amp;Paste, estan prohibidos, para no provocar desorden en el chat.</li></ul><p>NO CUMPLIR ESTO SE RECURIRA AL PERMA BAN.</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-1"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-68111739-image-be39615b-bded-4d8c-bc13-136797db0eb3" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxiKw sc-pscky gzUZnd tw-typeset"><div class="panel-description"><ul><li>Soy Moai, hago videos en Youtube.</li><li>Chileno.</li><li>Me dicen Moai, por mi cara, así de simple.</li><li>No tengo un horario organizado, así que por este momento no hay ninguna información respecto a la hora en que se levantan los streams.</li></ul></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/user/MoaiGr1"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-68111739-image-86dfc490-77d1-435b-8555-d3f2f5c99c26" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-3"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/moaigr/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-68111739-image-e1849f6f-d16c-4c51-b0ce-4456cf54d29b" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/MoaiGr"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-68111739-image-440f17dc-e714-41fa-a775-7a5f3f31bd20" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-5"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/MoaiGr/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-68111739-image-7524e2de-62de-4b97-aa94-dfee843e4a3b" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-6"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-68111739-image-21dc940e-8585-405e-8b50-2c5335ca5aae" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="sc-AxiKw sc-pscky gzUZnd tw-typeset"><div class="panel-description"><p><em>EN PROCESO</em></p></div></div></div></div>`,
			},
			{
				type: 'html',
				html: `			
				<div id="leaderboard-container" class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-1">
					<div id="table-container"></div>
				</div>`,
			},
		],
		botName: 'Moaicito',
		streamVipWords: [
			['você ainda não possui', 'Aún no tienes puntos'],
			['você possui', 'tiene'],
			['pontos', 'puntos'],
			['assistiu a live', 'ha visto el live'],
			['A live está offline. 😐', 'El directo está offline Sadge'],
			['A live está aberta há','HYPERS El directo esta online hace'],
			['Lista de comandos da live', 'HACKERMANS Lista de comandos del stream'],
			['o usuário', 'el usuario'],
			['ainda não ha visto a esse canal', 'aún no ha visto este canal'],
			['foi criado há','creó su cuenta hace'],
			['está ativo no canal há','esta activo en el canal hace'],
			['💰','CHAD'],
			['💬',''],
			['♥',''],
			['⏱️','clubPls'],
			['👍','POGGERS']
		]
	},
	{
		// dylantero
		name: 'dylanterolive',
		twitchID: 130345683, // 149287198
		booyahID: 'dylantero',
		booyahNumericID: 79330097,
		chatroomID: 78979571,
		bttv: true,
		ffz: true,
		leaderboard: true,
		offlineEmote: {
			url: 'https://static-cdn.jtvnw.net/emoticons/v2/301852035/default/dark/1.0',
			name: 'dylanteroZZZ'
		},
		panels: [
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://discord.gg/QShQVKV"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-130345683-image-0a463264-a391-4424-985d-a1f1b6b977bc" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-6"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/user/DylanteroElBronze?sub_confirmation=1"><img data-test-selector="image_test_selector" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-130345683-image-6001c25e-2b05-4c72-8982-f774c676f7b0" alt="Contenido del panel"></a></div>`,
			},
			{
				type: 'html',
				html: `			
				<div id="leaderboard-container" class="sc-AxjAm dGeTii default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-1">
					<div id="table-container"></div>
				</div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://furuishop.cl/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-130345683-image-66f45fd9-c3f3-4d0d-9918-8fe60be60975" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="sc-AxiKw QcRNp default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-3"><a data-test-selector="link_url_test_selector" class="sc-fznMAR iOxnOz tw-link" rel="noopener noreferrer" target="_blank" href="https://bit.ly/3nEwTSI"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-130345683-image-bdfc396b-ca69-42ba-b7ed-7b40a5a1db61" alt="Contenido del panel"></a></div>`,
			}
		],
		botName: 'doñasBot',
		streamVipWords: [
			['você ainda não possui', 'Aún no tienes puntos'],
			['você possui', 'tiene'],
			['pontos', 'puntos'],
			['assistiu a live', 'ha visto el live'],
			['A live está offline. 😐', 'El directo está offline Sadge'],
			['A live está aberta há','HYPERS El directo esta online hace'],
			['Lista de comandos da live', 'hackerCD Lista de comandos del stream'],
			['o usuário', 'el usuario'],
			['foi criado há','creó su cuenta hace'],
			['está ativo no canal há','esta activo en el canal hace'],
			['Loja da live','Tienda del Viejas dylanteroPlata2'],
			['foi visto pela última vez em', 'ha visto por ultima vez el live el'],
			['ainda não assistiu esse canal. 😕', 'no ha visto aún el canal :-( '],
			['às','a las'],
			['https://streamvip.app/dylantero/store','<a class="chaturl" target="__blank" href="https://streamvip.app/dylantero/store">https://streamvip.app/dylantero/store</a>'],
			['https://streamvip.app/dylantero/commands','<a class="chaturl" target="__blank" href="https://streamvip.app/dylantero/commands">https://streamvip.app/dylantero/commands</a>'],
			['💰','dylanteroStonks'],
			['💬',''],
			['♥',''],
			['😍',''],
			['😎','peepoClap'],
			['⏱️','HAPPIES'],
			['👍','TriKool']
		]
	},
	{
		name: 'latesitoo',
		twitchID: 134037766,
		booyahNumericID: 79458266,
		chatroomID: 79107365,
		bttv: true,
		ffz: true,
		offlineEmote: {
			url: 'https://static-cdn.jtvnw.net/emoticons/v2/307065645/default/dark/1.0',
			name: 'latePatata'
		},
		panels: [
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UC73AugPHBoFmdt3Dwz50iZw"><img data-test-selector="image_test_selector" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-134037766-image-bf1450ff9dc06b68-320-320.jpeg" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/late_cod"><img data-test-selector="image_test_selector" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-134037766-image-e2e904433759c602-320-320.jpeg" alt="Contenido del panel"></a></div>`,
			},
		],
	},
	{
		name: 'jaidefinichon',
		twitchID: 30610294,
		booyahNumericID: 84242197,
		chatroomID: 83906105,
		bttv: true,
		ffz: true,
		panels: [
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><img data-test-selector="image_test_selector" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-30610294-image-61aca2b16cb8c992-320-320.png" alt="Contenido del panel"><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>Estas son las reglas del chat, respetemos y no seremos baneados :D</p><ul><li><strong>No escribir en mayúsculas.</strong></li><li><strong>No poner links en el chat.</strong></li><li><strong>No Hacer Spam (repetir el mismo mensaje mas de 2 veces)</strong></li><li><strong>No insultar ni poner información privada de otras personas.</strong></li></ul><p>Pórtense bien y disfruten del Chat! ♥</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-6"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://www.eneba.com/latam/?af_id=jaidefinichon "><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-30610294-image-674900cb-c908-4d67-b55b-f1b7fd57d7f3" alt="Contenido del panel"></a></div>`,
			},
		],
	},
	,
	{
		name: 'maau',
		twitchID: 47594707,
		booyahNumericID: 78330214,
		chatroomID: 77982405,
		bttv: false,
		ffz: false,
		panels: [
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-5"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/subscription_center?add_user=maauguerrero"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-47594707-image-2dcd1b5e76dc93d7-320-320.png" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-9"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/MaauGuerrero"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-47594707-image-27480e7888e7adf6-320-320.png" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-8"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/MaauFeis/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-47594707-image-4fa8cb47fac1f0d6-320-320.png" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-11"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/maauguerrero/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-47594707-image-c677e05d99db6074-320-320.png" alt="Contenido del panel"></a></div>`,
			},
		],
	},
	{
		name: 'FilipeAstini',
		twitchID: 27026061,
		booyahID: 'astini',
		booyahNumericID: 68606205,
		chatroomID: 68184422,
		bttv: true,
		ffz: true,
		panels: [
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-3"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/filipeastini"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-27026061-image-2e395117-553a-43f8-9dc0-b26634ddffdb" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>Manda seu follow lá no twitter, quem sabe eu não te sigo de volta?</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-6"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://t.me/followmidas"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-27026061-image-d20f28c2-64a8-4b5f-833a-9a738c526b16" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>Quer fazer parte do melhor grupo de telegram do cenário? É só acessar o link.</p><p>!telegram para mais informações</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-1"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/user/filipeastini/"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-27026061-image-4ca45b0b-c06e-4e01-a4af-d0748cb7df7c" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>No meu canal do youtube você vai encontrar todo o tipo de conteúdo de dotinha, guias de heróis e coaches em primeira mão.</p><p>!herois no chat para mais informações</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://instagram.com/filipeastini"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-27026061-image-54eec0fd-8d55-4cf2-8298-c4f70fc993a5" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>Meu instagram sempre está atualizado com as novidades da live e do universo de dota. Segue lá!</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-7"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://discord.gg/midasclub"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-27026061-image-a37ba096-c98b-497c-aa6d-1961691b577c" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>Cola no nosso discord pra trocar ideia com a galera e não perder as lives.</p></div></div></div></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://streamelements.com/filipeastini/tip"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-27026061-image-5c901b35-3bc3-4760-92ac-9468616ad6a0" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>Clique aqui para dar seu donate e ajudar a live!</p><p>Caso queira me presentear com item, envie aqui: https://steamcommunity.com/tradeoffer/new/?partner=87141119&amp;token=0dampEA1</p></div></div></div></div>`,
			},
		],
	},
	{
		name: 'elmarceloc',
		twitchFakeName: 'markilokurasy',
		twitchID: 75802639,
		booyahID: 'MarkiLokuras',
		booyahNumericID: 81868670,
		chatroomID: 81522979,
		bttv: true,
		ffz: false,
		customBTTV: [
			//{ code: "Monouwu", id: "5ae0347b0af0ce6122a11663" }
		],
		customFFZ: [
			//{ name: 'monkaW', id: 214681 }
		],
		customSubsEmotes: [
			//{ id: '303892010', code: 'cristianSerotonina', url: '' }
		],
		botName: 'markiBot',
		streamVipWords: [
			['você ainda não possui', 'Aún no tienes puntos'],
			['você possui', 'tiene'],
			['pontos', 'puntos'],
			['assistiu a live', 'ha visto el live'],
			['A live está offline. 😐', 'El directo está offline'],
			['A live está aberta há','El directo esta online hace'],
			['Lista de comandos da live', 'Lista de comandos del stream'],
			['o usuário', 'el usuario'],
			['foi criado há','creó su cuenta hace'],
			['está ativo no canal há','esta activo en el canal hace'],
			['Loja da live','Tienda'],
			['foi visto pela última vez em', 'ha visto por ultima vez el live el'],
			['ainda não assistiu esse canal. 😕', 'no ha visto aún el canal :-( '],
			['às','a las'],
			['https://streamvip.app/markilokuras/store','<a class="chaturl" target="__blank" href="https://streamvip.app/markilokuras/store">https://streamvip.app/markilokuras/store</a>'],
			['https://streamvip.app/markilokuras/commands','<a class="chaturl" target="__blank" href="https://streamvip.app/markilokuras/commands">https://streamvip.app/markilokuras/commands</a>'],
			['💰',''],
			['💬',''],
			['♥',''],
			['😍',''],
			['😎',''],
			['⏱️',''],
			['👍','']
		]
	},
	{ // test channel
		name: 'aedrons_tv',
		twitchID: 134037766,
		booyahNumericID: 43379189,
		booyahID: 'aedrons',
		chatroomID: 43169259,
		bttv: true,
		ffz: true,
		panels: [
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-0"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://bit.ly/3urpJnY"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-28638761-image-1a051e94-ae11-49fe-9a9a-796a7e67bec8" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-3"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://streamelements.com/aedrons/tip"><img data-test-selector="image_test_selector" src="https://panels-images.twitch.tv/panel-28638761-image-2f4d83db-bdf2-4a8f-bfe2-e260720ae226" alt="Contenido del panel"></a><div data-test-selector="description_test_selector"><div class="Layout-sc-nxg1ff-0 ScTypeset-sc-xkayed-0 fMjjNz tw-typeset"><div class="panel-description"><p>Click acima ou no link : https://streamelements.com/aedrons/tip</p></div></div></div></div>`,
			},
		],
	},
	{ // test channel
		name: 'elmarceloc',
		twitchID: 28638761,
		booyahNumericID: 77452717,
		chatroomID: 77103915,
		bttv: true,
		ffz: true,
		panels: [
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-2"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UC73AugPHBoFmdt3Dwz50iZw"><img data-test-selector="image_test_selector" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-134037766-image-bf1450ff9dc06b68-320-320.jpeg" alt="Contenido del panel"></a></div>`,
			},
			{
				type: "html",
				html: `<div class="Layout-sc-nxg1ff-0 ljMhJH default-panel" data-test-selector="channel_panel_test_selector" data-a-target="panel-4"><a data-test-selector="link_url_test_selector" class="ScCoreLink-sc-udwpw5-0 jxwNWA tw-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/late_cod"><img data-test-selector="image_test_selector" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-134037766-image-e2e904433759c602-320-320.jpeg" alt="Contenido del panel"></a></div>`,
			},
		],
	}
];

var twitchEmotes = [
	// https://twitchemotes.com

	{ id: '425618', name: 'LUL' },
	{ id: '160404', name: 'TehePelo' },
	{ id: '120232', name: 'TriHard' },
	{ id: '114836', name: 'Jebaited' },
	{ id: '84608', name: 'cmonBruh' },
	{ id: '81248', name: 'OSFrog' },
	{ id: '58765', name: 'NotLikeThis' },
	{ id: '55338', name: 'KappaPride' },
	{ id: '28087', name: 'WutFace' },
	{ id: '27602', name: 'BuddhaBar' },
	{ id: '22639', name: 'BabyRage' },
	{ id: '3792', name: 'ANELE' },
	{ id: '86', name: 'BibleThump' },
	{ id: '69', name: 'BloodTrail' },
	{ id: '41', name: 'Kreygasm' },
	{ id: '25', name: 'Kappa' },
	{ id: '1902', name: 'Keepo' },
	{ id: '461298', name: 'DarkMode' },
	{ id: '245', name: 'ResidentSleeper' },
	{ id: '114856', name: 'UncleNox' },

	{ id: '46', name: "SSSsss", scaped: true },
	{ id: '47', name: "PunchTrees", scaped: true },
	{ id: '28', name: "MrDestructoid", scaped: true },
	{ id: '191762', name: "Squid1", scaped: true },
	{ id: '191763', name: "Squid2", scaped: true },
	{ id: '191764', name: "Squid3", scaped: true },
	{ id: '191767', name: "Squid4", scaped: true },

	
	{ id: '555555579', name: '8-)', scaped: true },
	{ id: '2', name: ':(', scaped: true },
	{ id: '1', name: ':)', scaped: true },
	{ id: '555555559', name: ':-(', scaped: true },
	{ id: '555555557', name: ':-)', scaped: true },
	{ id: '555555586', name: ':-/', scaped: true },
	{ id: '555555561', name: ':-D', scaped: true },
	{ id: '555555581', name: ':-O', scaped: true },
	{ id: '555555592', name: ':-P', scaped: true },
	{ id: '555555568', name: ':-Z', scaped: true },
	{ id: '555555588', name: ":-\\", scaped: true },
	{ id: '555555583', name: ":-o", scaped: true },


];

// forsenE, etc
var booyahtvEmotes = [
	{ url: 'https://zzls.xyz/booyah.tv/1x.png', name: 'YEAHBUTBOOYAHTV' },
	{ url: 'https://cdn.betterttv.net/emote/604f8eac306b602acc59d6d2/1x', name: 'forsenBased' },

	{ id: '521050', name: 'forsenE' },
	{ id: '116051', name: 'forsen1' },
	{ id: '116052', name: 'forsen2' },
	{ id: 'emotesv2_2f9a36844b054423833c817b5f8d4225', name: 'forsenPls' },
	 
];

var imageBadges = [
	{
		title: 'Moderador',
		subtitle: '',
		original: 'medal.85ed3418',
		new: '3267646d-33f0-4b17-b3df-f923a41db1d0',
		alternative: 'https://cdn.betterttv.net/emote/61542fcfb63cc97ee6d3df83/3x'
	},
	{
		title: 'Streamer',
		subtitle: '',
		original: 'crown.deccbcb4',
		new: '5527c58c-fb7d-422d-b71b-f309dcb85cc1',
	},
	{
		title: 'Donador',
		subtitle: '',
		original: 'badge-gift-normal.5655cf1b',
		new: '47308ed4-c979-4f3f-ad20-35a8ab76d85d',
	},
	{
		title: 'Donador',
		subtitle: 'Top #1',
		original: 'badge-gift-no1.5c07a903',
		new: 'f440decb-7468-4bf9-8666-98ba74f6eab5',
	},
	{
		title: 'Donador',
		subtitle: 'Top #2',
		original: 'badge-gift-no2.472e6f12',
		new: '3e638e02-b765-4070-81bd-a73d1ae34965',
	},
	,{
		title: 'Donador',
		subtitle: 'Top #3',
		original: 'badge-gift-no3.918bfd01',
		new: '5056c366-7299-4b3c-a15a-a18573650bfb',
	}
	,{
		title: 'Verificado',
		subtitle: '',
		original: 'verified-streamer.4597e270',
		new: 'd12a2e27-16f6-41d0-ab77-b780518f00a3',
		alternative: 'https://cdn.betterttv.net/emote/61542fccb63cc97ee6d3df7e/3x'
	}
]

var zerowidthEmotes = [
	"SoSnowy",  "IceCold",   "SantaHat", "TopHat",
    "ReinDeer", "CandyCane", "cvMask",   "cvHazmat",
]

var zerowidthHatEmotes = [
	'Chupalla','Gorro'
]



var channelSubsEmotes = []
var channelBadges = []
var bttvGlobalEmotes = [];
var bttvChannelEmotes = [];
var sevenTvChannelEmotes = []
var frankerFaceZ = [];
var channelBooyahtvBadges = []

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
// chars: ո, р, с
const censoredWords = [
	['puta','рuta'],
	['puto','рuto'],
	['PUTA', 'PUTΑ'],
	['PUT4', 'PUTΑ'],
	['COCK', 'CΟCK'],
	['PUS', 'РUS'],
	['pus', 'рus'],
	['VAGINA', 'VΑGINA'],
	['vagina', 'ꮩagina'],
	['FORNICAR', 'FORNICΑR'],
	['fornicar', 'forոicar'],
	['penis', 'рenis'],
	['dick', 'diсk']
]

// original url regex

const youtubeRegex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g
const twitchClipsRegex = /(?:https:\/\/)?clips\.twitch\.tv\/(\S+)/g;
const tweetRegex = /https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/g;
const imgurRegex = /(http|https):\/\/?(.)imgur.com(.)([^\s]+)/g;
const instagramRegex = /(https?:\/\/(?:www\.)?instagram\.com\/([^/?#&]+))(.)([^\s]+)/g;
const lighshootRegex = /(http|https):\/\/?(.)prnt.sc(.)([^\s]+)/g;
const mercadolibrechileRegex = /(http|https):\/\/?(.)(?:www\.)?articulo.mercadolibre.cl(.)([^\s]+)/g;
const amazonRegex = /(http|https):\/\/?(.)www.amazon.com(.)([^\s]+)/g;
const aliexpressRegex = /(?:https:\/\/)?(es|cl)\.aliexpress\.com\/(\S+)/g;
const clipsRegex = /(?:https:\/\/)?streamvip\.app\/clips\/(\S+)/g;
const garticphoneRegex = /(?:https:\/\/)?garticphone\.com(\S+)/g;

// prefix regex

const youtubePrefixRegex = /yt=(.){11}/g
const twitchPrefixClipsRegex = /twclip=(.)([^\s]+)/g
const tweetPrefixRegex = /tweet=(.)([^\s]+)/g
const imgurPrefixRegex = /imgur=(.)([^\s]+)/g
const instagramPrefixRegex = /ig=(.)([^\s]+)/g
const lighshootPrefixRegex = /ls=(.)([^\s]+)/g
const mercadolibrechilePrefixRegex = /ml=(.)([^\s]+)/g
const amazonPrefixRegex = /az=(.)([^\s]+)/g
const aliexpressPrefixRegex = /ae=(.)([^\s]+)/g
const clipsPrefixRegex = /sv=(.)([^\s]+)/g
const garticphonePrefixRegex = /gp=(.)([^\s]+)/g

const tagRegex = /(?<![\w@])@([\w@]+(?:[.!][\w@]+)*)/g;

const botName = 'StreamVip'

const emoteBanList = ['DatSauce', 'TaxiBro', 'FireSpeed', 'KaRappa', 'sosGame','ariW',
					  'VapeNation','WatChuSay','TwaT','tehPoleCat','RonSmug', 'FishMoley',
					  'Hhhehehe','CruW','notsquishY','BroBalt', 'HailHelix','M&Mjc']

var checkEmotesInterval;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// Escapes a regex string

function escapeRegex(string) {
	return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}



function getColorByNickname(nickname){
    
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

	var hash = nickname.charCodeAt(0);

	var color = "#6525a1";
	
	for (let i = 0; i < colors.length; i++) {
		if (hash % i === 0) {
			color = colors[i];
		}
	}

	return color
}

function isBTTV(url) {
	const { hostname, pathname } = new URL(url);

	const isDomain = hostname.includes('betterttv.com')
	const isEmote = pathname.length == 32 

	return isDomain && isEmote
}

function isFFZ(url) {
	const { hostname, pathname } = new URL(url);

	const isDomain = hostname.includes('frankerfacez.com')
	const isEmote = pathname.includes('emoticon') && pathname.includes('-')

	return isDomain && isEmote
}

function getBTTVId(url) {
	const id = url.split('emotes/')[1]

	return id
}


function getFFZId(url) {
	const id = url.split('emoticon/')[1].split('-')[0]

	return id
}

function getEmote(url) {
	var id;
	var source;

	try {
		new URL(url);
	} catch (_) {
		return false;  
	}

	if (isBTTV(url)){
		id = getBTTVId(url)
		source = 'bttv'
	}else if(isFFZ(url)){
		id = getFFZId(url)
		source = 'ffz'
	}else{
		return false
	}

	return {
		id: id,
		source: source,
	};
}




function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}

// crea el <a href="url"> url </a>

function createAnchor(msg, urlparam, domain, prefixSize, posturl = '') {
	let url =  urlparam.substring(prefixSize)
	
	return replaceAll(msg,urlparam, `<a class="chaturl" rel="chaturl" data-source="${domain}" target="__blank" href="${domain}/${url}${posturl}">${domain}/${url}${posturl}</a>`)
}

// Reemplaces the urls in the chatbox with a non-censurated version of it.

// Replaces all the prefixed-urls in the chat 
// generated by the "replaceURLSinTextarea" function
// by its corresponding anchor

function replaceURLS(msg) {

	// youtube

	if (msg.match(youtubePrefixRegex) !== null){ 
		msg.match(youtubePrefixRegex).forEach((youtubeURL) => {
			msg = createAnchor(msg, youtubeURL, 'https://youtu.be' ,3)
		});
	}

	// twitch clips

	if (msg.match(twitchPrefixClipsRegex) !== null){ 
		msg.match(twitchPrefixClipsRegex).forEach((clipURL) => {
			msg = createAnchor(msg, clipURL, 'https://clips.twitch.tv' ,7)
		});
	}

	// tweet

	if (msg.match(tweetPrefixRegex) !== null){ 
		msg.match(tweetPrefixRegex).forEach((tweetURL) => {
			msg = createAnchor(msg, tweetURL, 'https://twitter.com' ,6)
		});
	}

	// imgur

	if (msg.match(imgurPrefixRegex) !== null){ 
		msg.match(imgurPrefixRegex).forEach((imgurURL) => {
			msg = createAnchor(msg, imgurURL, 'https://imgur.com' ,6)
		});
	}

	// instagram

	if (msg.match(instagramPrefixRegex) !== null){ 
		msg.match(instagramPrefixRegex).forEach((instagramURL) => {
			msg = createAnchor(msg, instagramURL, 'https://www.instagram.com' ,3)
		});
	}

	// lightshoot

	if (msg.match(lighshootPrefixRegex) !== null){ 
		msg.match(lighshootPrefixRegex).forEach((lighshootURL) => {
			msg = createAnchor(msg, lighshootURL, 'https://prnt.sc' ,3)
		});
	}

	// mercado libre chile

	if (msg.match(mercadolibrechilePrefixRegex) !== null){ 
		msg.match(mercadolibrechilePrefixRegex).forEach((mercadolibrechileURL) => {
			msg = createAnchor(msg, mercadolibrechileURL, 'https://articulo.mercadolibre.cl' ,3)
		});
	}

	// amazon

	if (msg.match(amazonPrefixRegex) !== null){ 
		msg.match(amazonPrefixRegex).forEach((amazonURL) => {
			msg = createAnchor(msg, amazonURL, 'https://www.amazon.com' ,3)
		});
	}

	// aliexpress es/cl

	if (msg.match(aliexpressPrefixRegex) !== null){ 
		msg.match(aliexpressPrefixRegex).forEach((aliexpressURL) => {
			msg = createAnchor(msg, aliexpressURL, 'https://cl.aliexpress.com' ,3,'.html')
		});
	}

	// streamvip clips

	if (msg.match(clipsPrefixRegex) !== null){ 
		msg.match(clipsPrefixRegex).forEach((clipURL) => {
			msg = createAnchor(msg, clipURL, 'https://streamvip.app/clips' ,3)
		});
	}

	// gartic phone

	if (msg.match(garticphonePrefixRegex) !== null){ 
		msg.match(garticphonePrefixRegex).forEach((garticURL) => {
			msg = createAnchor(msg, garticURL, 'https://garticphone.com' ,3)
		});
	}

	return msg
}



// find and replace all instances of an emote given the message and a regex rule.

function replaceEmote(msg, regex, url, fullurl, title, from) {

	let zerowidth = ''

	if (zerowidthEmotes.includes(title)) zerowidth = 'zero-width'
	if (zerowidthHatEmotes.includes(title)) zerowidth = 'zero-width-hat'
	 
	var src = url

	if (isPopup) src = fullurl
	
	return msg.replace(
		regex,
		`<img title="${title}" class='emote in-chat-emote ${zerowidth}' rel="emote" src='${src}' data-fullemote="${fullurl}" data-from="${from}">`
	);
}

// remplaces all bettertTTV and frankerFaceZ emotes in a message.

function replaceEmotes(msg) {
	// TWITCH EMOTES

	for (let i = 0; i < twitchEmotes.length; i++) {
		let regex = ''

		if (twitchEmotes[i].scaped) {
			regex = escapeRegex(twitchEmotes[i].name)
		} else {
			regex = "\\b" + twitchEmotes[i].name + "\\b"
		}

		regex = new RegExp(regex, "g"); // use scaped if exists

		let url = `https://static-cdn.jtvnw.net/emoticons/v2/${twitchEmotes[i].id}/default/dark/1.0`;
		let fullurl = `https://static-cdn.jtvnw.net/emoticons/v2/${twitchEmotes[i].id}/default/dark/4.0`;

		msg = replaceEmote(msg, regex, url, fullurl, twitchEmotes[i].name, 'Twitch');
	}

	// GLOBAL CHANNEL EMOTES

	for (let i = 0; i < booyahtvEmotes.length; i++) {
		let regex = new RegExp("\\b" + booyahtvEmotes[i].name + "\\b", "g");
		let url = ''
		let fullurl = ''

		if (booyahtvEmotes[i].url) {
			url = booyahtvEmotes[i].url
			fullurl = booyahtvEmotes[i].url
		} else {
			url = `https://static-cdn.jtvnw.net/emoticons/v2/${booyahtvEmotes[i].id}/default/dark/1.0`;
			fullurl = `https://static-cdn.jtvnw.net/emoticons/v2/${booyahtvEmotes[i].id}/default/dark/4.0`;
		}
		msg = replaceEmote(msg, regex, url, fullurl, booyahtvEmotes[i].name, 'Booyah TV');
	}


	// SUB EMOTES

	if (channelSubsEmotes) {
		for (let i = 0; i < channelSubsEmotes.length; i++) {
			let regex = new RegExp("\\b" + channelSubsEmotes[i].code + "\\b", "g");
			let url = ''
			let fullurl = ''

			if (channelSubsEmotes[i].url) {
				url = channelSubsEmotes[i].url
				fullurl = channelSubsEmotes[i].url
			} else {
				url = `https://static-cdn.jtvnw.net/emoticons/v2/${channelSubsEmotes[i].id}/default/dark/1.0`;
				fullurl = `https://static-cdn.jtvnw.net/emoticons/v2/${channelSubsEmotes[i].id}/default/dark/4.0`;
			}

			msg = replaceEmote(msg, regex, url, fullurl, channelSubsEmotes[i].code, 'Subscriptor');
		}
	}

	// BETTER TTV GLOBAL EMOTES
	
	if (channel.bttv) {

		for (let i = 0; i < bttvGlobalEmotes.length; i++) {
			let regex = new RegExp("\\b" + bttvGlobalEmotes[i].code + "\\b", "g");
			let url = `https://cdn.betterttv.net/emote/${bttvGlobalEmotes[i].id}/1x`;
			let fullurl = `https://cdn.betterttv.net/emote/${bttvGlobalEmotes[i].id}/3x`;

			msg = replaceEmote(msg, regex, url, fullurl, bttvGlobalEmotes[i].code, 'Better TTV');
		}
	}

	// BETTER TTV CHANNEL EMOTES

	if(channel && channel.bttv){ 

		for (let i = 0; i < bttvChannelEmotes.length; i++) {
			let regex = new RegExp("\\b" + bttvChannelEmotes[i].code + "\\b", "g");
			let url = `https://cdn.betterttv.net/emote/${bttvChannelEmotes[i].id}/1x`;
			let fullurl = `https://cdn.betterttv.net/emote/${bttvChannelEmotes[i].id}/3x`;

			msg = replaceEmote(msg, regex, url, fullurl, bttvChannelEmotes[i].code, 'Better TTV');
		}
	}

	// FRANKER FACE Z EMOTES
	if (channel && channel.ffz) {

		for (let i = 0; i < frankerFaceZ.length; i++) {
			let regex = new RegExp("\\b" + frankerFaceZ[i].name + "\\b", "g");
			let url = `https://cdn.frankerfacez.com/emote/${frankerFaceZ[i].id}/1`;
			let fullurl = `https://cdn.frankerfacez.com/emote/${frankerFaceZ[i].id}/4`;

			msg = replaceEmote(msg, regex, url, fullurl, frankerFaceZ[i].name, 'Franker Face Z');
		}
	}

	// SEVEN 7V CHANNEL EMOTES


	for (let i = 0; i < sevenTvChannelEmotes.length; i++) {
		let regex = new RegExp("\\b" + sevenTvChannelEmotes[i].name + "\\b", "g");
		let url = `https://cdn.7tv.app/emote/${sevenTvChannelEmotes[i].id}/1x`;
		let fullurl = `https://cdn.7tv.app/emote/${sevenTvChannelEmotes[i].id}/3x`;

		msg = replaceEmote(msg, regex, url, fullurl, sevenTvChannelEmotes[i].name, '7 TV');
	}

	return msg;
}

function translateStreamVip(username, messageElement){
	if (username.innerHTML !== botName) return

	username.innerHTML = channel.botName

	channel.streamVipWords.forEach(word => {
		messageElement.innerHTML = messageElement.innerHTML.replace(word[0], word[1])
	})

}

function addBadgeHTML(container, user){

	if (user.badge){
		if (user.badge_source == 'bttv'){
			user.url = 'https://cdn.betterttv.net/emote/'+user.badge+'/1x'
			user.fullurl = 'https://cdn.betterttv.net/emote/'+user.badge+'/3x'

		}else if(user.badge_source == 'ffz'){
			user.url = 'https://cdn.frankerfacez.com/emoticon/'+user.badge+'/1'
			user.fullurl = 'https://cdn.frankerfacez.com/emoticon/'+user.badge+'/4'
			
		}
	}

	var src = user.url

	if (isPopup) src = user.fullurl

	const badgeHTML = `<img title="${user.title}" src="${src}" class="btv-badge" data-subtitle="${user.subtitle}" data-fullimage="${user.fullurl}" rel="badge">`
	$(container).prepend(badgeHTML); 
}

function addBadges(usernameContainer, username) {
	
	// change channel badges
	
	$(usernameContainer).find('.badge-icon').each(function( index ) {

		imageBadges.forEach(badge => {
			if($( this )[0].src.includes(badge.original)){
				$( this )[0].classList.add('btv-badge') 
				$( this )[0].setAttribute('title',badge.title) 
				$( this )[0].setAttribute('data-subtitle',badge.subtitle) 
				if (badge.alternative){
					$( this )[0].src = badge.alternative
					$( this )[0].setAttribute('data-fullimage',badge.alternative) 
				}else{
					$( this )[0].src = 'https://static-cdn.jtvnw.net/badges/v1/'+badge.new+'/1'
					$( this )[0].setAttribute('data-fullimage','https://static-cdn.jtvnw.net/badges/v1/'+badge.new+'/3') 
				}

			}
		})

		if($( this )[0].src == 'https://cdnmambet-a.akamaihd.net/booyah/build/pc/static/media/medal.85ed3418.png'){
			$( this )[0].src = 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1'
		}
	  });
	
	// staff badge
	/*if (username.innerText == 'elmarceloc') {
		var staffBadge = `<img title="Staff" src="https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1" class="btv-badge" data-subtitle="Booyah.tv dev" data-fullimage="https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/3" rel="badge">`
		$(usernameContainer).prepend(staffBadge); 
	}*/

	if (username == null) return

	var booyahtvUser = channelBooyahtvBadges[username.innerText]

	// adds the badge
	if (booyahtvUser != null) {
		// if the user has multiple badges (array)
		if(Array.isArray(booyahtvUser)){
			booyahtvUser.forEach(user => {
				addBadgeHTML(usernameContainer, user)
			})
		}else{
			addBadgeHTML(usernameContainer, booyahtvUser)
		}
	}	
	// fix
	if (typeof hashedPoints !== 'undefined'){

		var user = hashedPoints[username.innerText.toLowerCase()]
		
		if (user != null) {
			// adds the badge
			var src = channelBadges[user[0]].image_url_1x

			if (isPopup) src = channelBadges[user[0]].image_url_4x

			const badgeHTML = `<img title="Top #${user[1]}" src="${src}" class="btv-badge" data-subtitle="${user[2]} Puntos." data-fullimage="${channelBadges[user[0]].image_url_4x}" rel="badge">`
			$(usernameContainer).prepend(badgeHTML); 
		}	
	}

}

function changeUsernameColor(username) {

	if (username === null) return

	var color = "#6525a1";

	var hash = username.innerText.charCodeAt(0);

	
	for (let i = 0; i < colors.length; i++) {
		if (hash % i === 0) {
			color = colors[i];
		}
	}

	var booyahtvUser = channelBooyahtvBadges[username.innerText]

	// adds the color to donator
	console.log(channelBooyahtvBadges)

	if (booyahtvUser != null) {
		// if the user has multiple badges (array)
		if(Array.isArray(booyahtvUser)){
			booyahtvUser.forEach(user => {
				if (user.color) {
					color = user.color
				}
			})
		}else{
			if (booyahtvUser.color) {
				console.log('color found',booyahtvUser.color)
				color = booyahtvUser.color
			}
		}
	}	


	

	username.style.color = color;
}

// Acorta los nombres de usuario muy largo
function shortenUsernames(username) {

	if (username === null) return


	if(username.textContent.length > maxLenghtUsername) {
		username.textContent = username.textContent.substr(0,maxLenghtUsername)
	}

}

function replaceBonfires(message) {
	if(channel.customBonfire){	
		if(message.innerText.includes('Fogata')){
			message.innerHTML = message.innerHTML.replace('Fogata', channel.customBonfire);

			if (channel.customBonfireImage) {
				var image = message.getElementsByClassName("message-gift-icon")[0];
				image.src = channel.customBonfireImage
			}
		}
	}
}

// remplace all emotes in message (bttv, ffz, D:,etc) with an image

function addEmotes(objective) {

	// reemplace the emote code with his corresponding code

	$(objective)
		.not(":has(img)")
		.each(function() {
			var msg = $(this).html();

			msg = replaceEmote(msg, new RegExp("( |^)" + "&lt;3" + "\\b(?!&lt;3)", "g"), "https://static-cdn.jtvnw.net/emoticons/v1/9/1.0", "https://static-cdn.jtvnw.net/emoticons/v1/9/4.0", "<3","Twitch"); // harth <3			
			msg = replaceEmote(msg, new RegExp("\\b" + "D:" + "( |$)", "g"), "https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/1x", "https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/3x","D:","Better TTV"); // D:
			msg = replaceEmote(msg, new RegExp(":tf:", "g"), "https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/1x","https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/3x", ":tf:","Better TTV"); // :tf:

			msg = replaceEmotes(msg); // replace all twitch, sub emotes, betterttv and franker face z emotes
			msg = replaceURLS(msg) // replaces all the urls
			//console.log('[result] ',msg)

			$(this).html(msg);
		});
}

function modifyMessage(event) {
	// modify the message and username if the message is from an user
	for (var j = 0; j < event.target.childNodes.length; j++) {
		var message = event.target.childNodes[j];

		if(!message.childNodes[0]) return

		var messageContainer = message.childNodes[0] // Marcelo: hola

		var usernameContainer = messageContainer.childNodes[0]; // username container, includes badges
		var usernameElement = usernameContainer.childNodes[usernameContainer.childNodes.length - 1]; // EX: <span> elmarceloc: </span>

		var messageText = messageContainer.childNodes[messageContainer.childNodes.length - 1] // EX: <span> hola </span>

		/*console.log('messageContainer:',messageContainer)

		console.log('usernameContainer:',usernameContainer)
		console.log('usernameElement:',usernameElement)
		console.log('messageText:',messageText)*/

		replaceBonfires(message)

		copyMessage(message, messageText.innerHTML)
		
		if (channel.streamVipWords){
			translateStreamVip(usernameElement, messageText)
		}
		
		addBadges(usernameContainer, usernameElement)

		checkTag(event, messageText.innerHTML,usernameContainer,usernameElement, messageContainer)

		changeUsernameColor(usernameElement)

		shortenUsernames(usernameElement)


		addEmotes(messageText);
	}
}

function isEmpty(obj) {
	for(var prop in obj) {
	  if(obj.hasOwnProperty(prop)) {
		return false;
	  }
	}
  
	return JSON.stringify(obj) === JSON.stringify({});
}

function autoclickNewMessage(){
  

	var interval;

	// Cuando salimos del chat, activamos el auto clicker
	$(document).mouseleave(function () {

		interval = setInterval(function () {
				// si esta visible el boton de "nuevo mensaje"....
				if($('.btn-new-message').hasClass( "show" )){
					$('.btn-new-message').click() // lo clickeamos
				}

		},500)

	});

	// al entrar al chat, lo desactivamos
	$(document).mouseenter(function () {
		clearInterval(interval)
	});
	
}

function replace_srcset(target, replacement)
{
    // Search for the target
    $('source[srcset="'+target+'"]').attr('srcset', replacement);
}


function initExtension() {
	var currentURL = 'cristianghost'

	if (currentURL.includes('vods')) {
		// TODO: show loading overlay
	}


	setTimeout(function() {
		if (currentURL.includes('vods')) {
			insertVOD(currentURL)
		}
	}, 3000);

	// delates the panels
	var panels = document.getElementsByClassName('default-panel');

	while (panels[0]) {
		panels[0].parentNode.removeChild(panels[0]);
	}


	console.log("[BOOYAH.TV] CURRENT URL: " + currentURL)

	channels.forEach((currentChannel) => {
		// check if user is in channel or its chatroom (popup)
		if (!(currentURL.includes(currentChannel.booyahID) 
			|| currentURL.includes(currentChannel.booyahNumericID) 
			|| currentURL.includes(currentChannel.chatroomID))) return;

		channel = currentChannel
		isPopup = currentURL.includes(currentChannel.chatroomID)

		
		console.log("[BOOYAH.TV] You are in " + currentChannel.booyahID + " Channel.");
		console.log("[BOOYAH.TV] IS POPUP: "+ isPopup);

		console.log("[BOOYAH.TV] fetching betterttv for channel: ", betterTTVChannelBaseURL + currentChannel.twitchID);
		console.log("[BOOYAH.TV] fetching frankerFaceZ for channel: ", frankerfaceZChannelBaseURL + currentChannel.twitchID);

		Promise.all([
				fetch(globalBetterttvURL).then((value) => value.json()),
				fetch(globalBooyahtvURL).then((value) => value.json()),
		
				fetch(betterTTVChannelBaseURL + currentChannel.twitchID).then((value) => value.json()),
				fetch(frankerfaceZChannelBaseURL + currentChannel.twitchID).then((value) => value.json()),
				fetch(subsEmotesBaseURL + currentChannel.name).then((value) => value.json() ),
				fetch(badgesBaseURL + currentChannel.twitchID + '/display').then((value) => value.json() ),
				fetch(booyahApiBaseURL + 'emotes/' + channel.name).then((value) => value.json() ),
			])
			.then(([globalBetterttv, globalBooyahtv, channelBetterttv, channelFrankerfaceZ, subsEmotes, badges, apiEmotes]) => {
				// limiamos los emotes para que no se junten con los de otro streamer

				bttvGlobalEmotes = []
				frankerFaceZ = []
				bttvChannelEmotes = []
				channelSubsEmotes = []
				sevenTvChannelEmotes = []
				channelBadges = []
				//channelBooyahtvBadges = []

				
				// guardamos los emotes globales de bttv
				bttvGlobalEmotes = globalBetterttv

				// agregamos los emotes del canal "booyah__tv"
				bttvGlobalEmotes = bttvGlobalEmotes.concat(globalBooyahtv.sharedEmotes)
				bttvGlobalEmotes = bttvGlobalEmotes.concat(globalBooyahtv.channelEmotes)

				bttvGlobalEmotes = bttvGlobalEmotes.filter(emote => {
					return !emoteBanList.includes(emote.code)
				})
				

				// cargamos los emotes del canal (bttv)
				if (channelBetterttv.channelEmotes) {

					// añadimos los emotes de de canal de better ttv
					bttvChannelEmotes = channelBetterttv.channelEmotes

					// luevgo añadimos los emotes compartidos con otros canales, con al condicion
					// de que no se este en los emotes del canal

					for (let i = 0; i < channelBetterttv.sharedEmotes.length; i++) {
						var exists = false

						for (let j = 0; j < channelBetterttv.channelEmotes.length; j++) {
							if(channelBetterttv.sharedEmotes[i].code == channelBetterttv.channelEmotes[j].code){
								exists = true
							}
						}
						// si no esta repetido el emote, lo agregamos al arreglo de emotes de canal
						if(!exists){
							bttvChannelEmotes.push(channelBetterttv.sharedEmotes[i])
						}
					}
				}

				// cargamos los emotes del canal (ffz)

				if (channelFrankerfaceZ.status != 404) {
					
					frankerFaceZ = frankerFaceZ.concat(channelFrankerfaceZ.sets[Object.keys(channelFrankerfaceZ.sets)[0]].emoticons);

					// quitamos los emotes que ya estan en bttv

					frankerFaceZ = frankerFaceZ.filter(ffzEmote => {
						return !bttvGlobalEmotes.some((bttvEmote) => bttvEmote.code == ffzEmote.name);  
					})

					frankerFaceZ = frankerFaceZ.filter(ffzEmote => {
						return !bttvChannelEmotes.some((bttvEmote) => bttvEmote.code == ffzEmote.name);  
					})

				}

				if(subsEmotes.subEmotes.length > 0 ){
					channelSubsEmotes = subsEmotes.subEmotes[0].emotes
				}
				
				if(badges && badges.badge_sets){
					if(!isEmpty(badges.badge_sets)){

						// iterates trow every badge object and adds it to the channelBadges array
						for (var id in badges.badge_sets.subscriber.versions) {
							if (badges.badge_sets.subscriber.versions.hasOwnProperty(id)) {
								
								channelBadges.push(badges.badge_sets.subscriber.versions[id])
							}
						}

						// inverts the array for a rank-like style
						channelBadges = channelBadges.reverse()
					}
				}

				// custom emotes

				if(channel.customBTTV){
					bttvChannelEmotes = bttvChannelEmotes.concat(channel.customBTTV);
				}

				if(channel.customFFZ){
					frankerFaceZ = frankerFaceZ.concat(channel.customFFZ);
				}

				if(channel.customSubsEmotes){
					channelSubsEmotes = channelSubsEmotes.concat(channel.customSubsEmotes);
				}


				if(apiEmotes){

					apiEmotes.emotes.forEach(emote =>{
						switch (emote.source) {
							case 'bttv':

								delete Object.assign(emote, {['code']: emote['name'] })[name];

								bttvChannelEmotes.push(emote);

								break;
							case 'sub':
								delete Object.assign(emote, {['code']: emote['name'] })[name];
								emote.url = `https://cdn.betterttv.net/emote/`+emote.id+`/1x`
								
								channelSubsEmotes.push(emote);

								break;						
							case 'ffz':
								frankerFaceZ.push(emote);

								break;
							case '7tv':
								sevenTvChannelEmotes.push(emote);

							break;
						}
					})
				}


				console.log("[BOOYAH.TV] subsEmotes: ", channelSubsEmotes);
				console.log("[BOOYAH.TV] channelBadges: ", channelBadges);
				console.log("[BOOYAH.TV] channelBooyahtvBadges: ", channelBooyahtvBadges);
				console.log("[BOOYAH.TV] frankerFaceZ: ", frankerFaceZ);
				console.log("[BOOYAH.TV] bttvGlobalEmotes: ", bttvGlobalEmotes);
				console.log("[BOOYAH.TV] bttvChannelEmotes: ", bttvChannelEmotes);
				console.log("[BOOYAH.TV] sevenTvChannelEmotes: ", sevenTvChannelEmotes);

				
				// remplasa el icono de las fogatas por uno custom

				if(channel.customBonfire){
					
					if ($('.views-channel-gift-icon').first().length) {
						$('.views-channel-gift-icon').click(function(){
							setTimeout(function(){
								
								$('.gift-name').each(function(){
									if($(this).text() == 'Fogata'){
										$(this).text(channel.customBonfire)	
									}
								});

								$('.gift-icon').each(function(){
									if($(this).attr('src') == 'https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Gift/346c389a-89b2-4091-8647-7155a9dfe5f8.png') {
										$(this).attr('src', channel.customBonfireImage)	
										replace_srcset('https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Gift/346c389a-89b2-4091-8647-7155a9dfe5f8.png', channel.customBonfireImage);
									}
									
								})
							},50)
						})
					}
				}
									      
        // autoclicks new message icon
        if(currentURL.includes(currentChannel.chatroomID)){
          autoclickNewMessage()
        }

        document.getElementsByClassName("scroll-container")[0].addEventListener("DOMNodeInserted", modifyMessage, true);

				// si el usuario tiene activa la tabla de posisiones (streamVip)
				if(channel.leaderboard){
					// fogatas
				/*	fetch(booyahApiBaseURL + 'bonfires/' + channel.name)
						.then(value => value.json())
						.then(bonfires => {
							userBonfires = bonfires
						})	*/
					// puntos
					fetch(booyahApiBaseURL + 'points/' + channel.name)
						.then(value => value.json())
						.then(points => {
							
							userPoints = points

							hashedPoints = []

							userPoints.map(user => {
								var rank = user[0].replace('#','')

								badge = Math.floor(rank * channelBadges.length / 498)
					
								if(badge >= channelBadges.length-1) badge = channelBadges.length-1

								hashedPoints[user[1].toLowerCase()] = [badge, rank, user[3]]

							})

							console.log(hashedPoints)
	
						})
					}
				})

		.catch((err) => {
			console.log(err);
		});
	});
}

// //init estension when the page is first loaded

initExtension();
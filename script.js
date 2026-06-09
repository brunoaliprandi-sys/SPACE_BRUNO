const BACKDROP_SIZE = {
  width: 1672,
  height: 941,
};

const STASIS_RECT = {
  x: 708,
  y: 162,
  width: 248,
  height: 594,
};

const ROBOT_FLOOR_BAND = {
  top: 724,
  bottom: 930,
};

const CHARACTER_FRAME_RATE = 12;
const CHARACTER_PROFILES = {
  bruno: {
    name: "Bruno",
    roomLabel: "BRUNO / STASIS",
    frameBasePath: "animazioni/Bruno/IDLE_stasi_criogenica",
    frameCount: 37,
    alt: "Bruno in animazione idle all'interno della cella criogenica",
  },
  donatella: {
    name: "Donatella",
    roomLabel: "DONATELLA / STASIS",
    frameBasePath: "animazioni/Donatella/IDLE_stasi_criogenica",
    frameCount: 36,
    alt: "Donatella in animazione idle all'interno della cella criogenica",
  },
  alieno: {
    name: "Alieno 1",
    roomLabel: "ALIENO 1 / STASIS",
    frameBasePath: "animazioni/Alieno_1/Idle",
    frameCount: 36,
    alt: "Alieno 1 in animazione idle all'interno della cella criogenica",
  },
};
const CHARACTER_DOSSIERS = {
  bruno: {
    triggerLabel: "Bio Bruno",
    triggerHint: "DOSSIER FOLGORE",
    eyebrow: "MISSION DOSSIER / FOLGORE ASSAULT UNIT",
    title: "Bruno / Unità d'Urto Orbitale",
    image: "animazioni/Bruno/IDLE_stasi_criogenica/frame_0000.png",
    bio: [
      "Bruno è il martello della missione: un operatore da combattimento spaziale addestrato dalla Folgore per abbordaggi, contenimento rapido e guerra nei corridoi pressurizzati. Dove gli altri vedono una paratia, lui vede copertura; dove gli altri sentono un rumore, lui calcola traiettoria, distanza e tempo di reazione.",
      "Il suo profilo operativo registra impianti muscolari da accelerazione, tolleranza estrema allo stress e un archivio di interventi in ambienti ostili che va dai relitti minerari alle stazioni in blackout. In parole semplici: se qualcosa esce dalla cella, Bruno è la linea di confine tra l'equipaggio e il panico.",
    ],
    log: [
      "Registro personale 07. Non mi piace il carico. Le letture restano pulite ma la nave reagisce alla sua presenza come se se ne accorgesse prima dei sensori: vibrazioni secche, silenzi troppo lunghi, riflessi che sembrano spostarsi un istante in ritardo.",
      "Ho ricontrollato chiusure, percorsi di contenimento e punti ciechi del corridoio. Se la consegna si complica, Donatella tiene il vettore in vita e io tengo il problema lontano dal resto della nave. Piano semplice. Spero resti semplice.",
    ],
  },
  donatella: {
    triggerLabel: "Bio Donatella",
    triggerHint: "MED / PILOT LOG",
    eyebrow: "MISSION DOSSIER / FLIGHT MEDIC",
    title: "Donatella / Medico E Pilota",
    image: "animazioni/Donatella/IDLE_stasi_criogenica/frame_0000.png",
    bio: [
      "Donatella è la mente fredda dietro il viaggio: medico di bordo, pilota titolare e custode dei protocolli di stasi. Sa rimettere in sesto una frattura in microgravità, stabilizzare un collasso pressorio e poi allineare la nave alla finestra orbitale senza cambiare tono di voce.",
      "Ha riprogettato la cryo del carico per una traversata lunga, lontana da porti sicuri e con margine di errore praticamente nullo. Se Bruno è il braccio della missione, Donatella è il sistema nervoso che impedisce a tutto il resto di andare in arresto.",
    ],
    log: [
      "Diario di bordo 12. Rotta stabile, consumi sotto soglia, finestra di trasferimento ancora favorevole. Bruno continua a chiamare l'alieno \"problema\"; io continuo a chiamarlo \"carico biologico ad alto rischio\", che è il modo professionale di dire la stessa identica cosa.",
      "La cella risponde bene, ma non mi fido del silenzio. Gli organismi sconosciuti non smettono mai davvero di parlare: a volte cambiano solo linguaggio, e lo fanno in curve termiche, micromovimenti e tempi sbagliati dei sedativi.",
    ],
  },
  alieno: {
    triggerLabel: "Bio Carico",
    triggerHint: "CARGO XENO LOG",
    eyebrow: "MISSION DOSSIER / PRIORITY CARGO",
    title: "Alieno 1 / Carico Biologico Vivo",
    image: "animazioni/Alieno_1/Idle/frame_0000.png",
    bio: [
      "Denominazione provvisoria: Alieno 1. Non è un passeggero e non è un prigioniero nel senso umano del termine: è il fulcro della missione. Il soggetto viene trasportato in criosospensione verso un altro pianeta, dove una struttura di frontiera dovrebbe disporre del contenimento necessario per studiarlo senza mettere a rischio l'equipaggio.",
      "La morfologia è instabile ma coerente con un predatore adattivo: tessuti resilienti, metabolismo irregolare, risposta neurale anomala e un comportamento da stasi che assomiglia più a un'attesa controllata che a un vero sonno biologico.",
    ],
    log: [
      "Allegato di missione / accesso limitato. Durante il transito il carico ha mostrato microvariazioni autonome di temperatura e consumo di reagenti nonostante il regime di stasi. Nessuna evasione, nessuna frattura della cella, ma troppa iniziativa per qualcosa che dovrebbe essere immobile.",
      "Ordine operativo confermato: non aprire la cryo, non improvvisare contatto, non confondere quiete con docilità. Il pianeta di destinazione può permettersi di studiarlo. Questa nave può permettersi soltanto di consegnarlo.",
    ],
  },
};
const ROOM_SEQUENCE = ["bruno", "donatella", "alieno"];
const ROBOT_FRAME_COUNT = 36;
const ROBOT_BASE_WIDTH = 390;
const ROBOT_IDLE_MODES = ["move", "clean"];
const BRUNO_WALK_FRAME_COUNT = 36;
const BRUNO_WALK_BASE_WIDTH = 228;
const BRUNO_WALK_FRAME_RATE = 14;
const BRUNO_WALK_SPEED = 228;
const ALIEN_WALK_FRAME_COUNT = 36;
const ALIEN_WALK_BASE_WIDTH = 210;
const ALIEN_WALK_FRAME_RATE = 14;
const ALIEN_WALK_SPEED = 92;
const ARMORY_STORAGE_KEY = "space-bruno-armory-placements-v1";
const SHADOW_STORAGE_KEY = "space-bruno-shadow-placements-v1";
const FLICKER_STORAGE_KEY = "space-bruno-flicker-effects-v1";
const ARMORY_EXPORT_FILE_NAME = "armory-placements.json";
const ARMORY_PASSWORD = "2001";
const ARMORY_ALPHA_THRESHOLD = 24;
const FLICKER_DEFAULT_EFFECTS = [
  {
    id: "led-flicker-1",
    x: 158,
    y: 205,
    width: 98,
    height: 34,
    slowness: 2.8,
    brightness: 1,
  },
];
const FLICKER_SLOWNESS_MIN = 0.45;
const FLICKER_SLOWNESS_MAX = 8.5;
const FLICKER_SLOWNESS_STEP = 0.25;
const FLICKER_BRIGHTNESS_MIN = 0.35;
const FLICKER_BRIGHTNESS_MAX = 2.2;
const FLICKER_BRIGHTNESS_STEP = 0.1;
const FLICKER_DEFAULT_SIZE = {
  width: 98,
  height: 34,
};
const ARMORY_ITEMS = [
  {
    id: "pistola",
    title: "Pistola compatta",
    image: "armi/pistola.png",
    description: "Sidearm sigillata per corridoi pressurizzati: munizioni a punta frangibile, lampada strobo integrata e trattamento anti-corrosione per residui acidi xeno. Pensata come ultima linea quando la creatura e troppo vicina per usare il fucile.",
    alphaBox: { x: 294, y: 42, width: 700, height: 817 },
    frame: { x: 547.5, y: 249.5, width: 112.9, height: 112.9 },
  },
  {
    id: "coltello",
    title: "Coltello tattico",
    image: "armi/coltello.png",
    description: "Lama monofilare ceramica con dorso isolato e scanalature di drenaggio. Serve per liberarsi da membrane, cablaggi, bozzoli e tessuti alieni senza condurre scariche o trattenere fluidi contaminanti.",
    alphaBox: { x: 528, y: 27, width: 198, height: 1197 },
    frame: { x: 584.2, y: 296.9, width: 99.5, height: 99.5 },
  },
  {
    id: "guanti",
    title: "Guanti tecnici",
    image: "armi/guanti_1.png",
    description: "Guanti da contenimento con palmo magnetico, pelle esterna anti-acido e inserti termici. Consentono presa su scafi gelati, armi surriscaldate e superfici contaminate da secrezioni xenomorfe o plasma demoniaco.",
    alphaBox: { x: 296, y: 110, width: 638, height: 1024 },
    frame: { x: 536.6, y: 353.5, width: 116.0, height: 116.0 },
  },
  {
    id: "borsa",
    title: "Borsa operativa",
    image: "armi/borsa_1.png",
    description: "Borsa operativa da bonifica: slot per razzi luminosi, batterie UV, sensori di movimento, bende coagulanti e campioni sigillati. Configurata per missioni dove restare nella luce e leggere il movimento salva piu vite delle munizioni.",
    alphaBox: { x: 121, y: 268, width: 1013, height: 693 },
    frame: { x: 566.0, y: 568.0, width: 104.0, height: 104.0 },
  },
  {
    id: "granata-1",
    title: "Granata a impulso",
    image: "armi/granata_1.png",
    description: "Granata a impulso direzionale tarata per stordire bersagli rapidi senza perforare lo scafo. L'onda elettromagnetica disturba sensori organici, cariche Argent instabili e predatori che cacciano nel buio.",
    alphaBox: { x: 309, y: 163, width: 643, height: 927 },
    frame: { x: 547.9, y: 514.7, width: 89.7, height: 89.7 },
  },
  {
    id: "flash-bang",
    title: "Flash bang",
    image: "armi/flash_bang.png",
    description: "Flash bang fotonica ad alta intensita, sviluppata per creature fotosensibili e branchi notturni. Il lampo satura visori, occhi modificati e tessuti vulnerabili alla luce; la detonazione sonora spezza l'assalto nei tunnel.",
    alphaBox: { x: 417, y: 176, width: 412, height: 903 },
    frame: { x: 583.6, y: 506.2, width: 105.5, height: 105.5 },
  },
  {
    id: "caricatore-1",
    title: "Caricatore standard",
    image: "armi/caricatore_1.png",
    description: "Caricatore standard con munizioni perforanti a bassa frammentazione. Buono contro corazze chitinose e demoni minori, riduce rimbalzi e sovrapenetrazione nei moduli abitati della nave.",
    alphaBox: { x: 278, y: 226, width: 463, height: 1084 },
    frame: { x: 557.4, y: 647.9, width: 57.5, height: 86.3 },
  },
  {
    id: "caricatore-2",
    title: "Caricatore esteso",
    image: "armi/caricatore_2.png",
    description: "Caricatore esteso per fuoco di soppressione quando il tracciatore di movimento diventa una parete di segnali. Molle rinforzate, feed anti-inceppamento e munizioni alternate perforanti/incendiarie per tenere lontano lo sciame.",
    alphaBox: { x: 331, y: 148, width: 357, height: 1230 },
    frame: { x: 1043.0, y: 636.1, width: 68.3, height: 102.4 },
  },
  {
    id: "fucile-1",
    title: "Fucile d'assalto",
    image: "armi/fucile_1.png",
    description: "Fucile d'assalto compatto ispirato alle dottrine dei marine coloniali: raffica controllata, modulo luce sotto-canna, slitta per sensore di movimento e munizioni anti-carapace. Adatto a xenomorfi nei condotti e demoni corazzati a media distanza.",
    alphaBox: { x: 399, y: 41, width: 357, height: 1352 },
    frame: { x: 922.1, y: 251.3, width: 255.5, height: 340.7 },
  },
  {
    id: "granata-2",
    title: "Granata compatta",
    image: "armi/granata_2.png",
    description: "Granata compatta a carica termobarica ridotta, progettata per stanze strette e nidi biologici. Brucia ossigeno locale, sterilizza spore e biomassa, ma limita l'onda d'urto per non compromettere paratie e supporti vitali.",
    alphaBox: { x: 299, y: 137, width: 622, height: 933 },
    frame: { x: 1044.6, y: 581.5, width: 78.0, height: 78.0 },
  },
];
const CHARACTER_SHADOWS = {
  bruno: {
    id: "shadow-bruno",
    title: "Ombra Bruno",
    placement: {
      left: 50,
      bottom: 0.8,
      width: 52,
      height: 16,
    },
  },
  donatella: {
    id: "shadow-donatella",
    title: "Ombra Donatella",
    placement: {
      left: 50,
      bottom: 0.95,
      width: 34,
      height: 13,
    },
  },
  alieno: {
    id: "shadow-alieno",
    title: "Ombra Alieno 1",
    placement: {
      left: 50,
      bottom: 0.7,
      width: 48,
      height: 15,
    },
  },
};

const hudFooter = document.querySelector(".hud-footer");
const stasisBay = document.getElementById("stasis-bay");
const stasisBayCore = document.querySelector(".stasis-bay__core");
const stasisShadow = document.querySelector(".stasis-bay__shadow");
const stasisShadowHandle = document.querySelector(".stasis-bay__shadow-handle");
const brunoFrame = document.getElementById("bruno-frame");
const roomLabel = document.getElementById("room-label");
const roomPrev = document.getElementById("room-prev");
const roomNext = document.getElementById("room-next");
const hudTriggers = document.querySelectorAll(".hud-trigger[data-panel-target]");
const armoryLayer = document.getElementById("armory-layer");
const armoryModal = document.getElementById("armory-modal");
const armoryModalImage = document.getElementById("armory-modal-image");
const armoryModalTitle = document.getElementById("armory-modal-title");
const armoryModalDescription = document.getElementById("armory-modal-description");
const armoryModalClose = document.getElementById("armory-modal-close");
const dossierTrigger = document.getElementById("dossier-trigger");
const dossierTriggerLabel = dossierTrigger?.querySelector(".hud-trigger__label");
const dossierTriggerHint = dossierTrigger?.querySelector(".hud-trigger__hint");
const dossierModal = document.getElementById("dossier-modal");
const dossierModalPanel = dossierModal?.querySelector(".dossier-modal__panel");
const dossierModalBody = document.getElementById("dossier-modal-body");
const dossierModalImage = document.getElementById("dossier-modal-image");
const dossierModalEyebrow = document.getElementById("dossier-modal-eyebrow");
const dossierModalTitle = document.getElementById("dossier-modal-title");
const dossierModalBio = document.getElementById("dossier-modal-bio");
const dossierModalLog = document.getElementById("dossier-modal-log");
const dossierModalClose = document.getElementById("dossier-modal-close");
const dossierModalTabs = document.querySelectorAll("[data-dossier-tab]");
const halTrigger = document.getElementById("hal-trigger");
const halLogin = document.getElementById("hal-login");
const halLoginForm = document.getElementById("hal-login-form");
const halPassword = document.getElementById("hal-password");
const halLoginError = document.getElementById("hal-login-error");
const halLoginCancel = document.getElementById("hal-login-cancel");
const flickerLayer = document.getElementById("flicker-layer");
const armoryEditor = document.getElementById("armory-editor");
const armoryEditorItem = document.getElementById("armory-editor-item");
const armoryEditorAddFlicker = document.getElementById("armory-editor-add-flicker");
const armoryEditorRemoveFlicker = document.getElementById("armory-editor-remove-flicker");
const armoryEditorFlickerDimmer = document.getElementById("armory-editor-flicker-dimmer");
const armoryEditorFlickerBrighter = document.getElementById("armory-editor-flicker-brighter");
const armoryEditorFlickerFaster = document.getElementById("armory-editor-flicker-faster");
const armoryEditorFlickerSlower = document.getElementById("armory-editor-flicker-slower");
const armoryEditorSave = document.getElementById("armory-editor-save");
const armoryEditorJsonToggle = document.getElementById("armory-editor-json-toggle");
const armoryEditorTranscript = document.getElementById("armory-editor-transcript");
const armoryEditorExport = document.getElementById("armory-editor-export");
const armoryEditorReset = document.getElementById("armory-editor-reset");
const armoryEditorExit = document.getElementById("armory-editor-exit");
const armoryEditorJson = document.getElementById("armory-editor-json");
const armoryToast = document.getElementById("armory-toast");
const ARMORY_INTERACTION_EXCLUSIONS = [
  ".scene-header",
  ".hud-footer",
  ".stasis-bay__controls",
  ".hal-trigger",
  ".armory-editor",
  ".room-nav",
].join(", ");
const robotBay = document.getElementById("robot-bay");
const robotCleaner = document.getElementById("robot-cleaner");
const robotFrame = document.getElementById("robot-frame");
const robotToggle = document.getElementById("robot-toggle");
const robotToggleHint = robotToggle?.querySelector(".hud-trigger__hint");
const brunoToggle = document.getElementById("bruno-toggle");
const brunoToggleHint = brunoToggle?.querySelector(".hud-trigger__hint");
const donatellaToggle = document.getElementById("donatella-toggle");
const donatellaToggleHint = donatellaToggle?.querySelector(".hud-trigger__hint");
const alienToggle = document.getElementById("alien-toggle");
const alienToggleHint = alienToggle?.querySelector(".hud-trigger__hint");
const brunoWalkBay = document.getElementById("bruno-walk-bay");
const brunoWalker = document.getElementById("bruno-walker");
const brunoWalkFrame = document.getElementById("bruno-walk-frame");
const alienWalkBay = document.getElementById("alien-walk-bay");
const alienWalker = document.getElementById("alien-walker");
const alienWalkFrame = document.getElementById("alien-walk-frame");
const audioToggle = document.getElementById("audio-toggle");
const hudTelemetryMetrics = [];
const armoryHotspots = [];
const armoryImageMasks = new Map();
const flickerElements = new Map();
const flickerRuntime = new Map();
let armoryHoverPreview = null;
let lastArmoryFocus = null;
let lastHalFocus = null;
let armoryPlacements = {};
let shadowPlacements = {};
let flickerEffects = [];
let armoryToastTimer = null;
let suppressNextArmoryBackdropClick = false;

const armoryEditorState = {
  active: false,
  hoveredItemId: null,
  selectedItemId: null,
  draggingItemId: null,
  dragOffsetX: 0,
  dragOffsetY: 0,
};
const dossierModalState = {
  room: "bruno",
  tab: "bio",
};

if (armoryModal) {
  armoryModal.inert = true;
  armoryModal.setAttribute("inert", "");
}

if (dossierModal) {
  dossierModal.inert = true;
  dossierModal.setAttribute("inert", "");
}

if (halLogin) {
  halLogin.inert = true;
  halLogin.setAttribute("inert", "");
}

function buildFrames(basePath, frameCount) {
  return Array.from({ length: frameCount }, (_, index) => {
    const frameId = String(index).padStart(4, "0");
    return `${basePath}/frame_${frameId}.png`;
  });
}

function preloadFrames(frameSources) {
  for (const frameSrc of frameSources) {
    const img = new Image();
    img.decoding = "async";
    img.src = frameSrc;
  }
}

const characterAnimations = Object.fromEntries(
  Object.entries(CHARACTER_PROFILES).map(([key, profile]) => {
    const forwardFrames = buildFrames(profile.frameBasePath, profile.frameCount);

    return [
      key,
      {
        forwardFrames,
        frames: [
          ...forwardFrames,
          ...forwardFrames.slice(1, -1).reverse(),
        ],
      },
    ];
  }),
);

const robotAnimations = {
  move: {
    frames: buildFrames("animazioni/Robot_pulizie/Pulisce_fermo", ROBOT_FRAME_COUNT),
    fps: 14,
  },
  clean: {
    frames: buildFrames("animazioni/Robot_pulizie/Pulisce_gira", ROBOT_FRAME_COUNT),
    fps: 11,
  },
  scan: {
    frames: buildFrames("animazioni/Robot_pulizie/360_rotation", ROBOT_FRAME_COUNT),
    fps: 10,
  },
};
const brunoWalkAnimations = {
  right: {
    frames: buildFrames("animazioni/Bruno/Walk/Dx", BRUNO_WALK_FRAME_COUNT),
    fps: BRUNO_WALK_FRAME_RATE,
  },
  left: {
    frames: buildFrames("animazioni/Bruno/Walk/Sx", BRUNO_WALK_FRAME_COUNT),
    fps: BRUNO_WALK_FRAME_RATE,
  },
};
const alienWalkAnimations = {
  right: {
    frames: buildFrames("animazioni/Alieno_1/Walk/dx", ALIEN_WALK_FRAME_COUNT),
    fps: ALIEN_WALK_FRAME_RATE,
  },
  left: {
    frames: buildFrames("animazioni/Alieno_1/Walk/sx", ALIEN_WALK_FRAME_COUNT),
    fps: ALIEN_WALK_FRAME_RATE,
  },
};

preloadFrames(Object.values(characterAnimations).flatMap((animation) => animation.forwardFrames));
preloadFrames([
  ...robotAnimations.move.frames,
  ...robotAnimations.clean.frames,
]);
preloadFrames([
  ...brunoWalkAnimations.right.frames,
  ...brunoWalkAnimations.left.frames,
]);
preloadFrames([
  ...alienWalkAnimations.right.frames,
  ...alienWalkAnimations.left.frames,
]);
preloadFrames(ARMORY_ITEMS.map((item) => item.image));

const robotState = {
  visible: false,
  mode: "move",
  position: 0,
  minX: 0,
  maxX: 0,
  direction: 1,
  frameIndex: 0,
  lastFrameTime: 0,
  loopsUntilModeSwap: 1,
};
const brunoWalkerState = {
  visible: false,
  position: 0,
  minX: 0,
  maxX: 0,
  direction: 1,
  frameIndex: 0,
  lastFrameTime: 0,
  lastMoveTime: 0,
};
const alienWalkerState = {
  visible: false,
  position: 0,
  minX: 0,
  maxX: 0,
  direction: 1,
  frameIndex: 0,
  lastFrameTime: 0,
  lastMoveTime: 0,
};
const brunoReleaseState = {
  released: false,
};
const alienReleaseState = {
  released: false,
};

function createAudioTrack(src, options = {}) {
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.loop = Boolean(options.loop);
  audio.volume = options.volume ?? 1;
  audio.setAttribute("playsinline", "");
  audio.load();
  return audio;
}

const audioTracks = {
  ambience: createAudioTrack("assets/audio/ambience-spaceship.ogg", {
    loop: true,
    volume: 0.52,
  }),
  alienAlert: createAudioTrack("assets/audio/alien-alert.ogg", {
    volume: 0.34,
  }),
  alienLoop: createAudioTrack("assets/audio/alien-growl-loop.ogg", {
    loop: true,
    volume: 0.18,
  }),
  robotLoop: createAudioTrack("assets/audio/robot-loop.ogg", {
    loop: true,
    volume: 0.08,
  }),
  uiClick: createAudioTrack("assets/audio/ui-click.ogg", {
    volume: 0.18,
  }),
  robotToggle: createAudioTrack("assets/audio/robot-toggle.ogg", {
    volume: 0.2,
  }),
};

const audioState = {
  enabled: false,
  muted: false,
};

function playLoop(audio) {
  if (!audio.paused) {
    return;
  }

  audio.play().catch(() => {});
}

function stopLoop(audio, reset = false) {
  if (!audio.paused) {
    audio.pause();
  }

  if (reset) {
    audio.currentTime = 0;
  }
}

function playOneShot(audioTemplate, volumeOverride) {
  if (!audioState.enabled || audioState.muted) {
    return;
  }

  const effect = new Audio(audioTemplate.src);
  effect.volume = volumeOverride ?? audioTemplate.volume;
  effect.play().catch(() => {});
}

function updateAudioToggle() {
  if (!audioToggle) {
    return;
  }

  const isOn = audioState.enabled && !audioState.muted;
  audioToggle.setAttribute("aria-pressed", String(isOn));
  audioToggle.textContent = isOn ? "AUDIO ON" : "AUDIO OFF";
}

function syncSceneAudio() {
  const shouldPlay = audioState.enabled && !audioState.muted && document.visibilityState === "visible";

  if (shouldPlay) {
    playLoop(audioTracks.ambience);
  } else {
    stopLoop(audioTracks.ambience);
  }

  if (shouldPlay && robotState.visible) {
    playLoop(audioTracks.robotLoop);
  } else {
    stopLoop(audioTracks.robotLoop, true);
  }

  if (shouldPlay && alienWalkerState.visible) {
    playLoop(audioTracks.alienLoop);
  } else {
    stopLoop(audioTracks.alienLoop, true);
  }

  updateAudioToggle();
}

function enableSceneAudio() {
  if (audioState.enabled) {
    syncSceneAudio();
    return;
  }

  audioState.enabled = true;
  syncSceneAudio();
}

function toggleSceneAudio() {
  const wasOn = audioState.enabled && !audioState.muted;

  if (!wasOn) {
    audioState.muted = false;
    enableSceneAudio();
    playOneShot(audioTracks.uiClick, 0.16);
    return;
  }

  playOneShot(audioTracks.uiClick, 0.12);
  audioState.muted = true;
  syncSceneAudio();
}

function clampValue(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function registerHudTelemetry(panelId, index, config) {
  const metrics = document.querySelectorAll(`#${panelId} .hud-metric`);
  const metric = metrics[index];

  if (!metric) {
    return;
  }

  hudTelemetryMetrics.push({
    ...config,
    valueElement: metric.querySelector(".hud-metric__value"),
    fillElement: metric.querySelector(".hud-metric__bar span"),
    phase: Math.random() * Math.PI * 2,
  });
}

function setupHudTelemetry() {
  registerHudTelemetry("panel-health", 0, {
    format: "int",
    unit: " BPM",
    base: 52,
    variance: 1.6,
    min: 49,
    max: 55,
    fillBase: 64,
    fillVariance: 4,
    fillMin: 58,
    fillMax: 70,
    speed: 0.95,
  });

  registerHudTelemetry("panel-health", 1, {
    format: "fixed1",
    unit: " RPM",
    base: 7.8,
    variance: 0.35,
    min: 7.2,
    max: 8.4,
    fillBase: 42,
    fillVariance: 4,
    fillMin: 36,
    fillMax: 48,
    speed: 0.82,
  });

  registerHudTelemetry("panel-health", 2, {
    format: "fixed1",
    unit: "%",
    base: 99.1,
    variance: 0.35,
    min: 98.4,
    max: 99.8,
    fillBase: 91,
    fillVariance: 2.2,
    fillMin: 88,
    fillMax: 95,
    speed: 0.62,
  });

  registerHudTelemetry("panel-health", 3, {
    format: "prefixed-percent",
    prefix: "SOGNO REM / ",
    base: 73,
    variance: 3.6,
    min: 68,
    max: 79,
    fillBase: 73,
    fillVariance: 5,
    fillMin: 66,
    fillMax: 80,
    speed: 0.54,
  });

  registerHudTelemetry("panel-cryo", 0, {
    format: "fixed1",
    unit: " C",
    base: -186.4,
    variance: 0.45,
    min: -187.3,
    max: -185.6,
    fillBase: 88,
    fillVariance: 2.8,
    fillMin: 84,
    fillMax: 92,
    speed: 0.48,
  });

  registerHudTelemetry("panel-cryo", 1, {
    format: "int",
    unit: "%",
    base: 94,
    variance: 1.4,
    min: 91,
    max: 97,
    fillBase: 94,
    fillVariance: 3,
    fillMin: 89,
    fillMax: 98,
    speed: 0.4,
  });

  registerHudTelemetry("panel-cryo", 2, {
    format: "int",
    unit: " L/MIN",
    base: 88,
    variance: 2.8,
    min: 83,
    max: 93,
    fillBase: 78,
    fillVariance: 5,
    fillMin: 71,
    fillMax: 84,
    speed: 0.68,
  });

  registerHudTelemetry("panel-cryo", 3, {
    format: "int",
    unit: "%",
    base: 100,
    variance: 0.8,
    min: 98,
    max: 100,
    fillBase: 100,
    fillVariance: 1.4,
    fillMin: 97,
    fillMax: 100,
    speed: 0.34,
  });
}

function formatHudTelemetryValue(metric, value) {
  if (metric.format === "fixed1") {
    return `${value.toFixed(1)}${metric.unit}`;
  }

  if (metric.format === "prefixed-percent") {
    return `${metric.prefix}${Math.round(value)}%`;
  }

  return `${Math.round(value)}${metric.unit}`;
}

function refreshHudTelemetry() {
  if (!hudTelemetryMetrics.length) {
    return;
  }

  const time = Date.now() / 1000;

  for (const metric of hudTelemetryMetrics) {
    const primaryWave = Math.sin(time * metric.speed + metric.phase) * metric.variance;
    const secondaryWave = Math.sin(time * metric.speed * 0.43 + metric.phase * 1.7)
      * metric.variance
      * 0.36;
    const jitter = (Math.random() - 0.5) * metric.variance * 0.34;
    const value = clampValue(
      metric.base + primaryWave + secondaryWave + jitter,
      metric.min,
      metric.max,
    );
    const normalizedDelta = metric.variance
      ? clampValue((value - metric.base) / metric.variance, -1, 1)
      : 0;
    const fill = clampValue(
      metric.fillBase + normalizedDelta * metric.fillVariance,
      metric.fillMin,
      metric.fillMax,
    );

    if (metric.valueElement) {
      metric.valueElement.textContent = formatHudTelemetryValue(metric, value);
    }

    if (metric.fillElement) {
      metric.fillElement.style.setProperty("--fill", `${fill.toFixed(1)}%`);
    }
  }
}

function getBackdropMetrics() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const scale = Math.max(
    viewportWidth / BACKDROP_SIZE.width,
    viewportHeight / BACKDROP_SIZE.height,
  );

  const renderedWidth = BACKDROP_SIZE.width * scale;
  const renderedHeight = BACKDROP_SIZE.height * scale;
  const offsetX = (viewportWidth - renderedWidth) / 2;
  const offsetY = (viewportHeight - renderedHeight) / 2;

  return {
    offsetX,
    offsetY,
    renderedWidth,
    renderedHeight,
    scale,
  };
}

function clonePlacement(placement) {
  return {
    x: placement.x,
    y: placement.y,
    width: placement.width,
    height: placement.height,
  };
}

function getDefaultArmoryPlacements() {
  return Object.fromEntries(
    ARMORY_ITEMS.map((item) => [item.id, clonePlacement(item.frame)]),
  );
}

function cloneShadowPlacement(placement) {
  return {
    left: placement.left,
    bottom: placement.bottom,
    width: placement.width,
    height: placement.height,
  };
}

function getDefaultShadowPlacements() {
  return Object.fromEntries(
    Object.entries(CHARACTER_SHADOWS).map(([room, shadow]) => [room, cloneShadowPlacement(shadow.placement)]),
  );
}

function cloneFlickerEffect(effect) {
  return {
    id: effect.id,
    x: effect.x,
    y: effect.y,
    width: effect.width,
    height: effect.height,
    slowness: effect.slowness,
    brightness: effect.brightness,
  };
}

function getDefaultFlickerEffects() {
  return FLICKER_DEFAULT_EFFECTS.map((effect) => cloneFlickerEffect(effect));
}

function normalizeArmoryPlacement(placement) {
  return {
    x: Number(placement.x.toFixed(2)),
    y: Number(placement.y.toFixed(2)),
    width: Number(placement.width.toFixed(2)),
    height: Number(placement.height.toFixed(2)),
  };
}

function normalizeShadowPlacement(placement) {
  return {
    left: Number(placement.left.toFixed(2)),
    bottom: Number(placement.bottom.toFixed(2)),
    width: Number(placement.width.toFixed(2)),
    height: Number(placement.height.toFixed(2)),
  };
}

function normalizeFlickerEffect(effect) {
  return {
    id: effect.id,
    x: Number(effect.x.toFixed(2)),
    y: Number(effect.y.toFixed(2)),
    width: Number(effect.width.toFixed(2)),
    height: Number(effect.height.toFixed(2)),
    slowness: Number(effect.slowness.toFixed(2)),
    brightness: Number(effect.brightness.toFixed(2)),
  };
}

function serializeArmoryPlacements() {
  return JSON.stringify(
    {
      items: Object.fromEntries(
        ARMORY_ITEMS.map((item) => {
          const placement = armoryPlacements[item.id] ?? item.frame;
          return [item.id, normalizeArmoryPlacement(placement)];
        }),
      ),
      shadows: Object.fromEntries(
        Object.entries(CHARACTER_SHADOWS).map(([room, shadow]) => {
          const placement = shadowPlacements[room] ?? shadow.placement;
          return [room, normalizeShadowPlacement(placement)];
        }),
      ),
      flickers: flickerEffects.map((effect) => normalizeFlickerEffect(effect)),
    },
    null,
    2,
  );
}

function refreshArmoryPlacementTranscript() {
  if (!armoryEditorJson) {
    return;
  }

  armoryEditorJson.value = `${serializeArmoryPlacements()}\n`;
}

function setArmoryTranscriptOpen(isOpen) {
  if (!armoryEditorTranscript || !armoryEditorJsonToggle) {
    return;
  }

  armoryEditorTranscript.hidden = !isOpen;
  armoryEditorTranscript.classList.toggle("is-open", isOpen);
  armoryEditorTranscript.setAttribute("aria-hidden", String(!isOpen));
  armoryEditorJsonToggle.setAttribute("aria-pressed", String(isOpen));
  armoryEditorJsonToggle.textContent = isOpen ? "Chiudi JSON" : "JSON";
}

function exportArmoryPlacementsJson() {
  const downloadLink = document.createElement("a");
  const jsonBlob = new Blob([`${serializeArmoryPlacements()}\n`], {
    type: "application/json",
  });
  const downloadUrl = URL.createObjectURL(jsonBlob);

  downloadLink.href = downloadUrl;
  downloadLink.download = ARMORY_EXPORT_FILE_NAME;
  downloadLink.click();

  window.setTimeout(() => {
    URL.revokeObjectURL(downloadUrl);
  }, 0);
}

function loadArmoryPlacements() {
  const defaults = getDefaultArmoryPlacements();

  try {
    const saved = JSON.parse(localStorage.getItem(ARMORY_STORAGE_KEY) || "{}");

    for (const item of ARMORY_ITEMS) {
      const placement = saved[item.id];

      if (
        placement
        && Number.isFinite(placement.x)
        && Number.isFinite(placement.y)
        && Number.isFinite(placement.width)
        && Number.isFinite(placement.height)
        && placement.width > 0
        && placement.height > 0
      ) {
        defaults[item.id] = clonePlacement(placement);
      }
    }
  } catch {
    try {
      localStorage.removeItem(ARMORY_STORAGE_KEY);
    } catch {}
  }

  armoryPlacements = defaults;
  refreshArmoryPlacementTranscript();
}

function loadShadowPlacements() {
  const defaults = getDefaultShadowPlacements();

  try {
    const saved = JSON.parse(localStorage.getItem(SHADOW_STORAGE_KEY) || "{}");

    for (const room of Object.keys(CHARACTER_SHADOWS)) {
      const placement = saved[room];

      if (
        placement
        && Number.isFinite(placement.left)
        && Number.isFinite(placement.bottom)
        && Number.isFinite(placement.width)
        && Number.isFinite(placement.height)
        && placement.width > 0
        && placement.height > 0
      ) {
        defaults[room] = cloneShadowPlacement(placement);
      }
    }
  } catch {
    try {
      localStorage.removeItem(SHADOW_STORAGE_KEY);
    } catch {}
  }

  shadowPlacements = defaults;
  refreshArmoryPlacementTranscript();
}

function loadFlickerEffects() {
  const defaults = getDefaultFlickerEffects();

  try {
    const saved = JSON.parse(localStorage.getItem(FLICKER_STORAGE_KEY) || "null");
    const savedEffects = Array.isArray(saved)
      ? saved
      : Array.isArray(saved?.flickers)
        ? saved.flickers
        : null;

    if (savedEffects) {
      flickerEffects = savedEffects
        .filter((effect) => (
          effect
          && typeof effect.id === "string"
          && Number.isFinite(effect.x)
          && Number.isFinite(effect.y)
          && Number.isFinite(effect.width)
          && Number.isFinite(effect.height)
          && Number.isFinite(effect.slowness)
          && (!("brightness" in effect) || Number.isFinite(effect.brightness))
          && effect.width > 0
          && effect.height > 0
        ))
        .map((effect) => ({
          id: effect.id,
          x: effect.x,
          y: effect.y,
          width: effect.width,
          height: effect.height,
          slowness: clampValue(effect.slowness, FLICKER_SLOWNESS_MIN, FLICKER_SLOWNESS_MAX),
          brightness: clampValue(
            Number.isFinite(effect.brightness) ? effect.brightness : 1,
            FLICKER_BRIGHTNESS_MIN,
            FLICKER_BRIGHTNESS_MAX,
          ),
        }));
    } else {
      flickerEffects = defaults;
    }
  } catch {
    try {
      localStorage.removeItem(FLICKER_STORAGE_KEY);
    } catch {}
    flickerEffects = defaults;
  }

  refreshArmoryPlacementTranscript();
}

function saveArmoryPlacements() {
  try {
    localStorage.setItem(ARMORY_STORAGE_KEY, JSON.stringify(armoryPlacements));
  } catch {}
}

function saveShadowPlacements() {
  try {
    localStorage.setItem(SHADOW_STORAGE_KEY, JSON.stringify(shadowPlacements));
  } catch {}
}

function saveFlickerEffects() {
  try {
    localStorage.setItem(FLICKER_STORAGE_KEY, JSON.stringify(flickerEffects));
  } catch {}
}

function showArmoryToast(message) {
  if (!armoryToast) {
    return;
  }

  window.clearTimeout(armoryToastTimer);
  armoryToast.textContent = message;
  armoryToast.classList.add("is-visible");
  armoryToast.setAttribute("aria-hidden", "false");

  armoryToastTimer = window.setTimeout(() => {
    armoryToast.classList.remove("is-visible");
    armoryToast.setAttribute("aria-hidden", "true");
  }, 1800);
}

function resetArmoryPlacements() {
  armoryPlacements = getDefaultArmoryPlacements();
  try {
    localStorage.removeItem(ARMORY_STORAGE_KEY);
  } catch {}
  refreshArmoryPlacementTranscript();
  layoutArmoryHotspots();
  updateArmoryEditorStatus();
}

function resetShadowPlacements() {
  shadowPlacements = getDefaultShadowPlacements();
  try {
    localStorage.removeItem(SHADOW_STORAGE_KEY);
  } catch {}
  refreshArmoryPlacementTranscript();
  applyCharacterShadowPlacement();
}

function resetFlickerEffects() {
  flickerEffects = getDefaultFlickerEffects();
  flickerRuntime.clear();
  try {
    localStorage.removeItem(FLICKER_STORAGE_KEY);
  } catch {}
  syncFlickerElements();
  refreshArmoryPlacementTranscript();
  layoutFlickerEffects();
}

function buildArmoryImageMask(item) {
  const image = new Image();
  image.decoding = "async";
  const createMask = () => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    if (!canvas.width || !canvas.height) {
      return;
    }

    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0);

    armoryImageMasks.set(item.id, {
      image,
      context,
      width: canvas.width,
      height: canvas.height,
    });
  };

  image.addEventListener("load", createMask, { once: true });
  image.src = item.image;

  if (image.complete) {
    createMask();
  }
}

function buildArmoryHotspots() {
  if (!armoryLayer) {
    return;
  }

  loadArmoryPlacements();
  loadShadowPlacements();
  loadFlickerEffects();

  const fragment = document.createDocumentFragment();

  for (const item of ARMORY_ITEMS) {
    buildArmoryImageMask(item);

    const silhouette = document.createElement("img");
    silhouette.className = "armory-silhouette";
    silhouette.src = item.image;
    silhouette.alt = "";
    silhouette.decoding = "async";
    silhouette.draggable = false;
    silhouette.dataset.armoryItem = item.id;
    silhouette.setAttribute("aria-hidden", "true");

    const hitbox = document.createElement("button");
    hitbox.className = "armory-hitbox";
    hitbox.type = "button";
    hitbox.dataset.armoryItem = item.id;
    hitbox.setAttribute("aria-label", `Ispeziona ${item.title}`);
    hitbox.addEventListener("mouseenter", () => {
      if (!armoryEditorState.active) {
        setArmoryHoverItem(item);
      }
    });
    hitbox.addEventListener("mouseleave", () => {
      if (!armoryEditorState.active) {
        setArmoryHoverItem(null);
      }
    });
    hitbox.addEventListener("click", (event) => {
      if (armoryEditorState.active) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      openArmoryItem(item, hitbox);
      hitbox.blur();
    });
    hitbox.addEventListener("pointerdown", (event) => {
      if (armoryEditorState.active) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      suppressNextArmoryBackdropClick = true;
      openArmoryItem(item, hitbox);
      hitbox.blur();
    });

    armoryHotspots.push({ item, element: silhouette, hitbox });
    fragment.append(silhouette);
    fragment.append(hitbox);
  }

  armoryLayer.append(fragment);
  armoryHoverPreview = document.createElement("img");
  armoryHoverPreview.className = "armory-hover-preview";
  armoryHoverPreview.alt = "";
  armoryHoverPreview.decoding = "async";
  armoryHoverPreview.setAttribute("aria-hidden", "true");
  armoryLayer.append(armoryHoverPreview);
  syncFlickerElements();
  layoutArmoryHotspots();
  applyCharacterShadowPlacement();
}

function getFlickerEffectById(effectId) {
  return flickerEffects.find((effect) => effect.id === effectId) ?? null;
}

function getFlickerOrdinalLabel(effectId) {
  const effectIndex = flickerEffects.findIndex((effect) => effect.id === effectId);
  return String(Math.max(0, effectIndex) + 1).padStart(2, "0");
}

function getFlickerTargetTitle(effect) {
  return `LED ${getFlickerOrdinalLabel(effect.id)} / LUX ${effect.brightness.toFixed(2)} / ${effect.slowness.toFixed(2)}s`;
}

function primeFlickerRuntime(effect, timestamp = performance.now()) {
  if (flickerRuntime.has(effect.id)) {
    return flickerRuntime.get(effect.id);
  }

  const runtime = {
    currentOpacity: 0.84 + Math.random() * 0.08,
    burstEndTime: 0,
    nextStepTime: 0,
    nextBurstTime: timestamp + (0.35 + Math.random()) * effect.slowness * 1000,
    ambientPhase: Math.random() * Math.PI * 2,
  };

  flickerRuntime.set(effect.id, runtime);
  return runtime;
}

function updateSingleFlickerRuntime(effect, timestamp) {
  const runtime = primeFlickerRuntime(effect, timestamp);

  if (timestamp >= runtime.nextBurstTime && timestamp >= runtime.burstEndTime) {
    runtime.burstEndTime = timestamp + 90 + Math.random() * 240;
    runtime.nextStepTime = timestamp;
    runtime.nextBurstTime = timestamp + effect.slowness * (900 + Math.random() * 950);
  }

  if (timestamp < runtime.burstEndTime) {
    if (timestamp >= runtime.nextStepTime) {
      runtime.currentOpacity = Math.random() < 0.65
        ? 0.16 + Math.random() * 0.36
        : 0.72 + Math.random() * 0.24;
      runtime.nextStepTime = timestamp + 18 + Math.random() * 46;
    }
  } else {
    const ambientTarget = 0.86 + Math.sin((timestamp / 580) + runtime.ambientPhase) * 0.035;
    runtime.currentOpacity += (ambientTarget - runtime.currentOpacity) * 0.14;
  }

  return clampValue(runtime.currentOpacity, 0.08, 1);
}

function buildFlickerElement(effect) {
  const element = document.createElement("div");
  element.className = "flicker-led";
  element.dataset.flickerId = effect.id;
  element.setAttribute("aria-hidden", "true");
  element.innerHTML = [
    '<span class="flicker-led__bar flicker-led__bar--primary"></span>',
    '<span class="flicker-led__bar flicker-led__bar--secondary"></span>',
    '<span class="flicker-led__noise"></span>',
    '<span class="flicker-led__handle" aria-hidden="true"></span>',
  ].join("");
  return element;
}

function syncFlickerElements() {
  if (!flickerLayer) {
    return;
  }

  const effectIds = new Set(flickerEffects.map((effect) => effect.id));

  for (const [effectId, element] of flickerElements.entries()) {
    if (effectIds.has(effectId)) {
      continue;
    }

    element.remove();
    flickerElements.delete(effectId);
    flickerRuntime.delete(effectId);
  }

  for (const effect of flickerEffects) {
    if (flickerElements.has(effect.id)) {
      continue;
    }

    const element = buildFlickerElement(effect);
    flickerLayer.append(element);
    flickerElements.set(effect.id, element);
  }
}

function layoutFlickerEffects() {
  if (!flickerElements.size) {
    return;
  }

  const { offsetX, offsetY, scale } = getBackdropMetrics();

  for (const effect of flickerEffects) {
    const element = flickerElements.get(effect.id);

    if (!element) {
      continue;
    }

    element.style.left = `${offsetX + effect.x * scale}px`;
    element.style.top = `${offsetY + effect.y * scale}px`;
    element.style.width = `${effect.width * scale}px`;
    element.style.height = `${effect.height * scale}px`;
    element.style.setProperty("--flicker-brightness", String(effect.brightness.toFixed(2)));
    element.classList.toggle("is-selected", armoryEditorState.selectedItemId === effect.id);
  }
}

function layoutArmoryHotspots() {
  layoutFlickerEffects();

  if (!armoryHotspots.length) {
    return;
  }

  const { offsetX, offsetY, scale } = getBackdropMetrics();

  for (const { item, element, hitbox } of armoryHotspots) {
    const placement = armoryPlacements[item.id] ?? item.frame;
    const left = `${offsetX + placement.x * scale}px`;
    const top = `${offsetY + placement.y * scale}px`;
    const width = `${placement.width * scale}px`;
    const height = `${placement.height * scale}px`;

    element.style.left = left;
    element.style.top = top;
    element.style.width = width;
    element.style.height = height;
    hitbox.style.left = left;
    hitbox.style.top = top;
    hitbox.style.width = width;
    hitbox.style.height = height;
    element.classList.toggle("is-selected", armoryEditorState.selectedItemId === item.id);
    const isNormalHovered = !armoryEditorState.active && armoryEditorState.hoveredItemId === item.id;
    element.classList.toggle("is-hovered", isNormalHovered);

    if (isNormalHovered) {
      element.style.setProperty("opacity", "0.84", "important");
      element.style.setProperty("visibility", "visible");
      element.style.setProperty(
        "filter",
        "drop-shadow(0 0 16px rgba(255, 90, 102, 0.54)) drop-shadow(0 0 8px rgba(143, 228, 255, 0.36)) sepia(1) saturate(2) hue-rotate(136deg)",
      );
    } else {
      element.style.removeProperty("opacity");
      element.style.removeProperty("visibility");
      element.style.removeProperty("filter");
    }
  }

  if (!armoryHoverPreview) {
    return;
  }

  const hoveredItem = !armoryEditorState.active
    ? getItemFromId(armoryEditorState.hoveredItemId)
    : null;

  if (!hoveredItem) {
    armoryHoverPreview.classList.remove("is-visible");
    armoryHoverPreview.style.removeProperty("display");
    armoryHoverPreview.style.removeProperty("visibility");
    return;
  }

  const placement = armoryPlacements[hoveredItem.id] ?? hoveredItem.frame;
  armoryHoverPreview.src = hoveredItem.image;
  armoryHoverPreview.style.left = `${offsetX + placement.x * scale}px`;
  armoryHoverPreview.style.top = `${offsetY + placement.y * scale}px`;
  armoryHoverPreview.style.width = `${placement.width * scale}px`;
  armoryHoverPreview.style.height = `${placement.height * scale}px`;
  armoryHoverPreview.style.setProperty("display", "block");
  armoryHoverPreview.style.setProperty("visibility", "visible");
  armoryHoverPreview.classList.add("is-visible");
}

function getBackdropPoint(clientX, clientY) {
  const { offsetX, offsetY, scale } = getBackdropMetrics();

  return {
    x: (clientX - offsetX) / scale,
    y: (clientY - offsetY) / scale,
  };
}

function getItemFromId(itemId) {
  return ARMORY_ITEMS.find((item) => item.id === itemId);
}

function getNextFlickerEffectId() {
  let nextIndex = 1;

  while (flickerEffects.some((effect) => effect.id === `led-flicker-${nextIndex}`)) {
    nextIndex += 1;
  }

  return `led-flicker-${nextIndex}`;
}

function createFlickerEffectDraft() {
  const selectedTarget = getEditorTargetById(armoryEditorState.selectedItemId);
  const sourceEffect = selectedTarget?.kind === "flicker"
    ? getFlickerEffectById(selectedTarget.id)
    : flickerEffects[flickerEffects.length - 1] ?? FLICKER_DEFAULT_EFFECTS[0];
  const offsetStep = 18 + (flickerEffects.length % 3) * 8;

  return {
    id: getNextFlickerEffectId(),
    x: clampValue(sourceEffect.x + offsetStep, 0, BACKDROP_SIZE.width - sourceEffect.width),
    y: clampValue(sourceEffect.y + offsetStep * 0.7, 0, BACKDROP_SIZE.height - sourceEffect.height),
    width: sourceEffect.width ?? FLICKER_DEFAULT_SIZE.width,
    height: sourceEffect.height ?? FLICKER_DEFAULT_SIZE.height,
    slowness: sourceEffect.slowness ?? FLICKER_DEFAULT_EFFECTS[0].slowness,
    brightness: sourceEffect.brightness ?? 1,
  };
}

function addFlickerEffect() {
  const nextEffect = createFlickerEffectDraft();

  flickerEffects.push(nextEffect);
  syncFlickerElements();
  refreshArmoryPlacementTranscript();
  layoutFlickerEffects();
  selectArmoryEditorItem({
    kind: "flicker",
    id: nextEffect.id,
    title: getFlickerTargetTitle(nextEffect),
    effect: nextEffect,
  });
  showArmoryToast(`LED disturbo ${getFlickerOrdinalLabel(nextEffect.id)} aggiunto`);
}

function getShadowRoomFromTargetId(targetId) {
  return Object.keys(CHARACTER_SHADOWS).find((room) => CHARACTER_SHADOWS[room].id === targetId) ?? null;
}

function getEditorTargetById(targetId) {
  if (!targetId) {
    return null;
  }

  const flickerEffect = getFlickerEffectById(targetId);

  if (flickerEffect) {
    return {
      kind: "flicker",
      id: flickerEffect.id,
      title: getFlickerTargetTitle(flickerEffect),
      effect: flickerEffect,
    };
  }

  const shadowRoom = getShadowRoomFromTargetId(targetId);

  if (shadowRoom) {
    return {
      kind: "shadow",
      id: CHARACTER_SHADOWS[shadowRoom].id,
      title: CHARACTER_SHADOWS[shadowRoom].title,
      room: shadowRoom,
    };
  }

  const item = getItemFromId(targetId);

  if (!item) {
    return null;
  }

  return {
    kind: "item",
    id: item.id,
    title: item.title,
    item,
  };
}

function getActiveShadowPlacement() {
  return shadowPlacements[activeRoom] ?? CHARACTER_SHADOWS[activeRoom].placement;
}

function getShadowEditorMetrics(room = activeRoom) {
  if (!stasisBayCore) {
    return null;
  }

  const placement = shadowPlacements[room] ?? CHARACTER_SHADOWS[room].placement;
  const bounds = stasisBayCore.getBoundingClientRect();
  const widthPx = (placement.width / 100) * bounds.width;
  const heightPx = (placement.height / 100) * bounds.height;
  const leftPx = (placement.left / 100) * bounds.width - widthPx / 2;
  const topPx = bounds.height - ((placement.bottom / 100) * bounds.height) - heightPx;

  return {
    placement,
    boundsWidth: bounds.width,
    boundsHeight: bounds.height,
    widthPx,
    heightPx,
    leftPx,
    topPx,
  };
}

function getShadowLocalPoint(clientX, clientY) {
  if (!stasisBayCore) {
    return null;
  }

  const bounds = stasisBayCore.getBoundingClientRect();
  return {
    x: clientX - bounds.left,
    y: clientY - bounds.top,
  };
}

function updateShadowPlacementFromPixels(room, nextRect) {
  const width = Math.max(14, (nextRect.widthPx / nextRect.boundsWidth) * 100);
  const height = Math.max(8, (nextRect.heightPx / nextRect.boundsHeight) * 100);
  const left = ((nextRect.leftPx + nextRect.widthPx / 2) / nextRect.boundsWidth) * 100;
  const bottom = ((nextRect.boundsHeight - (nextRect.topPx + nextRect.heightPx)) / nextRect.boundsHeight) * 100;

  shadowPlacements[room] = {
    left,
    bottom,
    width,
    height,
  };
}

function applyCharacterShadowPlacement() {
  if (!stasisBay || !stasisShadow || !stasisShadowHandle) {
    return;
  }

  const shadow = CHARACTER_SHADOWS[activeRoom];
  const placement = getActiveShadowPlacement();
  const handleBottom = placement.bottom + placement.height * 0.42;

  stasisShadow.dataset.shadowTarget = shadow.id;
  stasisShadow.dataset.shadowRoom = activeRoom;
  stasisShadowHandle.dataset.shadowTarget = shadow.id;
  stasisShadowHandle.dataset.shadowRoom = activeRoom;
  stasisBay.style.setProperty("--character-shadow-left", `${placement.left}%`);
  stasisBay.style.setProperty("--character-shadow-bottom", `${placement.bottom}%`);
  stasisBay.style.setProperty("--character-shadow-width", `${placement.width}%`);
  stasisBay.style.setProperty("--character-shadow-height", `${placement.height}%`);
  stasisBay.style.setProperty("--character-shadow-handle-bottom", `${handleBottom}%`);
  stasisShadow.classList.toggle("is-selected", armoryEditorState.selectedItemId === shadow.id);
  stasisShadowHandle.classList.toggle("is-selected", armoryEditorState.selectedItemId === shadow.id);
}

function isPointInArmoryItem(item, point) {
  const placement = armoryPlacements[item.id] ?? item.frame;

  if (
    point.x < placement.x
    || point.y < placement.y
    || point.x > placement.x + placement.width
    || point.y > placement.y + placement.height
  ) {
    return false;
  }

  const mask = armoryImageMasks.get(item.id);

  if (!mask) {
    return false;
  }

  const sourceX = Math.floor(((point.x - placement.x) / placement.width) * mask.width);
  const sourceY = Math.floor(((point.y - placement.y) / placement.height) * mask.height);

  if (sourceX < 0 || sourceY < 0 || sourceX >= mask.width || sourceY >= mask.height) {
    return false;
  }

  return mask.context.getImageData(sourceX, sourceY, 1, 1).data[3] > ARMORY_ALPHA_THRESHOLD;
}

function findArmoryItemAtPoint(point) {
  for (let index = ARMORY_ITEMS.length - 1; index >= 0; index -= 1) {
    const item = ARMORY_ITEMS[index];

    if (isPointInArmoryItem(item, point)) {
      return item;
    }
  }

  return null;
}

function updateArmoryEditorStatus() {
  if (!armoryEditor || !armoryEditorItem) {
    return;
  }

  armoryEditor.setAttribute("aria-hidden", String(!armoryEditorState.active));
  const selectedTarget = getEditorTargetById(armoryEditorState.selectedItemId);
  armoryEditorItem.textContent = selectedTarget ? selectedTarget.title : "NESSUNA SAGOMA";
  document.body.classList.toggle("is-armory-editing", armoryEditorState.active);
  layoutArmoryHotspots();
  applyCharacterShadowPlacement();
}

function getRoomIndex(room) {
  return ROOM_SEQUENCE.indexOf(room);
}

function getAdjacentRoom(room, direction) {
  const roomIndex = getRoomIndex(room);

  if (roomIndex < 0) {
    return null;
  }

  return ROOM_SEQUENCE[roomIndex + direction] ?? null;
}

function selectArmoryEditorItem(item) {
  armoryEditorState.selectedItemId = item?.id ?? null;
  updateArmoryEditorStatus();
}

function setArmoryHoverItem(item) {
  const nextItemId = item?.id ?? null;

  if (armoryEditorState.hoveredItemId === nextItemId) {
    return;
  }

  armoryEditorState.hoveredItemId = nextItemId;
  document.body.classList.toggle("is-armory-hovering", Boolean(nextItemId));
  layoutArmoryHotspots();
}

function scaleSelectedArmoryItem(factor) {
  const target = getEditorTargetById(armoryEditorState.selectedItemId);

  if (!target) {
    return;
  }

  if (target.kind === "flicker") {
    const nextWidth = clampValue(target.effect.width * factor, 28, BACKDROP_SIZE.width * 0.24);
    const nextHeight = clampValue(target.effect.height * factor, 12, BACKDROP_SIZE.height * 0.14);
    const centerX = target.effect.x + target.effect.width / 2;
    const centerY = target.effect.y + target.effect.height / 2;

    target.effect.width = nextWidth;
    target.effect.height = nextHeight;
    target.effect.x = centerX - nextWidth / 2;
    target.effect.y = centerY - nextHeight / 2;
    refreshArmoryPlacementTranscript();
    layoutFlickerEffects();
    updateArmoryEditorStatus();
    return;
  }

  if (target.kind === "shadow") {
    const metrics = getShadowEditorMetrics(target.room);

    if (!metrics) {
      return;
    }

    const centerX = metrics.leftPx + metrics.widthPx / 2;
    const centerY = metrics.topPx + metrics.heightPx / 2;
    const nextWidthPx = Math.max(metrics.widthPx * factor, metrics.boundsWidth * 0.14);
    const nextHeightPx = Math.max(metrics.heightPx * factor, metrics.boundsHeight * 0.08);

    updateShadowPlacementFromPixels(target.room, {
      leftPx: centerX - nextWidthPx / 2,
      topPx: centerY - nextHeightPx / 2,
      widthPx: nextWidthPx,
      heightPx: nextHeightPx,
      boundsWidth: metrics.boundsWidth,
      boundsHeight: metrics.boundsHeight,
    });
    refreshArmoryPlacementTranscript();
    applyCharacterShadowPlacement();
    return;
  }

  const placement = armoryPlacements[target.id];
  const centerX = placement.x + placement.width / 2;
  const centerY = placement.y + placement.height / 2;
  const nextWidth = clampValue(placement.width * factor, 18, BACKDROP_SIZE.width * 0.42);
  const nextHeight = clampValue(placement.height * factor, 18, BACKDROP_SIZE.height * 0.72);

  armoryPlacements[target.id] = {
    x: centerX - nextWidth / 2,
    y: centerY - nextHeight / 2,
    width: nextWidth,
    height: nextHeight,
  };
  refreshArmoryPlacementTranscript();
  layoutArmoryHotspots();
}

function removeSelectedFlickerEffect() {
  const target = getEditorTargetById(armoryEditorState.selectedItemId);

  if (target?.kind !== "flicker") {
    return false;
  }

  const targetIndex = flickerEffects.findIndex((effect) => effect.id === target.id);

  if (targetIndex < 0) {
    return false;
  }

  flickerEffects.splice(targetIndex, 1);
  flickerRuntime.delete(target.id);
  syncFlickerElements();
  refreshArmoryPlacementTranscript();
  selectArmoryEditorItem(null);
  showArmoryToast("LED disturbo rimosso");
  return true;
}

function changeSelectedFlickerSlowness(delta) {
  const target = getEditorTargetById(armoryEditorState.selectedItemId);

  if (target?.kind !== "flicker") {
    return false;
  }

  target.effect.slowness = clampValue(
    Number((target.effect.slowness + delta).toFixed(2)),
    FLICKER_SLOWNESS_MIN,
    FLICKER_SLOWNESS_MAX,
  );
  refreshArmoryPlacementTranscript();
  updateArmoryEditorStatus();
  return true;
}

function changeSelectedFlickerBrightness(delta) {
  const target = getEditorTargetById(armoryEditorState.selectedItemId);

  if (target?.kind !== "flicker") {
    return false;
  }

  target.effect.brightness = clampValue(
    Number((target.effect.brightness + delta).toFixed(2)),
    FLICKER_BRIGHTNESS_MIN,
    FLICKER_BRIGHTNESS_MAX,
  );
  refreshArmoryPlacementTranscript();
  layoutFlickerEffects();
  updateArmoryEditorStatus();
  return true;
}

function enterArmoryEditor() {
  armoryEditorState.active = true;
  setArmoryHoverItem(null);
  closeHalLogin({ restoreFocus: false });
  setArmoryTranscriptOpen(false);
  updateArmoryEditorStatus();
}

function exitArmoryEditor() {
  armoryEditorState.active = false;
  armoryEditorState.draggingItemId = null;
  setArmoryTranscriptOpen(false);
  selectArmoryEditorItem(null);
}

function handleArmoryPointerDown(event) {
  if (
    event.button !== 0
    || armoryModal?.classList.contains("is-open")
    || dossierModal?.classList.contains("is-open")
    || halLogin?.classList.contains("is-open")
    || event.target.closest(ARMORY_INTERACTION_EXCLUSIONS)
  ) {
    return;
  }

  const directSilhouette = event.target.closest?.(".armory-silhouette");
  const directFlickerHandle = armoryEditorState.active
    ? event.target.closest?.(".flicker-led__handle")
    : null;
  const directFlicker = armoryEditorState.active
    ? event.target.closest?.(".flicker-led")
    : null;
  const directShadowHandle = armoryEditorState.active
    ? event.target.closest?.(".stasis-bay__shadow-handle")
    : null;
  const directShadow = armoryEditorState.active
    ? event.target.closest?.(".stasis-bay__shadow")
    : null;
  const directTargetId = directFlickerHandle?.closest(".flicker-led")?.dataset.flickerId
    ?? directFlicker?.dataset.flickerId
    ?? directShadowHandle?.dataset.shadowTarget
    ?? directShadow?.dataset.shadowTarget
    ?? directSilhouette?.dataset.armoryItem
    ?? null;
  const directTarget = armoryEditorState.active && directTargetId
    ? getEditorTargetById(directTargetId)
    : null;
  const point = getBackdropPoint(event.clientX, event.clientY);
  const hoveredItem = !armoryEditorState.active
    ? getItemFromId(armoryEditorState.hoveredItemId)
    : null;
  const fallbackItem = hoveredItem ?? findArmoryItemAtPoint(point);
  const target = directTarget ?? (fallbackItem ? getEditorTargetById(fallbackItem.id) : null);

  if (!target) {
    return;
  }

  if (!armoryEditorState.active) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  if (target.kind === "shadow") {
    const metrics = getShadowEditorMetrics(target.room);
    const localPoint = getShadowLocalPoint(event.clientX, event.clientY);

    if (!metrics || !localPoint) {
      return;
    }

    armoryEditorState.dragOffsetX = localPoint.x - metrics.leftPx;
    armoryEditorState.dragOffsetY = localPoint.y - metrics.topPx;
  } else if (target.kind === "flicker") {
    armoryEditorState.dragOffsetX = point.x - target.effect.x;
    armoryEditorState.dragOffsetY = point.y - target.effect.y;
  } else {
    const placement = armoryPlacements[target.id];
    armoryEditorState.dragOffsetX = point.x - placement.x;
    armoryEditorState.dragOffsetY = point.y - placement.y;
  }

  armoryEditorState.draggingItemId = target.id;
  selectArmoryEditorItem(target);

  if (typeof (directFlickerHandle ?? directFlicker ?? directShadowHandle ?? directShadow ?? directSilhouette)?.setPointerCapture === "function") {
    (directFlickerHandle ?? directFlicker ?? directShadowHandle ?? directShadow ?? directSilhouette).setPointerCapture(event.pointerId);
  }
}

function handleArmoryPointerMove(event) {
  const target = getEditorTargetById(armoryEditorState.draggingItemId);

  if (!target) {
    const directHitbox = !armoryEditorState.active
      ? event.target.closest?.(".armory-hitbox")
      : null;

    if (directHitbox) {
      setArmoryHoverItem(getItemFromId(directHitbox.dataset.armoryItem));
      return;
    }

    if (
      armoryEditorState.active
      || armoryModal?.classList.contains("is-open")
      || dossierModal?.classList.contains("is-open")
      || halLogin?.classList.contains("is-open")
      || event.target.closest?.(ARMORY_INTERACTION_EXCLUSIONS)
    ) {
      setArmoryHoverItem(null);
      return;
    }

    setArmoryHoverItem(findArmoryItemAtPoint(getBackdropPoint(event.clientX, event.clientY)));
    return;
  }

  if (target.kind === "shadow") {
    const metrics = getShadowEditorMetrics(target.room);
    const localPoint = getShadowLocalPoint(event.clientX, event.clientY);

    if (!metrics || !localPoint) {
      return;
    }

    updateShadowPlacementFromPixels(target.room, {
      leftPx: localPoint.x - armoryEditorState.dragOffsetX,
      topPx: localPoint.y - armoryEditorState.dragOffsetY,
      widthPx: metrics.widthPx,
      heightPx: metrics.heightPx,
      boundsWidth: metrics.boundsWidth,
      boundsHeight: metrics.boundsHeight,
    });
    refreshArmoryPlacementTranscript();
    applyCharacterShadowPlacement();
    return;
  }

  if (target.kind === "flicker") {
    const point = getBackdropPoint(event.clientX, event.clientY);

    target.effect.x = point.x - armoryEditorState.dragOffsetX;
    target.effect.y = point.y - armoryEditorState.dragOffsetY;
    refreshArmoryPlacementTranscript();
    layoutFlickerEffects();
    return;
  }

  const point = getBackdropPoint(event.clientX, event.clientY);
  const placement = armoryPlacements[target.id];

  placement.x = point.x - armoryEditorState.dragOffsetX;
  placement.y = point.y - armoryEditorState.dragOffsetY;
  refreshArmoryPlacementTranscript();
  layoutArmoryHotspots();
}

function handleArmoryPointerUp() {
  armoryEditorState.draggingItemId = null;
}

function handleArmoryClick(event) {
  if (
    armoryEditorState.active
    || armoryModal?.classList.contains("is-open")
    || dossierModal?.classList.contains("is-open")
    || halLogin?.classList.contains("is-open")
    || event.target.closest?.(ARMORY_INTERACTION_EXCLUSIONS)
  ) {
    return;
  }

  const point = getBackdropPoint(event.clientX, event.clientY);
  const item = getItemFromId(armoryEditorState.hoveredItemId) ?? findArmoryItemAtPoint(point);

  if (!item) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  openArmoryItem(item, armoryLayer);
}

function nudgeSelectedArmoryItem(key, multiplier) {
  const target = getEditorTargetById(armoryEditorState.selectedItemId);

  if (!armoryEditorState.active || !target) {
    return false;
  }

  const amount = multiplier;

  if (target.kind === "shadow") {
    const metrics = getShadowEditorMetrics(target.room);

    if (!metrics) {
      return false;
    }

    let nextLeftPx = metrics.leftPx;
    let nextTopPx = metrics.topPx;

    if (key === "ArrowLeft") {
      nextLeftPx -= amount;
    } else if (key === "ArrowRight") {
      nextLeftPx += amount;
    } else if (key === "ArrowUp") {
      nextTopPx -= amount;
    } else if (key === "ArrowDown") {
      nextTopPx += amount;
    } else {
      return false;
    }

    updateShadowPlacementFromPixels(target.room, {
      leftPx: nextLeftPx,
      topPx: nextTopPx,
      widthPx: metrics.widthPx,
      heightPx: metrics.heightPx,
      boundsWidth: metrics.boundsWidth,
      boundsHeight: metrics.boundsHeight,
    });
    refreshArmoryPlacementTranscript();
    applyCharacterShadowPlacement();
    return true;
  }

  if (target.kind === "flicker") {
    if (key === "ArrowLeft") {
      target.effect.x -= amount;
    } else if (key === "ArrowRight") {
      target.effect.x += amount;
    } else if (key === "ArrowUp") {
      target.effect.y -= amount;
    } else if (key === "ArrowDown") {
      target.effect.y += amount;
    } else {
      return false;
    }

    refreshArmoryPlacementTranscript();
    layoutFlickerEffects();
    return true;
  }

  const placement = armoryPlacements[target.id];

  if (key === "ArrowLeft") {
    placement.x -= amount;
  } else if (key === "ArrowRight") {
    placement.x += amount;
  } else if (key === "ArrowUp") {
    placement.y -= amount;
  } else if (key === "ArrowDown") {
    placement.y += amount;
  } else {
    return false;
  }

  refreshArmoryPlacementTranscript();
  layoutArmoryHotspots();
  return true;
}

function handleArmoryWheel(event) {
  if (!armoryEditorState.active) {
    return;
  }

  const directFlickerHandle = event.target.closest?.(".flicker-led__handle");
  const directFlicker = event.target.closest?.(".flicker-led");
  const directShadowHandle = event.target.closest?.(".stasis-bay__shadow-handle");
  const directShadow = event.target.closest?.(".stasis-bay__shadow");
  const directSilhouette = event.target.closest?.(".armory-silhouette");
  const targetId = directFlickerHandle?.closest(".flicker-led")?.dataset.flickerId
    ?? directFlicker?.dataset.flickerId
    ?? directShadowHandle?.dataset.shadowTarget
    ?? directShadow?.dataset.shadowTarget
    ?? directSilhouette?.dataset.armoryItem
    ?? null;
  const target = getEditorTargetById(targetId);

  if (!target) {
    return;
  }

  event.preventDefault();
  selectArmoryEditorItem(target);
  scaleSelectedArmoryItem(event.deltaY < 0 ? 1.035 : 0.965);
}

function openArmoryItem(item, trigger) {
  if (
    !armoryModal
    || !armoryModalImage
    || !armoryModalTitle
    || !armoryModalDescription
  ) {
    return;
  }

  setArmoryHoverItem(null);
  lastArmoryFocus = trigger ?? document.activeElement;
  armoryModalImage.src = item.image;
  armoryModalImage.alt = item.title;
  armoryModalTitle.textContent = item.title;
  armoryModalDescription.textContent = item.description;
  armoryModal.classList.add("is-open");
  armoryModal.inert = false;
  armoryModal.removeAttribute("inert");
  armoryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-armory-modal");
  playOneShot(audioTracks.uiClick, 0.14);

  window.setTimeout(() => {
    armoryModalClose?.focus();
  }, 0);
}

function closeArmoryItem(options = {}) {
  if (!armoryModal || !armoryModal.classList.contains("is-open")) {
    return;
  }

  armoryModal.classList.remove("is-open");
  armoryModal.inert = true;
  armoryModal.setAttribute("inert", "");
  armoryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-armory-modal");

  if (options.restoreFocus !== false && typeof lastArmoryFocus?.focus === "function") {
    lastArmoryFocus.focus();
  }
}

function renderDossierParagraphs(lines) {
  return lines.map((line) => `<p>${line}</p>`).join("");
}

function resetDossierScroll() {
  if (!dossierModalBody) {
    return;
  }

  dossierModalBody.scrollTop = 0;
}

function updateDossierTrigger() {
  if (!dossierTrigger) {
    return;
  }

  const dossier = CHARACTER_DOSSIERS[activeRoom];

  dossierTrigger.setAttribute("aria-label", `Apri bio e diario di bordo di ${CHARACTER_PROFILES[activeRoom].name}`);
  if (dossierTriggerLabel) {
    dossierTriggerLabel.textContent = dossier.triggerLabel;
  }
  if (dossierTriggerHint) {
    dossierTriggerHint.textContent = dossier.triggerHint;
  }
}

function setDossierTab(nextTab) {
  if (!dossierModalBio || !dossierModalLog) {
    return;
  }

  dossierModalState.tab = nextTab === "log" ? "log" : "bio";

  for (const tab of dossierModalTabs) {
    const isActive = tab.dataset.dossierTab === dossierModalState.tab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  }

  const bioPanel = document.getElementById("dossier-panel-bio");
  const logPanel = document.getElementById("dossier-panel-log");
  const isBioActive = dossierModalState.tab === "bio";

  bioPanel?.classList.toggle("is-active", isBioActive);
  logPanel?.classList.toggle("is-active", !isBioActive);
  if (bioPanel) {
    bioPanel.hidden = !isBioActive;
  }
  if (logPanel) {
    logPanel.hidden = isBioActive;
  }

  resetDossierScroll();
}

function renderDossierModal() {
  const dossier = CHARACTER_DOSSIERS[dossierModalState.room];

  if (
    !dossier
    || !dossierModalImage
    || !dossierModalEyebrow
    || !dossierModalTitle
    || !dossierModalBio
    || !dossierModalLog
  ) {
    return;
  }

  dossierModalImage.src = dossier.image;
  dossierModalImage.alt = dossier.title;
  dossierModalEyebrow.textContent = dossier.eyebrow;
  dossierModalTitle.textContent = dossier.title;
  dossierModalBio.innerHTML = renderDossierParagraphs(dossier.bio);
  dossierModalLog.innerHTML = renderDossierParagraphs(dossier.log);
  setDossierTab(dossierModalState.tab);
}

function openDossierModal(room = activeRoom, trigger = dossierTrigger) {
  if (!dossierModal) {
    return;
  }

  dossierModalState.room = room;
  dossierModalState.tab = "bio";
  closeHalLogin({ restoreFocus: false });
  closeArmoryItem({ restoreFocus: false });
  renderDossierModal();
  resetDossierScroll();
  lastArmoryFocus = trigger ?? document.activeElement;
  dossierModal.classList.add("is-open");
  dossierModal.inert = false;
  dossierModal.removeAttribute("inert");
  dossierModal.setAttribute("aria-hidden", "false");
  dossierTrigger?.setAttribute("aria-expanded", "true");
  document.body.classList.add("has-armory-modal");
  playOneShot(audioTracks.uiClick, 0.14);

  window.setTimeout(() => {
    dossierModalClose?.focus();
  }, 0);
}

function closeDossierModal(options = {}) {
  if (!dossierModal || !dossierModal.classList.contains("is-open")) {
    return;
  }

  dossierModal.classList.remove("is-open");
  dossierModal.inert = true;
  dossierModal.setAttribute("inert", "");
  dossierModal.setAttribute("aria-hidden", "true");
  dossierTrigger?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("has-armory-modal");

  if (options.restoreFocus !== false && typeof lastArmoryFocus?.focus === "function") {
    lastArmoryFocus.focus();
  }
}

function handleDossierModalWheel(event) {
  if (!dossierModal?.classList.contains("is-open") || !dossierModalBody) {
    return;
  }

  const maxScrollTop = dossierModalBody.scrollHeight - dossierModalBody.clientHeight;
  if (maxScrollTop <= 0 || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
    return;
  }

  event.preventDefault();
  const nextScrollTop = Math.min(
    maxScrollTop,
    Math.max(0, dossierModalBody.scrollTop + event.deltaY),
  );
  dossierModalBody.scrollTop = nextScrollTop;
}

function openHalLogin() {
  if (!halLogin || !halPassword) {
    return;
  }

  lastHalFocus = document.activeElement;
  halLogin.classList.add("is-open");
  halLogin.inert = false;
  halLogin.removeAttribute("inert");
  halLogin.setAttribute("aria-hidden", "false");
  halPassword.value = "";

  if (halLoginError) {
    halLoginError.hidden = true;
  }

  window.setTimeout(() => {
    halPassword.focus();
  }, 0);
}

function closeHalLogin(options = {}) {
  if (!halLogin || !halLogin.classList.contains("is-open")) {
    return;
  }

  halLogin.classList.remove("is-open");
  halLogin.inert = true;
  halLogin.setAttribute("inert", "");
  halLogin.setAttribute("aria-hidden", "true");

  if (options.restoreFocus !== false && typeof lastHalFocus?.focus === "function") {
    lastHalFocus.focus();
  }
}

function submitHalLogin(event) {
  event.preventDefault();

  if (halPassword?.value === ARMORY_PASSWORD) {
    enterArmoryEditor();
    return;
  }

  if (halLoginError) {
    halLoginError.hidden = false;
  }

  halPassword?.select();
}

function layoutStasisBay() {
  const { offsetX, offsetY, scale } = getBackdropMetrics();

  stasisBay.style.left = `${offsetX + STASIS_RECT.x * scale}px`;
  stasisBay.style.top = `${offsetY + STASIS_RECT.y * scale}px`;
  stasisBay.style.width = `${STASIS_RECT.width * scale}px`;
  stasisBay.style.height = `${STASIS_RECT.height * scale}px`;
  applyCharacterShadowPlacement();
}

function getCorridorLaneMetrics() {
  const { offsetX, offsetY, scale, renderedWidth } = getBackdropMetrics();
  const visibleLeft = Math.max(0, offsetX);
  const visibleRight = Math.min(window.innerWidth, offsetX + renderedWidth);
  const sideMargin = window.innerWidth <= 800
    ? Math.max(12, window.innerWidth * 0.03)
    : Math.max(36, window.innerWidth * 0.045);
  const laneLeft = visibleLeft + sideMargin;
  const laneRight = visibleRight - sideMargin;
  const laneTop = Math.max(0, offsetY + ROBOT_FLOOR_BAND.top * scale);
  const laneBottom = Math.min(window.innerHeight, offsetY + ROBOT_FLOOR_BAND.bottom * scale);

  return {
    scale,
    laneLeft,
    laneRight,
    laneTop,
    laneBottom,
    bayWidth: Math.max(160, laneRight - laneLeft),
    bayHeight: Math.max(90, laneBottom - laneTop),
  };
}

function applyRobotTransform() {
  if (!robotCleaner) {
    return;
  }

  robotCleaner.style.setProperty("--robot-x", `${robotState.position}px`);
  robotCleaner.style.setProperty("--robot-dir", robotState.direction);
}

function layoutRobotBay() {
  if (!robotBay || !robotCleaner) {
    return;
  }

  const {
    scale,
    laneLeft,
    laneTop,
    bayWidth,
    bayHeight,
  } = getCorridorLaneMetrics();
  const previousMaxX = Math.max(1, robotState.maxX);
  const progress = robotState.position / previousMaxX;
  const robotWidth = Math.max(
    window.innerWidth <= 800 ? 210 : 290,
    Math.min(window.innerWidth <= 800 ? 340 : 500, ROBOT_BASE_WIDTH * scale),
  );

  robotBay.style.left = `${laneLeft}px`;
  robotBay.style.top = `${laneTop}px`;
  robotBay.style.width = `${bayWidth}px`;
  robotBay.style.height = `${bayHeight}px`;
  robotCleaner.style.setProperty("--robot-width", `${robotWidth}px`);

  robotState.maxX = Math.max(0, bayWidth - robotWidth);
  robotState.position = Math.min(
    robotState.maxX,
    Math.max(robotState.minX, robotState.maxX * (Number.isFinite(progress) ? progress : 0.5)),
  );
  applyRobotTransform();
}

function getBrunoWalkAnimation() {
  return brunoWalkerState.direction >= 0
    ? brunoWalkAnimations.right
    : brunoWalkAnimations.left;
}

function applyBrunoWalkerTransform() {
  if (!brunoWalker) {
    return;
  }

  brunoWalker.style.setProperty("--bruno-walker-x", `${brunoWalkerState.position}px`);
}

function chooseBrunoSpawnX() {
  const maxX = brunoWalkerState.maxX;

  if (maxX <= 0) {
    return 0;
  }

  return Math.random() * maxX;
}

function layoutBrunoWalkBay() {
  if (!brunoWalkBay || !brunoWalker) {
    return;
  }

  const {
    scale,
    laneLeft,
    laneTop,
    bayWidth,
    bayHeight,
  } = getCorridorLaneMetrics();
  const previousMaxX = Math.max(1, brunoWalkerState.maxX);
  const progress = brunoWalkerState.position / previousMaxX;
  const brunoWidth = Math.max(
    window.innerWidth <= 800 ? 142 : 182,
    Math.min(window.innerWidth <= 800 ? 214 : 252, BRUNO_WALK_BASE_WIDTH * scale * 1.12),
  );

  brunoWalkBay.style.left = `${laneLeft}px`;
  brunoWalkBay.style.top = `${laneTop}px`;
  brunoWalkBay.style.width = `${bayWidth}px`;
  brunoWalkBay.style.height = `${bayHeight}px`;
  brunoWalker.style.setProperty("--bruno-walker-width", `${brunoWidth}px`);

  brunoWalkerState.maxX = Math.max(0, bayWidth - brunoWidth);
  brunoWalkerState.position = Math.min(
    brunoWalkerState.maxX,
    Math.max(brunoWalkerState.minX, brunoWalkerState.maxX * (Number.isFinite(progress) ? progress : 0.5)),
  );
  applyBrunoWalkerTransform();
}

function showBrunoWalker() {
  if (!brunoWalkBay || !brunoWalkFrame) {
    return;
  }

  brunoWalkerState.visible = true;
  brunoWalkBay.classList.add("is-active");
  brunoWalkBay.setAttribute("aria-hidden", "false");
  brunoWalkerState.position = chooseBrunoSpawnX();
  brunoWalkerState.direction = Math.random() < 0.5 ? -1 : 1;
  brunoWalkerState.frameIndex = 0;
  brunoWalkerState.lastFrameTime = 0;
  brunoWalkerState.lastMoveTime = 0;
  brunoWalkFrame.src = getBrunoWalkAnimation().frames[0];
  applyBrunoWalkerTransform();
}

function hideBrunoWalker() {
  if (!brunoWalkBay) {
    return;
  }

  brunoWalkerState.visible = false;
  brunoWalkerState.lastFrameTime = 0;
  brunoWalkerState.lastMoveTime = 0;
  brunoWalkBay.classList.remove("is-active");
  brunoWalkBay.setAttribute("aria-hidden", "true");
}

function getAlienWalkAnimation() {
  return alienWalkerState.direction >= 0
    ? alienWalkAnimations.right
    : alienWalkAnimations.left;
}

function applyAlienWalkerTransform() {
  if (!alienWalker) {
    return;
  }

  alienWalker.style.setProperty("--alien-walker-x", `${alienWalkerState.position}px`);
}

function chooseAlienSpawnX() {
  const maxX = alienWalkerState.maxX;

  if (maxX <= 0) {
    return 0;
  }

  return Math.random() * maxX;
}

function layoutAlienWalkBay() {
  if (!alienWalkBay || !alienWalker) {
    return;
  }

  const {
    scale,
    laneLeft,
    laneTop,
    bayWidth,
    bayHeight,
  } = getCorridorLaneMetrics();
  const previousMaxX = Math.max(1, alienWalkerState.maxX);
  const progress = alienWalkerState.position / previousMaxX;
  const alienWidth = Math.max(
    window.innerWidth <= 800 ? 132 : 156,
    Math.min(window.innerWidth <= 800 ? 220 : 248, ALIEN_WALK_BASE_WIDTH * scale),
  );

  alienWalkBay.style.left = `${laneLeft}px`;
  alienWalkBay.style.top = `${laneTop}px`;
  alienWalkBay.style.width = `${bayWidth}px`;
  alienWalkBay.style.height = `${bayHeight}px`;
  alienWalker.style.setProperty("--alien-walker-width", `${alienWidth}px`);

  alienWalkerState.maxX = Math.max(0, bayWidth - alienWidth);
  alienWalkerState.position = Math.min(
    alienWalkerState.maxX,
    Math.max(alienWalkerState.minX, alienWalkerState.maxX * (Number.isFinite(progress) ? progress : 0.5)),
  );
  applyAlienWalkerTransform();
}

function showAlienWalker() {
  if (!alienWalkBay || !alienWalkFrame) {
    return;
  }

  alienWalkerState.visible = true;
  alienWalkBay.classList.add("is-active");
  alienWalkBay.setAttribute("aria-hidden", "false");
  alienWalkerState.position = chooseAlienSpawnX();
  alienWalkerState.direction = Math.random() < 0.5 ? -1 : 1;
  alienWalkerState.frameIndex = 0;
  alienWalkerState.lastFrameTime = 0;
  alienWalkerState.lastMoveTime = 0;
  alienWalkFrame.src = getAlienWalkAnimation().frames[0];
  applyAlienWalkerTransform();
  syncSceneAudio();
}

function hideAlienWalker() {
  if (!alienWalkBay) {
    return;
  }

  alienWalkerState.visible = false;
  alienWalkerState.lastFrameTime = 0;
  alienWalkerState.lastMoveTime = 0;
  alienWalkBay.classList.remove("is-active");
  alienWalkBay.setAttribute("aria-hidden", "true");
  syncSceneAudio();
}

function isRoomReleased(room = activeRoom) {
  if (room === "bruno") {
    return brunoReleaseState.released;
  }

  if (room === "alieno") {
    return alienReleaseState.released;
  }

  return false;
}

function syncStasisOccupantVisibility() {
  if (!stasisBay) {
    return;
  }

  const isOccupantHidden = isRoomReleased(activeRoom);
  stasisBay.classList.toggle("stasis-bay--occupant-hidden", isOccupantHidden);
}

function updateBrunoToggle() {
  if (!brunoToggle || !brunoToggleHint) {
    return;
  }

  const isBrunoRoomActive = activeRoom === "bruno";
  const isReleased = brunoReleaseState.released;

  brunoToggle.hidden = !isBrunoRoomActive;
  brunoToggle.setAttribute("aria-hidden", String(!isBrunoRoomActive));
  brunoToggle.setAttribute("aria-pressed", String(isReleased));
  brunoToggle.setAttribute(
    "aria-label",
    isReleased
      ? "Richiama Bruno nella cella criogenica"
      : "Libera Bruno dalla cella criogenica",
  );
  brunoToggleHint.textContent = isReleased ? "RICHIAMA UNITÀ" : "LIBERA UNITÀ";
}

function updateDonatellaToggle() {
  if (!donatellaToggle || !donatellaToggleHint) {
    return;
  }

  const isDonatellaRoomActive = activeRoom === "donatella";

  donatellaToggle.hidden = !isDonatellaRoomActive;
  donatellaToggle.setAttribute("aria-hidden", String(!isDonatellaRoomActive));
  donatellaToggle.setAttribute("aria-pressed", "false");
  donatellaToggle.setAttribute(
    "aria-label",
    "Animazione di rilascio di Donatella disponibile nella fase 2",
  );
  donatellaToggleHint.textContent = "WALK FASE 2";
}

function updateAlienToggle() {
  if (!alienToggle || !alienToggleHint) {
    return;
  }

  const isAlienRoomActive = activeRoom === "alieno";
  const isReleased = alienReleaseState.released;

  alienToggle.hidden = !isAlienRoomActive;
  alienToggle.setAttribute("aria-hidden", String(!isAlienRoomActive));
  alienToggle.setAttribute("aria-pressed", String(isReleased));
  alienToggle.setAttribute(
    "aria-label",
    isReleased
      ? "Contieni alieno nella cella criogenica"
      : "Libera alieno dalla cella criogenica",
  );
  alienToggleHint.textContent = isReleased ? "CONTIENI XENO" : "LIBERA XENO";
}

function syncBrunoWalkerVisibility() {
  if (activeRoom === "bruno" && brunoReleaseState.released) {
    if (!brunoWalkerState.visible) {
      showBrunoWalker();
    }
    return;
  }

  if (brunoWalkerState.visible) {
    hideBrunoWalker();
  }
}

function syncAlienWalkerVisibility() {
  if (activeRoom === "alieno" && alienReleaseState.released) {
    if (!alienWalkerState.visible) {
      showAlienWalker();
    }
    return;
  }

  if (alienWalkerState.visible) {
    hideAlienWalker();
  }
}

function resolveInitialRoom() {
  const roomFromSearch = new URLSearchParams(window.location.search).get("room");
  const roomFromHash = window.location.hash.replace(/^#/, "");
  const requestedRoom = (roomFromSearch || roomFromHash || "bruno").trim().toLowerCase();

  return CHARACTER_PROFILES[requestedRoom] ? requestedRoom : "bruno";
}

function resolveInitialReleased(...paramNames) {
  const searchParams = new URLSearchParams(window.location.search);
  const releaseMode = paramNames
    .map((paramName) => searchParams.get(paramName))
    .find((value) => value !== null);
  const normalizedMode = (releaseMode || "").trim().toLowerCase();

  return ["1", "free", "released", "libero", "walk"].includes(normalizedMode);
}

let activeRoom = resolveInitialRoom();
brunoReleaseState.released = resolveInitialReleased("bruno");
alienReleaseState.released = resolveInitialReleased("alien", "alieno");
let characterFrameIndex = 0;
let characterLastFrameTime = 0;

function updateRoomNavigation() {
  const activeProfile = CHARACTER_PROFILES[activeRoom];
  const previousRoom = getAdjacentRoom(activeRoom, -1);
  const nextRoom = getAdjacentRoom(activeRoom, 1);

  if (roomLabel) {
    roomLabel.textContent = activeProfile.roomLabel;
  }

  if (stasisBay) {
    stasisBay.setAttribute("aria-label", `Cella criogenica di ${activeProfile.name}`);
    stasisBay.classList.toggle("stasis-bay--donatella", activeRoom === "donatella");
    stasisBay.classList.toggle("stasis-bay--alieno", activeRoom === "alieno");
  }

  applyCharacterShadowPlacement();
  updateDossierTrigger();
  syncStasisOccupantVisibility();
  updateBrunoToggle();
  updateDonatellaToggle();
  updateAlienToggle();
  syncBrunoWalkerVisibility();
  syncAlienWalkerVisibility();

  if (brunoFrame) {
    brunoFrame.alt = activeProfile.alt;
    brunoFrame.src = characterAnimations[activeRoom].frames[characterFrameIndex]
      ?? characterAnimations[activeRoom].frames[0];
  }

  roomPrev?.classList.toggle("is-visible", Boolean(previousRoom));
  roomNext?.classList.toggle("is-visible", Boolean(nextRoom));

  if (roomPrev) {
    roomPrev.setAttribute(
      "aria-label",
      previousRoom
        ? `Vai alla stanza di ${CHARACTER_PROFILES[previousRoom].name}`
        : "Nessuna stanza precedente",
    );
  }

  if (roomNext) {
    roomNext.setAttribute(
      "aria-label",
      nextRoom
        ? `Vai alla stanza di ${CHARACTER_PROFILES[nextRoom].name}`
        : "Nessuna stanza successiva",
    );
  }
}

function setActiveRoom(nextRoom) {
  if (!CHARACTER_PROFILES[nextRoom] || activeRoom === nextRoom) {
    return;
  }

  activeRoom = nextRoom;
  characterFrameIndex = 0;
  characterLastFrameTime = 0;
  updateRoomNavigation();
  playOneShot(audioTracks.uiClick, 0.12);
}

function animateCharacter(timestamp) {
  if (!characterLastFrameTime) {
    characterLastFrameTime = timestamp;
  }

  const frames = characterAnimations[activeRoom].frames;
  const frameDuration = 1000 / CHARACTER_FRAME_RATE;
  if (timestamp - characterLastFrameTime >= frameDuration) {
    characterFrameIndex = (characterFrameIndex + 1) % frames.length;
    brunoFrame.src = frames[characterFrameIndex];
    characterLastFrameTime = timestamp;
  }

  window.requestAnimationFrame(animateCharacter);
}

function setRobotMode(mode) {
  if (!robotFrame || !robotAnimations[mode]) {
    return;
  }

  robotState.mode = mode;
  robotState.frameIndex = 0;
  robotState.lastFrameTime = 0;
  robotFrame.src = robotAnimations[mode].frames[0];
}

function chooseRobotIdleMode(excludingMode) {
  const candidates = ROBOT_IDLE_MODES.filter((mode) => mode !== excludingMode);
  const pool = candidates.length ? candidates : ROBOT_IDLE_MODES;
  return pool[Math.floor(Math.random() * pool.length)];
}

function chooseRobotLoopBudget() {
  return 1 + Math.floor(Math.random() * 3);
}

function startRobotIdleSequence() {
  robotState.loopsUntilModeSwap = chooseRobotLoopBudget();
  setRobotMode(chooseRobotIdleMode());
}

function advanceRobotIdleSequence() {
  robotState.loopsUntilModeSwap -= 1;

  if (robotState.loopsUntilModeSwap > 0) {
    return robotAnimations[robotState.mode];
  }

  robotState.loopsUntilModeSwap = chooseRobotLoopBudget();
  const nextMode = chooseRobotIdleMode(robotState.mode);
  setRobotMode(nextMode);
  return robotAnimations[nextMode];
}

function chooseRobotSpawnX() {
  const maxX = robotState.maxX;
  if (maxX <= 0) {
    return 0;
  }

  return Math.random() * maxX;
}

function updateRobotToggle() {
  if (!robotToggle || !robotToggleHint) {
    return;
  }

  robotToggle.setAttribute("aria-pressed", String(robotState.visible));
  robotToggleHint.textContent = robotState.visible ? "NASCONDI BOT" : "EVOCA ROBOT";
}

function showRobot() {
  if (!robotBay) {
    return;
  }

  robotState.visible = true;
  robotBay.classList.add("is-active");
  robotBay.setAttribute("aria-hidden", "false");
  robotState.position = chooseRobotSpawnX();
  robotState.direction = Math.random() < 0.5 ? -1 : 1;
  robotCleaner.style.transitionDuration = "0ms";
  applyRobotTransform();
  startRobotIdleSequence();
  updateRobotToggle();
  playOneShot(audioTracks.robotToggle, 0.2);
  syncSceneAudio();
}

function hideRobot() {
  if (!robotBay) {
    return;
  }

  robotState.visible = false;
  robotBay.classList.remove("is-active");
  robotBay.setAttribute("aria-hidden", "true");
  updateRobotToggle();
  playOneShot(audioTracks.robotToggle, 0.14);
  syncSceneAudio();
}

function toggleRobot() {
  if (robotState.visible) {
    hideRobot();
    return;
  }

  showRobot();
}

function setBrunoReleased(nextReleased) {
  if (brunoReleaseState.released === nextReleased) {
    updateBrunoToggle();
    syncStasisOccupantVisibility();
    syncBrunoWalkerVisibility();
    return;
  }

  brunoReleaseState.released = nextReleased;
  updateBrunoToggle();
  syncStasisOccupantVisibility();
  syncBrunoWalkerVisibility();
  playOneShot(audioTracks.uiClick, nextReleased ? 0.16 : 0.12);
}

function toggleBrunoRelease() {
  setBrunoReleased(!brunoReleaseState.released);
}

function setAlienReleased(nextReleased) {
  if (alienReleaseState.released === nextReleased) {
    updateAlienToggle();
    syncStasisOccupantVisibility();
    syncAlienWalkerVisibility();
    syncSceneAudio();
    return;
  }

  alienReleaseState.released = nextReleased;
  updateAlienToggle();
  syncStasisOccupantVisibility();
  syncAlienWalkerVisibility();
  syncSceneAudio();

  if (nextReleased) {
    playOneShot(audioTracks.alienAlert, 0.34);
  } else {
    playOneShot(audioTracks.uiClick, 0.12);
  }
}

function toggleAlienRelease() {
  setAlienReleased(!alienReleaseState.released);
}

function animateRobot(timestamp) {
  if (robotState.visible && robotFrame) {
    const animation = robotAnimations[robotState.mode];

    if (!robotState.lastFrameTime) {
      robotState.lastFrameTime = timestamp;
    }

    const frameDuration = 1000 / animation.fps;
    if (timestamp - robotState.lastFrameTime >= frameDuration) {
      const nextFrameIndex = robotState.frameIndex + 1;

      if (nextFrameIndex >= animation.frames.length) {
        robotState.frameIndex = 0;
        const nextAnimation = advanceRobotIdleSequence();
        robotFrame.src = nextAnimation.frames[0];
      } else {
        robotState.frameIndex = nextFrameIndex;
        robotFrame.src = animation.frames[robotState.frameIndex];
      }

      robotState.lastFrameTime = timestamp;
    }
  }

  window.requestAnimationFrame(animateRobot);
}

function animateBrunoWalker(timestamp) {
  if (brunoWalkerState.visible && brunoWalkFrame) {
    if (!brunoWalkerState.lastMoveTime) {
      brunoWalkerState.lastMoveTime = timestamp;
    }

    const moveDelta = timestamp - brunoWalkerState.lastMoveTime;
    brunoWalkerState.lastMoveTime = timestamp;

    if (brunoWalkerState.maxX > 0) {
      brunoWalkerState.position += (BRUNO_WALK_SPEED * moveDelta * brunoWalkerState.direction) / 1000;

      if (brunoWalkerState.position <= brunoWalkerState.minX) {
        brunoWalkerState.position = brunoWalkerState.minX;
        brunoWalkerState.direction = 1;
        brunoWalkerState.frameIndex = 0;
        brunoWalkFrame.src = brunoWalkAnimations.right.frames[0];
      } else if (brunoWalkerState.position >= brunoWalkerState.maxX) {
        brunoWalkerState.position = brunoWalkerState.maxX;
        brunoWalkerState.direction = -1;
        brunoWalkerState.frameIndex = 0;
        brunoWalkFrame.src = brunoWalkAnimations.left.frames[0];
      }

      applyBrunoWalkerTransform();
    }

    if (!brunoWalkerState.lastFrameTime) {
      brunoWalkerState.lastFrameTime = timestamp;
    }

    const animation = getBrunoWalkAnimation();
    const frameDuration = 1000 / animation.fps;
    if (timestamp - brunoWalkerState.lastFrameTime >= frameDuration) {
      brunoWalkerState.frameIndex = (brunoWalkerState.frameIndex + 1) % animation.frames.length;
      brunoWalkFrame.src = animation.frames[brunoWalkerState.frameIndex];
      brunoWalkerState.lastFrameTime = timestamp;
    }
  }

  window.requestAnimationFrame(animateBrunoWalker);
}

function animateAlienWalker(timestamp) {
  if (alienWalkerState.visible && alienWalkFrame) {
    if (!alienWalkerState.lastMoveTime) {
      alienWalkerState.lastMoveTime = timestamp;
    }

    const moveDelta = timestamp - alienWalkerState.lastMoveTime;
    alienWalkerState.lastMoveTime = timestamp;

    if (alienWalkerState.maxX > 0) {
      alienWalkerState.position += (ALIEN_WALK_SPEED * moveDelta * alienWalkerState.direction) / 1000;

      if (alienWalkerState.position <= alienWalkerState.minX) {
        alienWalkerState.position = alienWalkerState.minX;
        alienWalkerState.direction = 1;
        alienWalkerState.frameIndex = 0;
        alienWalkFrame.src = alienWalkAnimations.right.frames[0];
      } else if (alienWalkerState.position >= alienWalkerState.maxX) {
        alienWalkerState.position = alienWalkerState.maxX;
        alienWalkerState.direction = -1;
        alienWalkerState.frameIndex = 0;
        alienWalkFrame.src = alienWalkAnimations.left.frames[0];
      }

      applyAlienWalkerTransform();
    }

    if (!alienWalkerState.lastFrameTime) {
      alienWalkerState.lastFrameTime = timestamp;
    }

    const animation = getAlienWalkAnimation();
    const frameDuration = 1000 / animation.fps;
    if (timestamp - alienWalkerState.lastFrameTime >= frameDuration) {
      alienWalkerState.frameIndex = (alienWalkerState.frameIndex + 1) % animation.frames.length;
      alienWalkFrame.src = animation.frames[alienWalkerState.frameIndex];
      alienWalkerState.lastFrameTime = timestamp;
    }
  }

  window.requestAnimationFrame(animateAlienWalker);
}

function animateFlickerEffects(timestamp) {
  for (const effect of flickerEffects) {
    const element = flickerElements.get(effect.id);

    if (!element) {
      continue;
    }

    element.style.setProperty(
      "--flicker-opacity",
      String(updateSingleFlickerRuntime(effect, timestamp).toFixed(3)),
    );
  }

  window.requestAnimationFrame(animateFlickerEffects);
}

function layoutHudPanels() {
  if (!hudFooter || !stasisBay) {
    return;
  }

  const footerRect = hudFooter.getBoundingClientRect();
  const bayRect = stasisBay.getBoundingClientRect();
  const isCompact = window.innerWidth <= 800;
  const sideGap = isCompact ? 12 : 24;
  const bayClearance = isCompact ? 12 : 24;
  const panelGap = isCompact ? 12 : 14;
  const healthPanel = document.getElementById("panel-health");
  const cryoPanel = document.getElementById("panel-cryo");
  const orderedPanels = [healthPanel, cryoPanel].filter(Boolean);

  if (isCompact) {
    for (const panel of orderedPanels) {
      panel.style.left = "";
      panel.style.right = "";
      panel.style.top = "";
      panel.style.bottom = "";
    }
    return;
  }

  const openPanels = orderedPanels.filter((panel) => panel.classList.contains("is-open"));
  const activePanels = openPanels.length ? openPanels : orderedPanels;
  const totalHeight = activePanels.reduce((sum, panel) => sum + panel.offsetHeight, 0)
    + panelGap * Math.max(0, activePanels.length - 1);
  const stackTop = bayRect.top + (bayRect.height - totalHeight) / 2;
  const singleTop = bayRect.top + (bayRect.height - activePanels[0].offsetHeight) / 2;
  const maxPanelWidth = Math.max(...orderedPanels.map((panel) => panel.offsetWidth));
  const panelLeft = Math.min(
    window.innerWidth - sideGap - maxPanelWidth,
    bayRect.right + bayClearance,
  );

  let currentTop = stackTop;
  for (const panel of activePanels) {
    panel.style.left = `${panelLeft - footerRect.left}px`;
    panel.style.right = "auto";
    panel.style.top = `${currentTop - footerRect.top}px`;
    panel.style.bottom = "auto";
    currentTop += panel.offsetHeight + panelGap;
  }

  for (const panel of orderedPanels) {
    if (activePanels.includes(panel)) {
      continue;
    }

    panel.style.left = `${panelLeft - footerRect.left}px`;
    panel.style.right = "auto";
    panel.style.top = `${singleTop - footerRect.top}px`;
    panel.style.bottom = "auto";
  }
}

function layoutHud() {
  layoutHudPanels();
}

function closeHudPanel(trigger) {
  const panelId = trigger.dataset.panelTarget;
  const panel = document.getElementById(panelId);

  if (!panel) {
    return;
  }

  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  trigger.setAttribute("aria-expanded", "false");
}

function toggleHudPanel(trigger) {
  const panelId = trigger.dataset.panelTarget;
  const panel = document.getElementById(panelId);

  if (!panel) {
    return;
  }

  const nextState = !panel.classList.contains("is-open");
  panel.classList.toggle("is-open", nextState);
  panel.setAttribute("aria-hidden", String(!nextState));
  trigger.setAttribute("aria-expanded", String(nextState));
  layoutHud();
}

for (const trigger of hudTriggers) {
  trigger.addEventListener("click", () => {
    playOneShot(audioTracks.uiClick);
    toggleHudPanel(trigger);
  });
}

dossierTrigger?.addEventListener("click", () => {
  if (armoryEditorState.active) {
    return;
  }

  openDossierModal(activeRoom, dossierTrigger);
});

brunoToggle?.addEventListener("click", () => {
  toggleBrunoRelease();
});

donatellaToggle?.addEventListener("click", () => {
  playOneShot(audioTracks.uiClick, 0.12);
  showArmoryToast("Walk Donatella in preparazione");
});

alienToggle?.addEventListener("click", () => {
  toggleAlienRelease();
});

audioToggle?.addEventListener("click", () => {
  toggleSceneAudio();
});

roomNext?.addEventListener("click", () => {
  const nextRoom = getAdjacentRoom(activeRoom, 1);

  if (nextRoom) {
    setActiveRoom(nextRoom);
  }
});

roomPrev?.addEventListener("click", () => {
  const previousRoom = getAdjacentRoom(activeRoom, -1);

  if (previousRoom) {
    setActiveRoom(previousRoom);
  }
});

halTrigger?.addEventListener("click", () => {
  playOneShot(audioTracks.uiClick, 0.14);
  openHalLogin();
});

halLoginForm?.addEventListener("submit", submitHalLogin);

halLoginCancel?.addEventListener("click", () => {
  closeHalLogin();
});

halLogin?.querySelector(".hal-login__scrim")?.addEventListener("click", () => {
  closeHalLogin();
});

armoryModalClose?.addEventListener("click", () => {
  closeArmoryItem();
});

armoryModal?.querySelector(".armory-modal__scrim")?.addEventListener("click", () => {
  if (suppressNextArmoryBackdropClick) {
    suppressNextArmoryBackdropClick = false;
    return;
  }

  closeArmoryItem();
});

dossierModalClose?.addEventListener("click", () => {
  closeDossierModal();
});

dossierModal?.querySelector(".armory-modal__scrim")?.addEventListener("click", () => {
  closeDossierModal();
});

dossierModalPanel?.addEventListener("wheel", handleDossierModalWheel, { passive: false });

for (const tab of dossierModalTabs) {
  tab.addEventListener("click", () => {
    playOneShot(audioTracks.uiClick, 0.12);
    setDossierTab(tab.dataset.dossierTab);
  });
}

armoryEditorSave?.addEventListener("click", () => {
  saveArmoryPlacements();
  saveShadowPlacements();
  saveFlickerEffects();
  refreshArmoryPlacementTranscript();
  showArmoryToast("Sagome, ombre e LED salvati in locale");
  exitArmoryEditor();
});

armoryEditorJsonToggle?.addEventListener("click", () => {
  setArmoryTranscriptOpen(armoryEditorTranscript?.hidden ?? true);
});

armoryEditorExport?.addEventListener("click", () => {
  exportArmoryPlacementsJson();
  showArmoryToast("JSON coordinate scaricato");
});

armoryEditorReset?.addEventListener("click", () => {
  resetArmoryPlacements();
  resetShadowPlacements();
  resetFlickerEffects();
  showArmoryToast("Sagome, ombre e LED ripristinati");
});

armoryEditorExit?.addEventListener("click", () => {
  exitArmoryEditor();
});

armoryEditorAddFlicker?.addEventListener("click", () => {
  addFlickerEffect();
});

armoryEditorRemoveFlicker?.addEventListener("click", () => {
  if (!removeSelectedFlickerEffect()) {
    showArmoryToast("Seleziona un LED da rimuovere");
  }
});

armoryEditorFlickerDimmer?.addEventListener("click", () => {
  if (!changeSelectedFlickerBrightness(-FLICKER_BRIGHTNESS_STEP)) {
    showArmoryToast("Seleziona un LED per regolare la luce");
  }
});

armoryEditorFlickerBrighter?.addEventListener("click", () => {
  if (!changeSelectedFlickerBrightness(FLICKER_BRIGHTNESS_STEP)) {
    showArmoryToast("Seleziona un LED per regolare la luce");
  }
});

armoryEditorFlickerFaster?.addEventListener("click", () => {
  if (!changeSelectedFlickerSlowness(-FLICKER_SLOWNESS_STEP)) {
    showArmoryToast("Seleziona un LED per regolare il disturbo");
  }
});

armoryEditorFlickerSlower?.addEventListener("click", () => {
  if (!changeSelectedFlickerSlowness(FLICKER_SLOWNESS_STEP)) {
    showArmoryToast("Seleziona un LED per regolare il disturbo");
  }
});

for (const scaleButton of document.querySelectorAll("[data-armory-scale]")) {
  scaleButton.addEventListener("click", () => {
    scaleSelectedArmoryItem(Number(scaleButton.dataset.armoryScale));
  });
}

document.addEventListener("pointerdown", handleArmoryPointerDown, true);
document.addEventListener("click", handleArmoryClick, true);
document.addEventListener("pointermove", handleArmoryPointerMove);
document.addEventListener("pointerup", handleArmoryPointerUp);
document.addEventListener("wheel", handleArmoryWheel, { passive: false });

document.addEventListener("keydown", (event) => {
  if (event.key === "Delete" || event.key === "Backspace") {
    if (removeSelectedFlickerEffect()) {
      event.preventDefault();
    }
    return;
  }

  if (event.key === "[" || event.key === "]") {
    const slownessDelta = event.key === "]" ? FLICKER_SLOWNESS_STEP : -FLICKER_SLOWNESS_STEP;

    if (changeSelectedFlickerSlowness(slownessDelta)) {
      event.preventDefault();
    }

    return;
  }

  if (event.key !== "Escape") {
    const nudgeAmount = event.shiftKey ? 10 : 1;

    if (nudgeSelectedArmoryItem(event.key, nudgeAmount)) {
      event.preventDefault();
    }

    return;
  }

  if (halLogin?.classList.contains("is-open")) {
    closeHalLogin();
    return;
  }

  if (dossierModal?.classList.contains("is-open")) {
    closeDossierModal();
    return;
  }

  if (armoryModal?.classList.contains("is-open")) {
    closeArmoryItem();
    return;
  }

  if (armoryEditorState.active) {
    exitArmoryEditor();
    return;
  }

  for (const trigger of hudTriggers) {
    closeHudPanel(trigger);
  }
});

document.addEventListener(
  "pointerdown",
  () => {
    enableSceneAudio();
  },
  { passive: true },
);

document.addEventListener("keydown", () => {
  enableSceneAudio();
});

document.addEventListener("visibilitychange", () => {
  syncSceneAudio();
});

buildArmoryHotspots();
layoutArmoryHotspots();
layoutStasisBay();
layoutRobotBay();
layoutBrunoWalkBay();
layoutAlienWalkBay();
layoutHud();
setupHudTelemetry();
refreshHudTelemetry();
updateAudioToggle();
updateRoomNavigation();
window.setInterval(refreshHudTelemetry, 1100);
window.addEventListener("resize", () => {
  layoutArmoryHotspots();
  layoutStasisBay();
  layoutRobotBay();
  layoutBrunoWalkBay();
  layoutAlienWalkBay();
  layoutHud();
});
window.requestAnimationFrame(animateCharacter);
window.requestAnimationFrame(animateRobot);
window.requestAnimationFrame(animateBrunoWalker);
window.requestAnimationFrame(animateAlienWalker);
window.requestAnimationFrame(animateFlickerEffects);

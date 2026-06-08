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

const BRUNO_FRAME_COUNT = 37;
const BRUNO_FRAME_RATE = 12;
const ROBOT_FRAME_COUNT = 36;
const ROBOT_BASE_WIDTH = 390;
const ROBOT_IDLE_MODES = ["move", "clean"];
const ARMORY_STORAGE_KEY = "space-bruno-armory-placements-v1";
const ARMORY_PASSWORD = "2001";
const ARMORY_ALPHA_THRESHOLD = 24;
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

const hudFooter = document.querySelector(".hud-footer");
const stasisBay = document.getElementById("stasis-bay");
const brunoFrame = document.getElementById("bruno-frame");
const hudTriggers = document.querySelectorAll(".hud-trigger");
const armoryLayer = document.getElementById("armory-layer");
const armoryModal = document.getElementById("armory-modal");
const armoryModalImage = document.getElementById("armory-modal-image");
const armoryModalTitle = document.getElementById("armory-modal-title");
const armoryModalDescription = document.getElementById("armory-modal-description");
const armoryModalClose = document.getElementById("armory-modal-close");
const halTrigger = document.getElementById("hal-trigger");
const halLogin = document.getElementById("hal-login");
const halLoginForm = document.getElementById("hal-login-form");
const halPassword = document.getElementById("hal-password");
const halLoginError = document.getElementById("hal-login-error");
const halLoginCancel = document.getElementById("hal-login-cancel");
const armoryEditor = document.getElementById("armory-editor");
const armoryEditorItem = document.getElementById("armory-editor-item");
const armoryEditorSave = document.getElementById("armory-editor-save");
const armoryEditorReset = document.getElementById("armory-editor-reset");
const armoryEditorExit = document.getElementById("armory-editor-exit");
const armoryToast = document.getElementById("armory-toast");
const robotBay = document.getElementById("robot-bay");
const robotCleaner = document.getElementById("robot-cleaner");
const robotFrame = document.getElementById("robot-frame");
const robotToggle = document.getElementById("robot-toggle");
const robotToggleHint = robotToggle?.querySelector(".hud-trigger__hint");
const audioToggle = document.getElementById("audio-toggle");
const hudTelemetryMetrics = [];
const armoryHotspots = [];
const armoryImageMasks = new Map();
let armoryHoverPreview = null;
let lastArmoryFocus = null;
let lastHalFocus = null;
let armoryPlacements = {};
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

if (armoryModal) {
  armoryModal.inert = true;
  armoryModal.setAttribute("inert", "");
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

const brunoForwardFrames = buildFrames(
  "animazioni/Bruno/IDLE_stasi_criogenica",
  BRUNO_FRAME_COUNT,
);

// Build a ping-pong loop so the animation reverses smoothly instead of snapping.
const brunoFrames = [
  ...brunoForwardFrames,
  ...brunoForwardFrames.slice(1, -1).reverse(),
];

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

preloadFrames(brunoForwardFrames);
preloadFrames([
  ...robotAnimations.move.frames,
  ...robotAnimations.clean.frames,
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
}

function saveArmoryPlacements() {
  try {
    localStorage.setItem(ARMORY_STORAGE_KEY, JSON.stringify(armoryPlacements));
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
  layoutArmoryHotspots();
  updateArmoryEditorStatus();
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
  layoutArmoryHotspots();
}

function layoutArmoryHotspots() {
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
  const selectedItem = getItemFromId(armoryEditorState.selectedItemId);
  armoryEditorItem.textContent = selectedItem ? selectedItem.title : "NESSUNA SAGOMA";
  document.body.classList.toggle("is-armory-editing", armoryEditorState.active);
  layoutArmoryHotspots();
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
  const item = getItemFromId(armoryEditorState.selectedItemId);

  if (!item) {
    return;
  }

  const placement = armoryPlacements[item.id];
  const centerX = placement.x + placement.width / 2;
  const centerY = placement.y + placement.height / 2;
  const nextWidth = clampValue(placement.width * factor, 18, BACKDROP_SIZE.width * 0.42);
  const nextHeight = clampValue(placement.height * factor, 18, BACKDROP_SIZE.height * 0.72);

  armoryPlacements[item.id] = {
    x: centerX - nextWidth / 2,
    y: centerY - nextHeight / 2,
    width: nextWidth,
    height: nextHeight,
  };
  layoutArmoryHotspots();
}

function enterArmoryEditor() {
  armoryEditorState.active = true;
  setArmoryHoverItem(null);
  closeHalLogin({ restoreFocus: false });
  updateArmoryEditorStatus();
}

function exitArmoryEditor() {
  armoryEditorState.active = false;
  armoryEditorState.draggingItemId = null;
  selectArmoryEditorItem(null);
}

function handleArmoryPointerDown(event) {
  if (
    event.button !== 0
    || armoryModal?.classList.contains("is-open")
    || halLogin?.classList.contains("is-open")
    || event.target.closest(".scene-header, .hud-footer, .stasis-bay__controls, .hal-trigger, .armory-editor")
  ) {
    return;
  }

  const directSilhouette = event.target.closest?.(".armory-silhouette");
  const directItem = armoryEditorState.active && directSilhouette
    ? getItemFromId(directSilhouette.dataset.armoryItem)
    : null;
  const point = getBackdropPoint(event.clientX, event.clientY);
  const hoveredItem = !armoryEditorState.active
    ? getItemFromId(armoryEditorState.hoveredItemId)
    : null;
  const item = directItem ?? hoveredItem ?? findArmoryItemAtPoint(point);

  if (!item) {
    return;
  }

  if (!armoryEditorState.active) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  const placement = armoryPlacements[item.id];
  armoryEditorState.draggingItemId = item.id;
  armoryEditorState.dragOffsetX = point.x - placement.x;
  armoryEditorState.dragOffsetY = point.y - placement.y;
  selectArmoryEditorItem(item);

  if (typeof directSilhouette?.setPointerCapture === "function") {
    directSilhouette.setPointerCapture(event.pointerId);
  }
}

function handleArmoryPointerMove(event) {
  const item = getItemFromId(armoryEditorState.draggingItemId);

  if (!item) {
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
      || halLogin?.classList.contains("is-open")
      || event.target.closest?.(".scene-header, .hud-footer, .stasis-bay__controls, .hal-trigger, .armory-editor")
    ) {
      setArmoryHoverItem(null);
      return;
    }

    setArmoryHoverItem(findArmoryItemAtPoint(getBackdropPoint(event.clientX, event.clientY)));
    return;
  }

  const point = getBackdropPoint(event.clientX, event.clientY);
  const placement = armoryPlacements[item.id];

  placement.x = point.x - armoryEditorState.dragOffsetX;
  placement.y = point.y - armoryEditorState.dragOffsetY;
  layoutArmoryHotspots();
}

function handleArmoryPointerUp() {
  armoryEditorState.draggingItemId = null;
}

function handleArmoryClick(event) {
  if (
    armoryEditorState.active
    || armoryModal?.classList.contains("is-open")
    || halLogin?.classList.contains("is-open")
    || event.target.closest?.(".scene-header, .hud-footer, .stasis-bay__controls, .hal-trigger, .armory-editor")
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
  const item = getItemFromId(armoryEditorState.selectedItemId);

  if (!armoryEditorState.active || !item) {
    return false;
  }

  const placement = armoryPlacements[item.id];
  const amount = multiplier;

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

  layoutArmoryHotspots();
  return true;
}

function handleArmoryWheel(event) {
  if (!armoryEditorState.active || !event.target.closest?.(".armory-silhouette")) {
    return;
  }

  const item = getItemFromId(event.target.closest(".armory-silhouette").dataset.armoryItem);

  if (!item) {
    return;
  }

  event.preventDefault();
  selectArmoryEditorItem(item);
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
  const bayWidth = Math.max(160, laneRight - laneLeft);
  const bayHeight = Math.max(90, laneBottom - laneTop);
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

let brunoFrameIndex = 0;
let brunoLastFrameTime = 0;

function animateBruno(timestamp) {
  if (!brunoLastFrameTime) {
    brunoLastFrameTime = timestamp;
  }

  const frameDuration = 1000 / BRUNO_FRAME_RATE;
  if (timestamp - brunoLastFrameTime >= frameDuration) {
    brunoFrameIndex = (brunoFrameIndex + 1) % brunoFrames.length;
    brunoFrame.src = brunoFrames[brunoFrameIndex];
    brunoLastFrameTime = timestamp;
  }

  window.requestAnimationFrame(animateBruno);
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

robotToggle?.addEventListener("click", () => {
  toggleRobot();
});

audioToggle?.addEventListener("click", () => {
  toggleSceneAudio();
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

armoryEditorSave?.addEventListener("click", () => {
  saveArmoryPlacements();
  showArmoryToast("Sagome salvate");
  exitArmoryEditor();
});

armoryEditorReset?.addEventListener("click", () => {
  resetArmoryPlacements();
});

armoryEditorExit?.addEventListener("click", () => {
  exitArmoryEditor();
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
layoutHud();
setupHudTelemetry();
refreshHudTelemetry();
updateAudioToggle();
window.setInterval(refreshHudTelemetry, 1100);
window.addEventListener("resize", () => {
  layoutArmoryHotspots();
  layoutStasisBay();
  layoutRobotBay();
  layoutHud();
});
window.requestAnimationFrame(animateBruno);
window.requestAnimationFrame(animateRobot);

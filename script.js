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

const hudFooter = document.querySelector(".hud-footer");
const stasisBay = document.getElementById("stasis-bay");
const brunoFrame = document.getElementById("bruno-frame");
const hudTriggers = document.querySelectorAll(".hud-trigger");
const robotBay = document.getElementById("robot-bay");
const robotCleaner = document.getElementById("robot-cleaner");
const robotFrame = document.getElementById("robot-frame");
const robotToggle = document.getElementById("robot-toggle");
const robotToggleHint = robotToggle?.querySelector(".hud-trigger__hint");
const audioToggle = document.getElementById("audio-toggle");
const hudTelemetryMetrics = [];

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
    volume: 0.16,
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

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
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

layoutStasisBay();
layoutRobotBay();
layoutHud();
setupHudTelemetry();
refreshHudTelemetry();
updateAudioToggle();
window.setInterval(refreshHudTelemetry, 1100);
window.addEventListener("resize", () => {
  layoutStasisBay();
  layoutRobotBay();
  layoutHud();
});
window.requestAnimationFrame(animateBruno);
window.requestAnimationFrame(animateRobot);

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

const FRAME_COUNT = 36;
const FRAME_RATE = 12;

const hudFooter = document.querySelector(".hud-footer");
const stasisBay = document.getElementById("stasis-bay");
const brunoFrame = document.getElementById("bruno-frame");
const hudTriggers = document.querySelectorAll(".hud-trigger");

const forwardFrames = Array.from({ length: FRAME_COUNT }, (_, index) => {
  const frameId = String(index).padStart(4, "0");
  return `animazioni/Bruno/IDLE_stasi_criogenica/frame_${frameId}.png`;
});

// Build a ping-pong loop so the animation reverses smoothly instead of snapping.
const frames = [
  ...forwardFrames,
  ...forwardFrames.slice(1, -1).reverse(),
];

for (const frameSrc of forwardFrames) {
  const img = new Image();
  img.decoding = "async";
  img.src = frameSrc;
}

function layoutStasisBay() {
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

  stasisBay.style.left = `${offsetX + STASIS_RECT.x * scale}px`;
  stasisBay.style.top = `${offsetY + STASIS_RECT.y * scale}px`;
  stasisBay.style.width = `${STASIS_RECT.width * scale}px`;
  stasisBay.style.height = `${STASIS_RECT.height * scale}px`;
}

let frameIndex = 0;
let lastFrameTime = 0;

function animateBruno(timestamp) {
  if (!lastFrameTime) {
    lastFrameTime = timestamp;
  }

  const frameDuration = 1000 / FRAME_RATE;
  if (timestamp - lastFrameTime >= frameDuration) {
    frameIndex = (frameIndex + 1) % frames.length;
    brunoFrame.src = frames[frameIndex];
    lastFrameTime = timestamp;
  }

  window.requestAnimationFrame(animateBruno);
}

function layoutHudPanels() {
  if (!hudFooter || !stasisBay) {
    return;
  }

  const footerRect = hudFooter.getBoundingClientRect();
  const bayRect = stasisBay.getBoundingClientRect();
  const isCompact = window.innerWidth <= 800;
  const sideGap = isCompact ? 12 : 24;
  const bayClearance = isCompact ? 12 : 20;

  for (const trigger of hudTriggers) {
    const panelId = trigger.dataset.panelTarget;
    const panel = document.getElementById(panelId);

    if (!panel) {
      continue;
    }

    if (isCompact) {
      panel.style.left = "";
      panel.style.right = "";
      continue;
    }

    const panelWidth = panel.offsetWidth;
    const triggerRect = trigger.getBoundingClientRect();
    let nextLeft;

    if (panel.classList.contains("hud-panel--health")) {
      const maxLeft = bayRect.left - bayClearance - panelWidth;
      const preferredLeft = triggerRect.left - panelWidth * 0.12;
      nextLeft = Math.max(sideGap, Math.min(preferredLeft, maxLeft));
    } else {
      const minLeft = bayRect.right + bayClearance;
      const preferredLeft = triggerRect.right - panelWidth * 0.88;
      nextLeft = Math.min(
        window.innerWidth - sideGap - panelWidth,
        Math.max(preferredLeft, minLeft),
      );
    }

    panel.style.left = `${nextLeft - footerRect.left}px`;
    panel.style.right = "auto";
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
    toggleHudPanel(trigger);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  for (const trigger of hudTriggers) {
    closeHudPanel(trigger);
  }
});

layoutStasisBay();
layoutHud();
window.addEventListener("resize", () => {
  layoutStasisBay();
  layoutHud();
});
window.requestAnimationFrame(animateBruno);

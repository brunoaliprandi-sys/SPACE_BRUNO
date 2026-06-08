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

const stasisBay = document.getElementById("stasis-bay");
const brunoFrame = document.getElementById("bruno-frame");

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

layoutStasisBay();
window.addEventListener("resize", layoutStasisBay);
window.requestAnimationFrame(animateBruno);

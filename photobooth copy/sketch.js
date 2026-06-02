let buttonSound;

let resultSound;

let timelapseClips = [];
let currentTimelapseFrames = [];
let lastTimelapseFrameAt = 0;
let timelapseFrameEveryMs = 250;
let resultTimelapseFrameIndex = 0;
let resultTimelapseLastMs = 0;
let resultTimelapseSpeedMs = 160;

const RESULT_DURATION_MS = 180000;
let resultStartedAtMs = 0;

let hoverSound;
let lastHoveredButton = "";

let hitboxEditTarget = "startBtnHit";

let startBtnHitCtrl = { x: 0.501, y: 0.856, w: 0.109, h: 0.0785 };

let previewCaptureHitCtrl = { x: 0.622, y: 0.538, w: 0.102, h: 0.070 };
let previewReturnHitCtrl = { x: 0.321, y: 0.155, w: 0.032, h: 0.06 };

let selectRetakeHitCtrl = { x: 0.572, y: 0.876, w: 0.094, h: 0.066 };
let selectOkHitCtrl = { x: 0.698, y: 0.88, w: 0.044, h: 0.076 };

let resultHomeHitCtrl = { x: 0.208, y: 0.1, w: 0.034, h: 0.06 };

let snackIconHitCtrls = [
  { x: 0.42, y: 0.536, w: 0.088, h: 0.12 },
  { x: 0.56, y: 0.542, w: 0.040, h: 0.134 },
  { x: 0.422, y: 0.776, w: 0.092, h: 0.1 },
  { x: 0.562, y: 0.760, w: 0.058, h: 0.14 }
];

let resultFrameCtrl = {
  x: 0.34,
  y: 0.5,
  maxW: 0.45,
  maxH: 0.88
};

let resultHomeCtrl = {
 x: 0.21,
  y: 0.1,
  maxW: 0.14,
  maxH: 0.08
};

let resultQrCtrl = {
  x: 0.66,
  y: 0.45,
  size: 310
};

let qrBox;
let finalFrameGraphics = null;
let finalPhotoUrl = "";
let isUploadingPhoto = false;
let uploadError = "";

let selectFrameCtrl = {
  x: 0.37,
  y: 0.5,
  maxW: 0.4,
  maxH: 0.84
};

let selectGridCtrl = {
  x: 0.51,
  y: 0.1,
  thumbW: 0.12,
  gap:18
};

let selectRetakeCtrl = {
  x: 0.57,
  y: 0.88,
  maxW: 0.2,
  maxH: 0.12
};

let selectOkCtrl = {
  x: 0.7,
  y: 0.88,
  maxW: 0.18,
  maxH: 0.1
};

let showGrid = false;

let countdownAlpha = 255;
let lastCountdownText = "";

let previewFrameCtrl = {
  x: 0.44,
  y: 0.51,
  maxW: 0.720,
  maxH: 0.800
};

let previewCaptureCtrl = {
  x: 0.620,
  y: 0.540,
  maxW: 0.280,
  maxH: 0.130
};

let previewReturnCtrl = {
  x: 0.323,
  y: 0.155,
  maxW: 0.15,
  maxH: 0.07
};

let editTarget = "startButton"; // "startTitle", "startButton", or "startReel"

let snackTitleCtrl = {
  x: 0.49,
  y: 0.26,
  maxW: 0.83,
  maxH: 0.26
};

let snackIconCtrls = [
  { x: 0.42, y: 0.54, maxW: 0.12, maxH: 0.16 },
  { x: 0.56, y: 0.54, maxW: 0.12, maxH: 0.16 },
  { x: 0.42, y: 0.779, maxW: 0.12, maxH: 0.16 },
  { x: 0.56, y: 0.76, maxW: 0.12, maxH: 0.16 }
];

let startReelCtrl = {
  x: 0.500,
  y: 0.560,
  imgW: 0.065,
  gap: 0.020,
  holdMs: 2200,
  fadeMs: 900
};

let startTitleCtrl = {
  x: 0.5,
  y: 0.195,
  maxW: 0.72,
  maxH: 0.27
};

let startButtonCtrl = {
  x: 0.5,
  y: 0.86,
  maxW: 0.32,
  maxH: 0.13
};

let screen = "start";

let reelImgs = [];

let resultHomeBtn = { x: 0, y: 0, w: 0, h: 0 };

let returnBtnImg;

let startTitleImg;
let selectTitleImg;

let finalFrameImg = null;

let showHitboxes = false;

let frameSlots = [];

let freezePhoto = null;

let flashAlpha = 0;

let retakeBtnImg;
let okBtnImg;

let retakeBtn = { x: 0, y: 0, w: 0, h: 0 };
let okBtn = { x: 0, y: 0, w: 0, h: 0 };

let photoButtons = [];
let selectedPhotos = [];

let nextShotAtMs = 0;
let countdownStartAtMs = 0;
let readyStartAtMs = -1;

const SHOTS_TOTAL = 8;
const SHOT_INTERVAL_MS = 6000;
const COUNTDOWN_MS = 3000;
const READY_MS = 2400;

let countdownSound;
let shutterSound;

let isCapturing = false;
let captureStartTime = 0;
let snapCount = 0;
let countdownText = "";

let snappedPhotos = [];

let startBtnImg;
let captureBtnImg;
let homeBtnImg;

let icon1;
let icon2;
let icon3;
let icon4;

let frame1;
let frame2;
let frame3;
let frame4;

let selectedFrame;

let startBtn = { x: 0, y: 0, w: 0, h: 0 };
let captureBtn = { x: 0, y: 0, w: 0, h: 0 };
let homeBtn = { x: 0, y: 0, w: 0, h: 0 };

let iconButtons = [];

let cam;

function loadAssets() {
  
  startTitleImg = loadImage("assets/titles/start.png");
selectTitleImg = loadImage("assets/titles/select.png");
  
reelImgs.push(loadImage("assets/reel/reel1.jpg"));
reelImgs.push(loadImage("assets/reel/reel2.jpg"));
reelImgs.push(loadImage("assets/reel/reel3.jpg"));
reelImgs.push(loadImage("assets/reel/reel4.jpg"));
  
  returnBtnImg = loadImage("assets/ui/btn_return.png");
  
  retakeBtnImg = loadImage("assets/ui/btn_retake.png");
okBtnImg = loadImage("assets/ui/btn_ok.png");

  startBtnImg = loadImage("assets/ui/btn_start.png");
  captureBtnImg = loadImage("assets/ui/btn_capture.png");
  homeBtnImg = loadImage("assets/ui/btn_home.png");

  icon1 = loadImage("assets/icons/icon1.png");
  icon2 = loadImage("assets/icons/icon2.png");
  icon3 = loadImage("assets/icons/icon3.png");
  icon4 = loadImage("assets/icons/icon4.png");

  frame1 = loadImage("assets/frames/frame1.png");
  frame2 = loadImage("assets/frames/frame2.png");
  frame3 = loadImage("assets/frames/frame3.png");
  frame4 = loadImage("assets/frames/frame4.png");
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  imageMode(CENTER);

  let loadingEl = document.getElementById("p5_loading");
  if (loadingEl) loadingEl.remove();

  loadAssets();

  cam = createCapture(VIDEO);
  cam.size(480, 360);
  cam.hide();
  
  qrBox = createDiv("");
qrBox.style("position", "absolute");
qrBox.hide();
  
resultSound = loadSound("assets/audio/result.mp3", function() {
  resultSound.setVolume(2.0);
});


hoverSound = loadSound("assets/audio/hover.mp3", function() {
  hoverSound.playMode("restart");
  hoverSound.setVolume(2.0);
});

buttonSound = loadSound("assets/audio/buttonsound.mp3", function() {
  buttonSound.playMode("restart");
  buttonSound.setVolume(2.0);
});

countdownSound = loadSound("assets/audio/countdown.mp3", function() {
  countdownSound.setVolume(2.0);
});

shutterSound = loadSound("assets/audio/shutter.mp3", function() {
  shutterSound.setVolume(2.0);
});
}

function draw() {
  background(255);

  if (screen === "start") {
    drawStartScreen();
  }

  if (screen === "snack") {
    drawSnackScreen();
  }

  if (screen === "preview") {
    drawPreviewScreen();
  }

  if (screen === "capture") {
    drawCaptureScreen();
  }
  
  if (screen === "select") {
  drawSelectScreen();
}

if (screen === "result") {
  drawResultScreen();
}
  
  if (flashAlpha > 0) {
  noStroke();
  fill(255, flashAlpha);
  rectMode(CORNER);
  rect(0, 0, width, height);
  flashAlpha -= 25;
}
  
if (showGrid) {
drawGridGuides();
}
  
if (qrBox && screen !== "result") {
  qrBox.hide();
}
  
  updateHoverSound();
  
}

function drawStartScreen() {
  let titleBox = fitImage(
    startTitleImg,
    width * startTitleCtrl.maxW,
    height * startTitleCtrl.maxH
  );

  image(
    startTitleImg,
    width * startTitleCtrl.x,
    height * startTitleCtrl.y,
    titleBox.w,
    titleBox.h
  );
  
  drawStartReel();

  startBtn = drawAnimatedButton(startBtnImg, startButtonCtrl, startBtnHitCtrl);
}

function drawEditOverlay() {
  if (screen !== "start") return;

  let target;
  let label;

  if (editTarget === "startTitle") {
    target = startTitleCtrl;
    label = "TITLE";
  }

  if (editTarget === "startButton") {
    target = startButtonCtrl;
    label = "START BUTTON";
  }

  if (editTarget === "startReel") {
    target = startReelCtrl;
    label = "REEL";
  }

  let info =
    "Editing: " + label +
    "\nT = title | B = button | R = reel" +
    "\narrows = move | [ ] = resize" +
    "\nx: " + nf(target.x, 1, 3) +
    "\ny: " + nf(target.y, 1, 3);

  if (editTarget === "startReel") {
    info +=
      "\nimgW: " + nf(target.imgW, 1, 3) +
      "\ngap: " + nf(target.gap, 1, 3);
  } else {
    info +=
      "\nmaxW: " + nf(target.maxW, 1, 3) +
      "\nmaxH: " + nf(target.maxH, 1, 3);
  }

  push();
  noStroke();
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(info, 20, 20);
  pop();
}

function drawSnackScreen() {
  let titleBox = fitImage(
    selectTitleImg,
    width * snackTitleCtrl.maxW,
    height * snackTitleCtrl.maxH
  );

  image(
    selectTitleImg,
    width * snackTitleCtrl.x,
    height * snackTitleCtrl.y,
    titleBox.w,
    titleBox.h
  );

  iconButtons = [];

  drawIconButton(icon1, frame1, width * snackIconCtrls[0].x, height * snackIconCtrls[0].y, snackIconCtrls[0], 0);
drawIconButton(icon2, frame2, width * snackIconCtrls[1].x, height * snackIconCtrls[1].y, snackIconCtrls[1], 1);
drawIconButton(icon3, frame3, width * snackIconCtrls[2].x, height * snackIconCtrls[2].y, snackIconCtrls[2], 2);
drawIconButton(icon4, frame4, width * snackIconCtrls[3].x, height * snackIconCtrls[3].y, snackIconCtrls[3], 3);

}

function drawPreviewScreen() {
if (selectedFrame) {
  let frameBox = fitImage(
    selectedFrame,
    width * previewFrameCtrl.maxW,
    height * previewFrameCtrl.maxH
  );

  let frameX = width * previewFrameCtrl.x;
  let frameY = height * previewFrameCtrl.y;

  push();

  if (selectedFrame === frame2) {

 drawingContext.shadowColor = "rgba(0,0,0,0.025)";
drawingContext.shadowBlur = 20;
drawingContext.shadowOffsetX = 0;
drawingContext.shadowOffsetY = 1;
  } else {
    drawingContext.shadowColor = "rgba(0,0,0,0.10)";
    drawingContext.shadowBlur = 15;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 6;
  }

  image(
    selectedFrame,
    frameX,
    frameY,
    frameBox.w,
    frameBox.h
  );

  pop();
}

  captureBtn = drawAnimatedButton(captureBtnImg, previewCaptureCtrl, previewCaptureHitCtrl);

  homeBtn = drawAnimatedButton(returnBtnImg, previewReturnCtrl, previewReturnHitCtrl);
}

function drawIconButton(img, frameImg, x, y, ctrl, index) {
  let hitbox = boxFromHitCtrl(snackIconHitCtrls[index]);

  let iconBox = fitImage(
    img,
    width * ctrl.maxW,
    height * ctrl.maxH
  );

  let hovering = isInside(mouseX, mouseY, hitbox);
  let pressing = hovering && mouseIsPressed;

  let scale = 1;

  if (hovering) scale = 1.06;
  if (pressing) scale = 0.96;

  push();

  if (hovering) {
    drawingContext.shadowColor = "rgba(0,0,0,0.18)";
    drawingContext.shadowBlur = 14;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 4;
  }

  image(img, x, y, iconBox.w * scale, iconBox.h * scale);

  pop();

  drawCenterHitbox(hitbox);

  iconButtons.push({
    x: hitbox.x,
    y: hitbox.y,
    w: hitbox.w,
    h: hitbox.h,
    frame: frameImg
  });
}

function clickedAnyButton() {
  if (screen === "start") {
    return isInside(mouseX, mouseY, startBtn);
  }

  if (screen === "snack") {
    for (let i = 0; i < iconButtons.length; i++) {
      if (isInside(mouseX, mouseY, iconButtons[i])) return true;
    }
  }

  if (screen === "preview") {
    return (
      isInside(mouseX, mouseY, homeBtn) ||
      isInside(mouseX, mouseY, captureBtn)
    );
  }

 if (screen === "select") {
  for (let i = 0; i < frameSlots.length; i++) {
    if (
      isInsideCorner(mouseX, mouseY, frameSlots[i]) &&
      selectedPhotos[frameSlots[i].slot] !== undefined
    ) {
      return true;
    }
  }

  for (let i = 0; i < photoButtons.length; i++) {
    if (isInsideCorner(mouseX, mouseY, photoButtons[i])) {
      let photoIndex = photoButtons[i].index;

      if (!selectedPhotos.includes(photoIndex) && selectedPhotos.length < 4) {
        return true;
      }
    }
  }

  return (
    isInside(mouseX, mouseY, retakeBtn) ||
    isInside(mouseX, mouseY, okBtn)
  );
}

  if (screen === "result") {
  return isInside(mouseX, mouseY, resultHomeBtn);
}

  return false;
}

function mousePressed() {
  if (clickedAnyButton()) {
    playButtonSound();
  }

  if (screen === "start") {
    if (isInside(mouseX, mouseY, startBtn)) {
      editTarget = "snackTitle";
      screen = "snack";
    }
  } else if (screen === "snack") {
    for (let i = 0; i < iconButtons.length; i++) {
      if (isInside(mouseX, mouseY, iconButtons[i])) {
        selectedFrame = iconButtons[i].frame;
        screen = "preview";
      }
    }
  } else if (screen === "preview") {
    if (isInside(mouseX, mouseY, homeBtn)) {
  screen = "snack";
}

    if (isInside(mouseX, mouseY, captureBtn)) {
  userStartAudio();
  screen = "capture";
  startPhotoSequence();
}
  }
  else if (screen === "select") {
  for (let i = 0; i < frameSlots.length; i++) {
  if (isInsideCorner(mouseX, mouseY, frameSlots[i])) {
    let slotIndex = frameSlots[i].slot;

    if (selectedPhotos[slotIndex] !== undefined) {
      selectedPhotos.splice(slotIndex, 1);
    }

    return;
  }
}

  for (let i = 0; i < photoButtons.length; i++) {
    if (isInsideCorner(mouseX, mouseY, photoButtons[i])) {
      let photoIndex = photoButtons[i].index;

      if (!selectedPhotos.includes(photoIndex) && selectedPhotos.length < 4) {
        selectedPhotos.push(photoIndex);
      }

      return;
    }
  }

  if (isInside(mouseX, mouseY, retakeBtn)) {
    screen = "capture";
    startPhotoSequence();
    return;
  }

  if (isInside(mouseX, mouseY, okBtn)) {
  if (selectedPhotos.length === 4) {
    buildFinalFrame();
screen = "result";
resultStartedAtMs = millis();
playResultSound();
uploadFinalPhoto();
  }
  return;
}
}
  else if (screen === "result") {
 if (isInside(mouseX, mouseY, resultHomeBtn)) {
  resetToStartScreen();
  return;
}
}
}

function resetToStartScreen() {
  editTarget = "startButton";
  finalFrameImg = null;
  finalFrameGraphics = null;
  finalPhotoUrl = "";
  uploadError = "";
  selectedPhotos = [];
  snappedPhotos = [];
  timelapseClips = [];
  currentTimelapseFrames = [];
  resultStartedAtMs = 0;

  if (qrBox) {
    qrBox.html("");
    qrBox.hide();
  }

  screen = "start";
}

function fitImage(img, maxW, maxH) {
  let imgScale = min(maxW / img.width, maxH / img.height);

  return {
    w: img.width * imgScale,
    h: img.height * imgScale
  };
}

function isInside(mx, my, box) {
  return (
    mx > box.x - box.w / 2 &&
    mx < box.x + box.w / 2 &&
    my > box.y - box.h / 2 &&
    my < box.y + box.h / 2
  );
}

function drawCenterHitbox(box) {
  if (!showHitboxes) return;

  push();
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(box.x, box.y, box.w, box.h);
  pop();
}

function drawCornerHitbox(box) {
  if (!showHitboxes) return;

  push();
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  rectMode(CORNER);
  rect(box.x, box.y, box.w, box.h);
  pop();
}

function boxFromHitCtrl(ctrl) {
  return {
    x: width * ctrl.x,
    y: height * ctrl.y,
    w: width * ctrl.w,
    h: height * ctrl.h
  };
}

function drawAnimatedButton(img, visualCtrl, hitCtrl) {
  let hitbox = boxFromHitCtrl(hitCtrl);

  let btnBox = fitImage(
    img,
    width * visualCtrl.maxW,
    height * visualCtrl.maxH
  );

  let hovering = isInside(mouseX, mouseY, hitbox);
  let pressing = hovering && mouseIsPressed;

  let scale = 1;

  if (hovering) scale = 1.06;
  if (pressing) scale = 0.96;

  push();

  if (hovering) {
    drawingContext.shadowColor = "rgba(0,0,0,0.18)";
    drawingContext.shadowBlur = 14;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 4;
  }

  image(
    img,
    width * visualCtrl.x,
    height * visualCtrl.y,
    btnBox.w * scale,
    btnBox.h * scale
  );

  pop();

  drawCenterHitbox(hitbox);

  return hitbox;
}

function getHitboxEditTarget() {
  if (hitboxEditTarget === "startBtnHit") return startBtnHitCtrl;

  if (hitboxEditTarget === "previewCaptureHit") return previewCaptureHitCtrl;
  if (hitboxEditTarget === "previewReturnHit") return previewReturnHitCtrl;

  if (hitboxEditTarget === "selectRetakeHit") return selectRetakeHitCtrl;
  if (hitboxEditTarget === "selectOkHit") return selectOkHitCtrl;

  if (hitboxEditTarget === "resultHomeHit") return resultHomeHitCtrl;

  if (hitboxEditTarget === "snackIcon0Hit") return snackIconHitCtrls[0];
  if (hitboxEditTarget === "snackIcon1Hit") return snackIconHitCtrls[1];
  if (hitboxEditTarget === "snackIcon2Hit") return snackIconHitCtrls[2];
  if (hitboxEditTarget === "snackIcon3Hit") return snackIconHitCtrls[3];

  return null;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawCaptureScreen() {
  background(255);

  let slotRatio = 510 / 341;

let camW = width * 0.72;
let camH = camW / slotRatio;

if (camH > height * 0.72) {
  camH = height * 0.72;
  camW = camH * slotRatio;
}

let camX = width / 2 - camW / 2;
let camY = height / 2 - camH / 2;

  if (freezePhoto && millis() < countdownStartAtMs) {
  image(freezePhoto, width / 2, height / 2, camW, camH);
} else {
  if (millis() >= countdownStartAtMs) {
    freezePhoto = null;
  }

  drawMirroredVideoCoverToCanvas(cam, camX, camY, camW, camH);
}

  noFill();
  stroke(0);
  strokeWeight(2.5);
  rectMode(CENTER);
  rect(width / 2, height / 2, camW, camH);

  if (isCapturing) {
  recordTimelapseFrame();
  updateCountdown();
  drawCountdownText();
}
}

function startPhotoSequence() {
  isCapturing = true;
  snappedPhotos = [];
  selectedPhotos = [];
  freezePhoto = null;
  flashAlpha = 0;
  snapCount = 0;
  countdownText = "";
  finalFrameImg = null;
  timelapseClips = [];
currentTimelapseFrames = [];
lastTimelapseFrameAt = 0;
resultTimelapseFrameIndex = 0;
resultTimelapseLastMs = 0;

  finalPhotoUrl = "";
  if (qrBox) qrBox.html("");

  scheduleNextShot();
}

function updateCountdown() {
  let now = millis();

  countdownText = "";

  if (readyStartAtMs >= 0 && now >= readyStartAtMs && now < countdownStartAtMs) {
    countdownText = "Ready?";
    countdownAlpha = 255;
    lastCountdownText = "Ready?";
  }

  if (now >= countdownStartAtMs && now < nextShotAtMs - 250) {
    let remaining = nextShotAtMs - now;
    let newCountdownText = "" + ceil(remaining / 1000);

    if (newCountdownText !== lastCountdownText) {
      countdownText = newCountdownText;
      lastCountdownText = newCountdownText;
      countdownAlpha = 255;
    } else {
      countdownText = lastCountdownText;
    }

    if (countdownSound && !countdownSound.isPlaying()) {
      countdownSound.play();
    }
  }

  if (now >= nextShotAtMs) {
    countdownText = "";
    lastCountdownText = "";

    takePhoto();

    if (shutterSound) {
      shutterSound.play();
    }

    snapCount++;

    if (snapCount >= SHOTS_TOTAL) {
      isCapturing = false;
      countdownText = "";
      lastCountdownText = "";

      if (countdownSound && countdownSound.isPlaying()) {
        countdownSound.stop();
      }

      selectedPhotos = [];
      screen = "select";
    } else {
      scheduleNextShot();
    }
  }
}

function drawCountdownText() {
  textAlign(CENTER, CENTER);
  if (countdownText === "Ready?") {
  textSize(min(width, height) * 0.035);
} else {
  textSize(min(width, height) * 0.045);
}
  textStyle(BOLD);

  noStroke();
  fill(255, countdownAlpha);
  text(countdownText, width / 2, height / 2);

  countdownAlpha -= 6;

  if (countdownAlpha < 0) {
    countdownAlpha = 0;
  }
}

function recordTimelapseFrame() {
  if (millis() - lastTimelapseFrameAt < timelapseFrameEveryMs) return;

  let slotRatio = 510 / 341;
  let frameW = 180;
  let frameH = frameW / slotRatio;
  let g = createGraphics(frameW, frameH);

  drawMirroredVideoCoverToGraphics(g, cam, 0, 0, frameW, frameH);

  currentTimelapseFrames.push(g.get());
  lastTimelapseFrameAt = millis();
}

function takePhoto() {
  let slotRatio = 510 / 341;

  let photoW = 640;
  let photoH = photoW / slotRatio;

  let photo = createGraphics(photoW, photoH);

  drawMirroredVideoCoverToGraphics(photo, cam, 0, 0, photoW, photoH);

  freezePhoto = photo.get();
  timelapseClips.push(currentTimelapseFrames.slice());
currentTimelapseFrames = [];
  snappedPhotos.push(freezePhoto);

  flashAlpha = 255;
}

function scheduleNextShot() {
  nextShotAtMs = millis() + SHOT_INTERVAL_MS;
  countdownStartAtMs = nextShotAtMs - COUNTDOWN_MS;

  if (snapCount === 0) {
    readyStartAtMs = millis();
  } else {
    readyStartAtMs = -1;
  }

  countdownAlpha = 255;
  lastCountdownText = "";

  if (countdownSound && countdownSound.isPlaying()) {
    countdownSound.stop();
  }
}

function drawSelectScreen() {
  background(255);

  photoButtons = [];
  frameSlots = [];

  let frameCenterX = width * selectFrameCtrl.x;
let frameCenterY = height * selectFrameCtrl.y;

let frameBox = fitImage(
  selectedFrame,
  width * selectFrameCtrl.maxW,
  height * selectFrameCtrl.maxH
);

  let frameX = frameCenterX - frameBox.w / 2;
  let frameY = frameCenterY - frameBox.h / 2;

  let photoW = frameBox.w * 0.87;
let photoH = photoW * (341 / 510);
let photoX = frameX + frameBox.w * 0.065;

let photoYs = [
  frameY + frameBox.h * 0.02255,
  frameY + frameBox.h * 0.239,
  frameY + frameBox.h * 0.455,
  frameY + frameBox.h * 0.671
];

// hitbox values
let slotW = frameBox.w * 0.87;
let slotH = frameBox.h * 0.195;
let slotX = frameX + frameBox.w * 0.065;

let slotYs = [
  frameY + frameBox.h * 0.02255,
  frameY + frameBox.h * 0.239,
  frameY + frameBox.h * 0.455,
  frameY + frameBox.h * 0.671
];

for (let i = 0; i < 4; i++) {
  let chosenIndex = selectedPhotos[i];

  if (chosenIndex !== undefined) {
    image(
      snappedPhotos[chosenIndex],
      photoX + photoW / 2,
      photoYs[i] + photoH / 2,
      photoW,
      photoH
    );
  }

  frameSlots.push({
    x: slotX,
    y: slotYs[i],
    w: slotW,
    h: slotH,
    slot: i
  });
}

  if (selectedFrame) {
  push();

  if (selectedFrame === frame2) {
    drawingContext.shadowColor = "rgba(0,0,0,0.025)";
    drawingContext.shadowBlur = 20;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 1;
  } else {
    drawingContext.shadowColor = "rgba(0,0,0,0.10)";
    drawingContext.shadowBlur = 15;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 6;
  }

  image(selectedFrame, frameCenterX, frameCenterY, frameBox.w, frameBox.h);

  pop();
}
  
  if (showHitboxes) {
  for (let i = 0; i < frameSlots.length; i++) {
    noFill();
    stroke(0, 255, 255);
    strokeWeight(2);
    rectMode(CORNER);
    rect(frameSlots[i].x, frameSlots[i].y, frameSlots[i].w, frameSlots[i].h);
  }
}

  let gridStartX = width * selectGridCtrl.x;
let gridStartY = height * selectGridCtrl.y;
let cols = 2;
let gap = selectGridCtrl.gap;

let thumbW = width * selectGridCtrl.thumbW;
  let thumbH = thumbW * (341 / 510);

  for (let i = 0; i < snappedPhotos.length; i++) {
    let col = i % cols;
    let row = floor(i / cols);

    let x = gridStartX + col * (thumbW + gap);
    let y = gridStartY + row * (thumbH + gap);

    image(snappedPhotos[i], x + thumbW / 2, y + thumbH / 2, thumbW, thumbH);

    let isUsed = selectedPhotos.includes(i);

    noFill();
    strokeWeight(isUsed ? 4 : 2);
    stroke(isUsed ? color(255, 0, 0) : 0);
    rectMode(CORNER);
    rect(x, y, thumbW, thumbH);

    photoButtons.push({
      x: x,
      y: y,
      w: thumbW,
      h: thumbH,
      index: i
    });
  }

  retakeBtn = drawAnimatedButton(retakeBtnImg, selectRetakeCtrl, selectRetakeHitCtrl);

  okBtn = drawAnimatedButton(okBtnImg, selectOkCtrl, selectOkHitCtrl);

}

function isInsideCorner(mx, my, box) {
  return (
    mx > box.x &&
    mx < box.x + box.w &&
    my > box.y &&
    my < box.y + box.h
  );
}

function keyPressed() {
  let moveStep = 0.002;
let sizeStep = 0.002;

  // screen shortcuts
  if (key === "1") screen = "start";

  if (key === "2") {
    screen = "snack";
  }

  if (key === "3") {
    if (!selectedFrame) selectedFrame = frame1;
    screen = "preview";
  }

  if (key === "4") {
    if (!selectedFrame) selectedFrame = frame1;
    screen = "capture";
  }

  if (key === "5") {
    if (!selectedFrame) selectedFrame = frame1;

    while (snappedPhotos.length < 8) {
      let slotRatio = 510 / 341;
      let photoW = 640;
      let photoH = photoW / slotRatio;
      let photo = createGraphics(photoW, photoH);

      drawMirroredVideoCoverToGraphics(photo, cam, 0, 0, photoW, photoH);
      snappedPhotos.push(photo.get());
    }

    selectedPhotos = [];
    screen = "select";
  }

  if (key === "h" || key === "H") {
    showHitboxes = !showHitboxes;
    return;
  }

  if (key === "g" || key === "G") {
    showGrid = !showGrid;
    return;
  }

  // choose hitbox per screen
  if (screen === "start") {
    if (key === "b" || key === "B") hitboxEditTarget = "startBtnHit";
  }

  if (screen === "snack") {
    if (key === "a" || key === "A") hitboxEditTarget = "snackIcon0Hit";
    if (key === "s" || key === "S") hitboxEditTarget = "snackIcon1Hit";
    if (key === "d" || key === "D") hitboxEditTarget = "snackIcon2Hit";
    if (key === "f" || key === "F") hitboxEditTarget = "snackIcon3Hit";
  }

  if (screen === "preview") {
    if (key === "c" || key === "C") hitboxEditTarget = "previewCaptureHit";
    if (key === "r" || key === "R") hitboxEditTarget = "previewReturnHit";
  }

  if (screen === "select") {
    if (key === "r" || key === "R") hitboxEditTarget = "selectRetakeHit";
    if (key === "o" || key === "O") hitboxEditTarget = "selectOkHit";
  }

  if (screen === "result") {
    if (key === "u" || key === "U") hitboxEditTarget = "resultHomeHit";
  }

  let target = getHitboxEditTarget();

  if (!target) return;

  // position
  if (keyCode === LEFT_ARROW) target.x -= moveStep;
  if (keyCode === RIGHT_ARROW) target.x += moveStep;
  if (keyCode === UP_ARROW) target.y -= moveStep;
  if (keyCode === DOWN_ARROW) target.y += moveStep;

  // resize both width + height
  if (key === "[") {
    target.w -= sizeStep;
    target.h -= sizeStep;
  }

  if (key === "]") {
    target.w += sizeStep;
    target.h += sizeStep;
  }

  // width only
  if (key === "-") target.w -= sizeStep;
  if (key === "=") target.w += sizeStep;

  // height only
  if (key === ",") target.h -= sizeStep;
  if (key === ".") target.h += sizeStep;
}

function drawMirroredVideoCoverToCanvas(v, x, y, w, h) {
  let vw = v.width || 1;
  let vh = v.height || 1;

  let videoRatio = vw / vh;
  let boxRatio = w / h;

  let sx = 0;
  let sy = 0;
  let sw = vw;
  let sh = vh;

  if (videoRatio > boxRatio) {
    sh = vh;
    sw = vh * boxRatio;
    sx = (vw - sw) / 2;
  } else {
    sw = vw;
    sh = vw / boxRatio;
    sy = (vh - sh) / 2;
  }

  push();
  imageMode(CORNER);
  translate(x + w, y);
  scale(-1, 1);
  image(v, 0, 0, w, h, sx, sy, sw, sh);
  pop();
}

function drawMirroredVideoCoverToGraphics(g, v, x, y, w, h) {
  let vw = v.width || 1;
  let vh = v.height || 1;

  let videoRatio = vw / vh;
  let boxRatio = w / h;

  let sx = 0;
  let sy = 0;
  let sw = vw;
  let sh = vh;

  if (videoRatio > boxRatio) {
    sh = vh;
    sw = vh * boxRatio;
    sx = (vw - sw) / 2;
  } else {
    sw = vw;
    sh = vw / boxRatio;
    sy = (vh - sh) / 2;
  }

  g.push();
  g.imageMode(CORNER);
  g.translate(x + w, y);
  g.scale(-1, 1);
  g.image(v, 0, 0, w, h, sx, sy, sw, sh);
  g.pop();
}

function buildFinalFrame() {
  let g = createGraphics(selectedFrame.width, selectedFrame.height);

  g.clear();

  let holes = getFrameHoles(selectedFrame.width, selectedFrame.height);

  for (let i = 0; i < 4; i++) {
    let photoIndex = selectedPhotos[i];
    let photo = snappedPhotos[photoIndex];
    let hole = holes[i];

    g.image(photo, hole.x, hole.y, hole.w, hole.h);
  }

  g.image(selectedFrame, 0, 0, selectedFrame.width, selectedFrame.height);

  finalFrameGraphics = g;
finalFrameImg = g.get();
}

function drawResultScreen() {
  background(255);

    if (resultStartedAtMs === 0) {
    resultStartedAtMs = millis();
  }

  let remainingMs = RESULT_DURATION_MS - (millis() - resultStartedAtMs);

  if (remainingMs <= 0) {
    resetToStartScreen();
    return;
  }

  if (finalFrameImg) {
    let frameBox = fitImage(
      finalFrameImg,
      width * resultFrameCtrl.maxW,
      height * resultFrameCtrl.maxH
    );

    drawResultTimelapse(frameBox);
  }

  resultHomeBtn = drawAnimatedButton(homeBtnImg, resultHomeCtrl, resultHomeHitCtrl);

push();
fill(0);
noStroke();
textSize(15);
textStyle(NORMAL);
textAlign(CENTER, CENTER);
text(
  "scan to download digital version!",
  width * resultQrCtrl.x,
  height * resultQrCtrl.y + resultQrCtrl.size / 2 + 36
);
pop();

if (qrBox && finalPhotoUrl) {
  qrBox.show();
  qrBox.position(
    width * resultQrCtrl.x - resultQrCtrl.size / 2,
    height * resultQrCtrl.y - resultQrCtrl.size / 2
  );
  qrBox.size(resultQrCtrl.size, resultQrCtrl.size);
}
drawResultTimer(remainingMs);  
}
function drawResultTimer(remainingMs) {
  let totalSeconds = max(0, ceil(remainingMs / 1000));
  let minutes = floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let timerText = minutes + ":" + nf(seconds, 2);

  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(24);
  noStroke();
  fill(255, 235);
  rect(width - 92, 46, 120, 48, 8);
  fill(0);
  text(timerText, width - 92, 46);
  pop();
}

function drawResultTimelapse(frameBox) {
  if (millis() - resultTimelapseLastMs > resultTimelapseSpeedMs) {
    resultTimelapseFrameIndex++;
    resultTimelapseLastMs = millis();
  }

  let frameX = width * resultFrameCtrl.x - frameBox.w / 2;
  let frameY = height * resultFrameCtrl.y - frameBox.h / 2;
  let holes = getFrameHoles(frameBox.w, frameBox.h);

  for (let i = 0; i < 4; i++) {
    let photoIndex = selectedPhotos[i];
    let clip = timelapseClips[photoIndex];
    let hole = holes[i];
    let imgToDraw = null;

    if (clip && clip.length > 0) {
      imgToDraw = clip[resultTimelapseFrameIndex % clip.length];
    } else if (snappedPhotos[photoIndex]) {
      imgToDraw = snappedPhotos[photoIndex];
    }

    if (imgToDraw) {
      image(
        imgToDraw,
        frameX + hole.x + hole.w / 2,
        frameY + hole.y + hole.h / 2,
        hole.w,
        hole.h
      );
    }
  }

  image(
    selectedFrame,
    width * resultFrameCtrl.x,
    height * resultFrameCtrl.y,
    frameBox.w,
    frameBox.h
  );
}

function getFrameHoles(frameW, frameH) {
  let slotW = frameW * 0.87;
  let slotH = frameH * 0.195;
  let slotX = frameW * 0.065;

  let slotYs = [
    frameH * 0.02255,
    frameH * 0.239,
    frameH * 0.455,
    frameH * 0.671
  ];

  return [
    { x: slotX, y: slotYs[0], w: slotW, h: slotH },
    { x: slotX, y: slotYs[1], w: slotW, h: slotH },
    { x: slotX, y: slotYs[2], w: slotW, h: slotH },
    { x: slotX, y: slotYs[3], w: slotW, h: slotH }
  ];
}

function drawStartReel() {
  let imgW = width * startReelCtrl.imgW;
  let gap = width * startReelCtrl.gap;
  let totalW = 4 * imgW + 3 * gap;
  let startX = width * startReelCtrl.x - totalW / 2;
  let y = height * startReelCtrl.y;

  for (let i = 0; i < 4; i++) {
    let img = reelImgs[i];
    let imgH = imgW * (img.height / img.width);
    let x = startX + i * (imgW + gap) + imgW / 2;

    image(img, x, y, imgW, imgH);

if (i === 1) {
  push();
  noFill();
  stroke(60);
  strokeWeight(0.5);
  rectMode(CENTER);
  rect(x, y, imgW - 1, imgH - 1);
  pop();
}
  }
}

function drawSnackEditOverlay() {
  if (screen !== "snack") return;

  let target;

  if (editTarget === "snackTitle") target = snackTitleCtrl;
  if (editTarget === "snackIcon0") target = snackIconCtrls[0];
  if (editTarget === "snackIcon1") target = snackIconCtrls[1];
  if (editTarget === "snackIcon2") target = snackIconCtrls[2];
  if (editTarget === "snackIcon3") target = snackIconCtrls[3];

  if (!target) {
    editTarget = "snackTitle";
    target = snackTitleCtrl;
  }

  let info =
    "Editing: " + editTarget +
    "\nT = title | B = icon1 | R = icon2 | N = icon3 | M = icon4" +
    "\narrows = move | [ ] = resize" +
    "\nx: " + nf(target.x, 1, 3) +
    "\ny: " + nf(target.y, 1, 3) +
    "\nmaxW: " + nf(target.maxW, 1, 3) +
    "\nmaxH: " + nf(target.maxH, 1, 3);

  push();
  rectMode(CORNER);
  noStroke();
  fill(255, 230);
  rect(12, 12, 330, 150, 10);

  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(info, 24, 24);
  pop();
}

function drawPreviewEditOverlay() {
  if (screen !== "preview") return;

  let target;

  if (editTarget === "previewFrame") target = previewFrameCtrl;
  if (editTarget === "previewCapture") target = previewCaptureCtrl;
  if (editTarget === "previewReturn") target = previewReturnCtrl;

  if (!target) {
    editTarget = "previewFrame";
    target = previewFrameCtrl;
  }

  let info =
    "Editing: " + editTarget +
    "\nT = frame | B = capture | R = return" +
    "\narrows = move | [ ] = resize" +
    "\nx: " + nf(target.x, 1, 3) +
    "\ny: " + nf(target.y, 1, 3) +
    "\nmaxW: " + nf(target.maxW, 1, 3) +
    "\nmaxH: " + nf(target.maxH, 1, 3);

  push();
  rectMode(CORNER);
  noStroke();
  fill(255, 230);
  rect(12, 12, 330, 150, 10);

  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(info, 24, 24);
  pop();
}

function drawGridGuides() {
  push();

  rectMode(CORNER);
  textAlign(LEFT, TOP);
  textSize(11);

  stroke(0, 80);
  strokeWeight(1);

  let step = 0.1;

  for (let gx = 0; gx <= 1.001; gx += step) {
    let x = width * gx;
    line(x, 0, x, height);

    noStroke();
    fill(0, 120);
    text(nf(gx, 1, 1), x + 4, 4);
    stroke(0, 80);
  }

  for (let gy = 0; gy <= 1.001; gy += step) {
    let y = height * gy;
    line(0, y, width, y);

    noStroke();
    fill(0, 120);
    text(nf(gy, 1, 1), 4, y + 4);
    stroke(0, 80);
  }

  stroke(255, 0, 0, 150);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  pop();
}

function drawSelectEditOverlay() {
  if (screen !== "select") return;

  let target;

  if (editTarget === "selectFrame") target = selectFrameCtrl;
  if (editTarget === "selectGrid") target = selectGridCtrl;
  if (editTarget === "selectRetake") target = selectRetakeCtrl;
  if (editTarget === "selectOk") target = selectOkCtrl;

  if (!target) {
    editTarget = "selectFrame";
    target = selectFrameCtrl;
  }

  let info =
    "Editing: " + editTarget +
    "\nT = frame | B = photo grid | R = retake | O = ok" +
"\nGrid: [ ] = thumb size | - = less gap | = more gap" +
    "\narrows = move | [ ] = resize" +
    "\nx: " + nf(target.x, 1, 3) +
    "\ny: " + nf(target.y, 1, 3);

  if (editTarget === "selectGrid") {
    info +=
      "\nthumbW: " + nf(target.thumbW, 1, 3) +
      "\ngap: " + target.gap;
  } else {
    info +=
      "\nmaxW: " + nf(target.maxW, 1, 3) +
      "\nmaxH: " + nf(target.maxH, 1, 3);
  }

  push();
  rectMode(CORNER);
  noStroke();
  fill(255, 230);
  rect(12, 12, 360, 150, 10);

  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(info, 24, 24);
  pop();
}

async function uploadFinalPhoto() {
  console.log("uploadFinalPhoto started");
  console.log("finalFrameGraphics:", finalFrameGraphics);

  if (!finalFrameGraphics) {
    console.log("No finalFrameGraphics, upload stopped");
    return;
  }

  isUploadingPhoto = true;
  uploadError = "";
  finalPhotoUrl = "";

  try {
    let imageData = finalFrameGraphics.canvas.toDataURL("image/jpeg", 0.8);

    let response = await fetch("/.netlify/functions/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ imageData: imageData })
    });

    let data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Upload failed");
    }

   finalPhotoUrl = data.url;
console.log("Uploaded photo:", finalPhotoUrl);
makeQrCode();
  } catch (err) {
    uploadError = err.message;
    console.error("Upload error:", err);
  }

  isUploadingPhoto = false;
}

function drawResultEditOverlay() {
  if (screen !== "result") return;

  let target;

  if (editTarget === "resultFrame") target = resultFrameCtrl;
  if (editTarget === "resultHome") target = resultHomeCtrl;
  if (editTarget === "resultQr") target = resultQrCtrl;

  if (!target) {
    editTarget = "resultFrame";
    target = resultFrameCtrl;
  }

  let info =
    "Editing: " + editTarget +
    "\nT = frame | H = home | Q = QR" +
    "\narrows = move | [ ] = resize" +
    "\nx: " + nf(target.x, 1, 3) +
    "\ny: " + nf(target.y, 1, 3);

  if (editTarget === "resultQr") {
    info += "\nsize: " + target.size;
  } else {
    info +=
      "\nmaxW: " + nf(target.maxW, 1, 3) +
      "\nmaxH: " + nf(target.maxH, 1, 3);
  }

  push();
  rectMode(CORNER);
  noStroke();
  fill(255, 230);
  rect(12, 12, 360, 150, 10);

  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(info, 24, 24);
  pop();
}

function playButtonSound() {
  userStartAudio();

  if (buttonSound && buttonSound.isLoaded()) {
    buttonSound.play();
  }
}

function playResultSound() {
  userStartAudio();

  if (resultSound && resultSound.isLoaded()) {
    resultSound.stop();
    resultSound.play();
  }
}

function updateHoverSound() {
  let hoveredButton = getHoveredButton();

  if (hoveredButton !== "" && hoveredButton !== lastHoveredButton) {
    playHoverSound();
  }

  lastHoveredButton = hoveredButton;
}

function playHoverSound() {
  userStartAudio();

  if (hoverSound && hoverSound.isLoaded()) {
    hoverSound.play();
  }
}

function getHoveredButton() {
  if (screen === "start") {
    if (isInside(mouseX, mouseY, startBtn)) return "startBtn";
  }

  if (screen === "snack") {
    for (let i = 0; i < iconButtons.length; i++) {
      if (isInside(mouseX, mouseY, iconButtons[i])) {
        return "snackIcon" + i;
      }
    }
  }

  if (screen === "preview") {
    if (isInside(mouseX, mouseY, captureBtn)) return "captureBtn";
    if (isInside(mouseX, mouseY, homeBtn)) return "previewReturnBtn";
  }

  if (screen === "select") {
  if (isInside(mouseX, mouseY, retakeBtn)) return "retakeBtn";
  if (isInside(mouseX, mouseY, okBtn)) return "okBtn";
}

  if (screen === "result") {
    if (isInside(mouseX, mouseY, resultHomeBtn)) return "resultHomeBtn";
  }

  return "";
}


function makeQrCode() {
  if (!qrBox || !finalPhotoUrl) return;

  qrBox.html("");

  new QRCode(qrBox.elt, {
    text: finalPhotoUrl,
    width: resultQrCtrl.size,
    height: resultQrCtrl.size
  });
}

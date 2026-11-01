const starterCode = {
  html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Pertamaku</title>
</head>
<body>

</body>
</html>`,
  css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}`,
  js: "",
};

const demoProjects = {
  sunrise: {
    title: "Sunrise Club",
    html: `<main class="sunrise">
  <span class="sun">☀</span>
  <p>SEDERHANA, TAPI BERARTI</p>
  <h1>Mulai hari<br>perlahan.</h1>
  <button id="greet">Kirim semangat</button>
  <small id="message">Satu langkah kecil sudah cukup.</small>
</main>`,
    css: `* { box-sizing: border-box; }
body {
  display: grid;
  min-height: 100vh;
  place-items: center;
  margin: 0;
  background: #f7e8d1;
  color: #62473c;
  font-family: Arial, sans-serif;
}
.sunrise {
  width: min(340px, 90vw);
  padding: 28px;
  border-radius: 20px;
  background: linear-gradient(145deg, #fff4df, #f3c6a0);
}
.sun { color: #d98b59; font-size: 30px; }
p { margin: 20px 0 8px; font-size: 10px; letter-spacing: 2px; }
h1 { margin: 0; font-family: Georgia, serif; font-size: 38px; }
button {
  margin-top: 20px;
  padding: 10px 14px;
  border: 0;
  border-radius: 8px;
  background: #79564a;
  color: white;
  cursor: pointer;
}
small { display: block; margin-top: 14px; }`,
    js: `document.querySelector("#greet").addEventListener("click", () => {
  document.querySelector("#message").textContent = "Kamu hebat, terus melangkah! ✨";
});`,
  },
  orbit: {
    title: "Orbit CSS",
    html: `<main class="space">
  <p>EKSPERIMEN CSS</p>
  <div class="orbit"><span></span></div>
  <h1>Orbit kecil</h1>
  <button id="toggle">Hentikan orbit</button>
</main>`,
    css: `* { box-sizing: border-box; }
body {
  display: grid;
  min-height: 100vh;
  place-items: center;
  margin: 0;
  background: #171728;
  color: white;
  font-family: Arial, sans-serif;
}
.space { text-align: center; }
p { color: #a99be4; font-size: 10px; letter-spacing: 2px; }
.orbit {
  display: grid;
  width: 130px;
  height: 130px;
  place-items: center;
  margin: 22px auto;
  border: 1px solid #8e81d5;
  border-radius: 50%;
  animation: spin 4s linear infinite;
}
.orbit span {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #9ce8c3;
  box-shadow: 0 0 24px #9ce8c3;
  transform: translateX(64px);
}
.orbit.paused { animation-play-state: paused; }
h1 { font-size: 23px; }
button { padding: 9px 13px; border: 1px solid #625a91; border-radius: 7px; background: #25243b; color: white; cursor: pointer; }
@keyframes spin { to { rotate: 360deg; } }`,
    js: `const orbit = document.querySelector(".orbit");
document.querySelector("#toggle").addEventListener("click", (event) => {
  orbit.classList.toggle("paused");
  event.currentTarget.textContent = orbit.classList.contains("paused")
    ? "Jalankan orbit"
    : "Hentikan orbit";
});`,
  },
  playlist: {
    title: "Little Things",
    html: `<main class="player">
  <span>PLAYLIST PILIHANMU</span>
  <div class="album">♫</div>
  <h1>little things</h1>
  <p>Lagu kecil untuk hari yang baik.</p>
  <button id="play">▶ Putar</button>
</main>`,
    css: `* { box-sizing: border-box; }
body {
  display: grid;
  min-height: 100vh;
  place-items: center;
  margin: 0;
  background: #e6e8d8;
  color: #354336;
  font-family: Arial, sans-serif;
}
.player {
  width: min(310px, 90vw);
  padding: 24px;
  border-radius: 18px;
  background: #faf8ed;
  box-shadow: 0 14px 40px #46503b22;
}
.player > span { font-size: 9px; letter-spacing: 1.5px; }
.album { display: grid; height: 130px; place-items: center; margin-top: 17px; border-radius: 12px; background: linear-gradient(135deg, #e6a783, #b6c4a0); color: white; font-size: 48px; }
h1 { margin: 18px 0 5px; font-family: Georgia, serif; }
p { color: #778071; font-size: 12px; }
button { padding: 9px 14px; border: 0; border-radius: 18px; background: #50654d; color: white; cursor: pointer; }`,
    js: `document.querySelector("#play").addEventListener("click", (event) => {
  const isPlaying = event.currentTarget.textContent.includes("Jeda");
  event.currentTarget.textContent = isPlaying ? "▶ Putar" : "Ⅱ Jeda";
});`,
  },
  weather: {
    title: "Cuaca Hari Ini",
    html: `<main class="weather">
  <p>HARI INI DI</p>
  <h1>Yogyakarta</h1>
  <div class="sun">☀</div>
  <strong id="temperature">27°</strong>
  <p id="condition">Cerah dan menyenangkan</p>
  <button id="forecast">Lihat besok</button>
</main>`,
    css: `* { box-sizing: border-box; }
body {
  display: grid;
  min-height: 100vh;
  place-items: center;
  margin: 0;
  background: #dceaf2;
  color: #354b5c;
  font-family: Arial, sans-serif;
}
.weather { width: min(300px, 90vw); padding: 25px; border-radius: 20px; background: #f6f7ed; }
.weather > p:first-child { font-size: 9px; letter-spacing: 2px; }
h1 { margin: 8px 0; font-size: 23px; }
.sun { color: #e5a749; font-size: 33px; }
strong { display: block; margin-top: 5px; font-size: 54px; font-weight: 400; }
#condition { color: #788b95; font-size: 12px; }
button { margin-top: 12px; padding: 9px 12px; border: 0; border-radius: 7px; background: #668aa1; color: white; cursor: pointer; }`,
    js: `document.querySelector("#forecast").addEventListener("click", () => {
  document.querySelector("#temperature").textContent = "25°";
  document.querySelector("#condition").textContent = "Besok: sedikit berawan";
});`,
  },
  garden: {
    title: "Taman Mini",
    html: `<main class="garden">
  <p>TAMAN KECILKU</p>
  <div class="flower" id="flower">✿</div>
  <h1>Satu bunga</h1>
  <button id="water">Siram bunga</button>
  <small id="note">Bunga senang mendapat air.</small>
</main>`,
    css: `* { box-sizing: border-box; }
body { display: grid; min-height: 100vh; place-items: center; margin: 0; background: #e8e4f2; color: #54466b; font-family: Arial, sans-serif; }
.garden { width: min(300px, 90vw); padding: 24px; border: 1px solid #d5cee5; border-radius: 18px; background: #f7f4fb; text-align: center; }
p { color: #898097; font-size: 9px; letter-spacing: 2px; }
.flower { margin: 14px; color: #a678be; font-size: 76px; transition: transform 300ms ease; }
.flower.grown { transform: scale(1.2) rotate(12deg); color: #d77aa5; }
h1 { font-family: Georgia, serif; }
button { padding: 9px 13px; border: 0; border-radius: 7px; background: #75618f; color: white; cursor: pointer; }
small { display: block; margin-top: 12px; color: #817a8e; }`,
    js: `document.querySelector("#water").addEventListener("click", () => {
  document.querySelector("#flower").classList.toggle("grown");
  document.querySelector("#note").textContent = "Terima kasih, bunganya tumbuh! 🌱";
});`,
  },
  loader: {
    title: "Loader Ramah",
    html: `<main class="loading">
  <p>SEDANG MENYIAPKAN HAL BAIK</p>
  <strong id="percent">0%</strong>
  <div class="track"><span id="progress"></span></div>
  <small id="message">Sebentar ya...</small>
  <button id="restart">Mulai lagi</button>
</main>`,
    css: `* { box-sizing: border-box; }
body { display: grid; min-height: 100vh; place-items: center; margin: 0; background: #f1e8dc; color: #62594f; font-family: Arial, sans-serif; }
.loading { width: min(320px, 90vw); padding: 25px; border-radius: 18px; background: #fbf7f0; text-align: center; }
p { font-size: 9px; letter-spacing: 1.4px; }
strong { display: block; margin: 18px 0 9px; font-family: Georgia, serif; font-size: 42px; font-weight: 400; }
.track { height: 7px; overflow: hidden; border-radius: 9px; background: #e4d8c8; }
.track span { display: block; width: 0; height: 100%; border-radius: inherit; background: #c78768; transition: width 350ms ease; }
small { display: block; margin-top: 10px; color: #8d8174; }
button { margin-top: 17px; padding: 8px 12px; border: 0; border-radius: 7px; background: #846855; color: white; cursor: pointer; }`,
    js: `const progress = document.querySelector("#progress");
const percent = document.querySelector("#percent");
let amount = 0;
document.querySelector("#restart").addEventListener("click", () => {
  amount = amount >= 100 ? 0 : amount + 25;
  progress.style.width = amount + "%";
  percent.textContent = amount + "%";
  document.querySelector("#message").textContent =
    amount === 100 ? "Selesai! Semoga harimu menyenangkan." : "Sebentar ya...";
});`,
  },
};

const editorIds = ["html", "css", "js"];
const editors = Object.fromEntries(
  editorIds.map((language) => [language, document.querySelector(`#${language}-editor`)]),
);
const previewFrame = document.querySelector("#preview-frame");
const saveIndicator = document.querySelector(".save-indicator");
const previewStatus = document.querySelector(".preview-footer > span:first-child");
const welcomeScreen = document.querySelector("#welcome-screen");
const welcomeEnterButton = document.querySelector("#welcome-enter");
const projectDialog = document.querySelector("#project-dialog");
const projectDialogStatus = document.querySelector("#project-dialog-status");
const projectList = document.querySelector("#project-list");
let accountStorageScope = "";
let accountHasSavedProjects = false;
let cloudSyncReady = false;
let cloudSyncUserId = "";
let cloudSyncQueue = Promise.resolve();
let cloudSyncTimer;
let pendingCloudProjects = new Map();
let cloudRefreshPromise = null;
let projectStorageKey = "kodepen-projects-v1";
let activeProjectStorageKey = "kodepen-active-project-v1";
let likesStorageKey = "kodepen-liked-demos-v1";
let challengeStorageKey = "kodepen-completed-challenges-v1";
const projectFileDatabaseName = "kodepen-file-handles-v1";
let projects = [];
let activeProjectId = "";
let activeProjectFileHandle = null;
let projectFileWriteQueue = Promise.resolve();
let completedChallenges = new Set();
const editorDiagnostics = Object.fromEntries(editorIds.map((language) => [language, []]));
const runtimeDiagnostics = { js: [] };
const diagnosticsTimers = {};
let runTimer;
let saveTimer;

document.body.classList.add("welcome-open");

function enterWebsite() {
  welcomeScreen.classList.add("is-leaving");
  const transitionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 20 : 550;

  window.setTimeout(() => {
    welcomeScreen.hidden = true;
    welcomeScreen.classList.remove("is-leaving");
    navigateToDiscover();
  }, transitionDuration);
}

function navigateToDiscover() {
  showView("discover");
  if (!activeAuthUser) {
    openAccount();
  }
}

function showWelcome() {
  for (const element of [
    document.querySelector("#discovery-topbar"),
    document.querySelector("#discovery-view"),
    document.querySelector("#learning-view"),
    document.querySelector("#profile-view"),
    document.querySelector("#editor-topbar"),
    document.querySelector("#editor-view"),
  ]) {
    element.hidden = true;
    element.inert = true;
  }

  welcomeScreen.hidden = false;
  welcomeScreen.classList.remove("is-leaving");
  document.body.classList.add("welcome-open");
  welcomeEnterButton.focus();
}

welcomeEnterButton.addEventListener("click", enterWebsite);
welcomeEnterButton.focus();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !welcomeScreen.hidden && !welcomeScreen.classList.contains("is-leaving")) {
    enterWebsite();
  }
});

function setPreviewStatus(message, isError = false) {
  const statusDot = document.createElement("span");
  statusDot.className = "footer-status-dot";
  previewStatus.replaceChildren(statusDot, document.createTextNode(` ${message}`));
  previewStatus.classList.toggle("has-error", isError);
}

function getCode() {
  return Object.fromEntries(editorIds.map((language) => [language, editors[language].value]));
}

function isValidCode(code) {
  return Boolean(
    code &&
    editorIds.every((language) => typeof code[language] === "string"),
  );
}

function createProjectId() {
  return `project-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function setEditorCode(code) {
  for (const language of editorIds) {
    editors[language].value = code[language];
    runtimeDiagnostics.js = [];
    validateEditorSource(language);
  }
}

function getActiveProject() {
  return projects.find((project) => project.id === activeProjectId);
}

function getProjectFileStorageKey(projectId) {
  return accountStorageScope ? `${accountStorageScope}:${projectId}` : projectId;
}

function openProjectFileDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(projectFileDatabaseName, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("project-files");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Penyimpanan file project tidak tersedia."));
  });
}

async function getStoredProjectFileHandle(projectId) {
  const database = await openProjectFileDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("project-files", "readonly");
    const request = transaction.objectStore("project-files").get(getProjectFileStorageKey(projectId));
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("File project tidak dapat dibuka."));
    transaction.oncomplete = () => database.close();
    transaction.onerror = () => {
      database.close();
      reject(transaction.error || new Error("File project tidak dapat dibuka."));
    };
  });
}

async function storeProjectFileHandle(projectId, handle) {
  const database = await openProjectFileDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("project-files", "readwrite");
    transaction.objectStore("project-files").put(handle, getProjectFileStorageKey(projectId));
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      reject(transaction.error || new Error("Pilihan file tidak dapat disimpan."));
    };
    transaction.onabort = () => {
      database.close();
      reject(transaction.error || new Error("Pilihan file tidak dapat disimpan."));
    };
  });
}

async function deleteStoredProjectFileHandle(projectId) {
  const database = await openProjectFileDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("project-files", "readwrite");
    transaction.objectStore("project-files").delete(getProjectFileStorageKey(projectId));
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      reject(transaction.error || new Error("Tautan file project tidak dapat dihapus."));
    };
  });
}

function setProjectFileStatus(message, isError = false) {
  const status = document.querySelector("#project-file-status");
  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function getProjectFilePayload(project = getActiveProject()) {
  if (!project) {
    throw new Error("Project aktif tidak ditemukan.");
  }
  return {
    format: "kodepen-project",
    version: 1,
    id: project.id,
    title: project.title,
    html: project.html,
    css: project.css,
    js: project.js,
    updatedAt: project.updatedAt,
  };
}

async function writeLinkedProjectFile(requestPermission = false) {
  if (!activeProjectFileHandle) {
    return false;
  }

  const handle = activeProjectFileHandle;
  const projectPayload = getProjectFilePayload();
  let written = false;
  projectFileWriteQueue = projectFileWriteQueue.catch(() => {}).then(async () => {
    let permission = await handle.queryPermission({ mode: "readwrite" });
    if (permission !== "granted" && requestPermission) {
      permission = await handle.requestPermission({ mode: "readwrite" });
    }
    if (permission !== "granted") {
      setProjectFileStatus(`Izin untuk ${handle.name} belum tersedia. Tekan “Simpan ke perangkat” untuk mengizinkan.`);
      return;
    }

    const writable = await handle.createWritable();
    await writable.write(JSON.stringify(projectPayload, null, 2));
    await writable.close();
    setProjectFileStatus(`Tersimpan di perangkat: ${handle.name}`);
    saveIndicator.innerHTML = '<span class="save-dot"></span> File tersimpan';
    written = true;
  });

  try {
    await projectFileWriteQueue;
    return written;
  } catch (error) {
    setProjectFileStatus(`Gagal menyimpan file: ${error instanceof Error ? error.message : "kesalahan tidak diketahui"}`, true);
    saveIndicator.textContent = "Gagal menyimpan file";
    console.error("Project gagal ditulis ke file perangkat.", error);
    return false;
  }
}

async function loadProjectFileHandle(projectId) {
  activeProjectFileHandle = null;
  setProjectFileStatus("Project tersimpan otomatis di browser. Pilih “Simpan ke perangkat” untuk membuat file di perangkat ini.");

  try {
    const handle = await getStoredProjectFileHandle(projectId);
    if (activeProjectId !== projectId || !handle) {
      return;
    }

    activeProjectFileHandle = handle;
    const permission = await handle.queryPermission({ mode: "readwrite" });
    if (permission === "granted") {
      setProjectFileStatus(`File terhubung: ${handle.name}. Perubahan akan disimpan otomatis.`);
      await writeLinkedProjectFile();
    } else {
      setProjectFileStatus(`File terhubung: ${handle.name}. Tekan “Simpan ke perangkat” untuk mengizinkan pembaruan.`);
    }
  } catch (error) {
    console.error("File project yang ditautkan tidak dapat dipulihkan.", error);
  }
}

function persistProjects() {
  localStorage.setItem(projectStorageKey, JSON.stringify(projects));
  localStorage.setItem(activeProjectStorageKey, activeProjectId);
  localStorage.setItem(accountStorageScope ? `kodelab-project-v3:${accountStorageScope}` : "kodelab-project-v3", JSON.stringify(getCode()));
}

function initializeProjects({ allowLegacy = true } = {}) {
  try {
    const savedProjects = JSON.parse(localStorage.getItem(projectStorageKey));
    if (Array.isArray(savedProjects)) {
      projects = savedProjects.filter((project) =>
        project &&
        typeof project.id === "string" &&
        typeof project.title === "string" &&
        isValidCode(project),
      ).map((project) => ({
        ...project,
        updatedAt: Number.isFinite(project.updatedAt) ? project.updatedAt : Date.now(),
      }));
    }

    if (projects.length === 0) {
      const savedCode = allowLegacy
        ? JSON.parse(localStorage.getItem("kodelab-project-v3"))
        : JSON.parse(localStorage.getItem(`kodelab-project-v3:${accountStorageScope}`));
      projects.push({
        id: createProjectId(),
        title: "Website Pertamaku",
        ...(isValidCode(savedCode) ? savedCode : starterCode),
        updatedAt: Date.now(),
      });
    }

    const storedActiveId = localStorage.getItem(activeProjectStorageKey);
    activeProjectId = projects.some((project) => project.id === storedActiveId)
      ? storedActiveId
      : projects[0].id;
    const activeProject = getActiveProject();
    setEditorCode(activeProject);
    document.querySelector("#editor-topbar .project-title").textContent = activeProject.title;
    renderProjectList();
    void loadProjectFileHandle(activeProject.id);
  } catch (error) {
    console.error("Project tersimpan tidak dapat dibaca.", error);
    projects = [{
      id: createProjectId(),
      title: "Website Pertamaku",
      ...starterCode,
      updatedAt: Date.now(),
    }];
    activeProjectId = projects[0].id;
    setEditorCode(projects[0]);
  }
}

function setAccountStorageScope(scope) {
  if (accountStorageScope === scope) {
    return;
  }

  window.clearTimeout(saveTimer);
  saveCode();
  accountStorageScope = scope;
  projectStorageKey = scope ? `kodepen-projects-v1:${scope}` : "kodepen-projects-v1";
  activeProjectStorageKey = scope ? `kodepen-active-project-v1:${scope}` : "kodepen-active-project-v1";
  likesStorageKey = scope ? `kodepen-liked-demos-v1:${scope}` : "kodepen-liked-demos-v1";
  challengeStorageKey = scope ? `kodepen-completed-challenges-v1:${scope}` : "kodepen-completed-challenges-v1";
  cloudSyncReady = false;
  cloudSyncUserId = scope;
  pendingCloudProjects.clear();
  window.clearTimeout(cloudSyncTimer);
  accountHasSavedProjects = false;
  if (scope) {
    try {
      const savedAccountProjects = JSON.parse(localStorage.getItem(projectStorageKey) || "[]");
      accountHasSavedProjects = Array.isArray(savedAccountProjects) && savedAccountProjects.length > 0;
    } catch (error) {
      console.error("Daftar project akun lokal tidak dapat diperiksa.", error);
    }
  }
  projects = [];
  activeProjectId = "";
  activeProjectFileHandle = null;
  initializeProjects({ allowLegacy: !scope });
  loadAccountPreferences();
}

function updateLineNumbers(language) {
  const editor = editors[language];
  const lineCount = editor.value.split("\n").length;
  const diagnostics = [...editorDiagnostics[language], ...(language === "js" ? runtimeDiagnostics.js : [])];
  const errorsByLine = new Map();
  for (const diagnostic of diagnostics) {
    const messages = errorsByLine.get(diagnostic.line) || [];
    if (!messages.includes(diagnostic.message)) {
      messages.push(diagnostic.message);
    }
    errorsByLine.set(diagnostic.line, messages);
  }

  const lineNumbers = document.querySelector(`#${language}-lines`);
  const highlightedCode = document.querySelector(`#${language}-highlight pre`);
  const sourceLines = editor.value.split("\n");
  const numberFragment = document.createDocumentFragment();
  const codeFragment = document.createDocumentFragment();

  for (let index = 0; index < lineCount; index += 1) {
    const lineNumber = index + 1;
    const errorMessages = errorsByLine.get(lineNumber) || [];
    const number = document.createElement("span");
    number.textContent = String(lineNumber);
    const codeLine = document.createElement("span");
    codeLine.textContent = sourceLines[index] || "\u00a0";

    if (errorMessages.length > 0) {
      const description = errorMessages.join(" · ");
      number.classList.add("has-error");
      number.title = description;
      codeLine.classList.add("has-error");
      codeLine.title = description;
    }

    numberFragment.append(number);
    codeFragment.append(codeLine);
  }

  lineNumbers.replaceChildren(numberFragment);
  highlightedCode.replaceChildren(codeFragment);
  editor.setAttribute("aria-invalid", String(errorsByLine.size > 0));
  editor.title = errorsByLine.size > 0
    ? [...errorsByLine].map(([line, messages]) => `Baris ${line}: ${messages.join(" · ")}`).join("\n")
    : "";
}

function getSourceLine(source, offset) {
  const boundedOffset = Math.max(0, Math.min(offset, source.length));
  let line = 1;
  for (let index = 0; index < boundedOffset; index += 1) {
    if (source[index] === "\n") {
      line += 1;
    }
  }
  return line;
}

function validateHtmlSource(source) {
  const diagnostics = [];
  const stack = [];
  const voidElements = new Set([
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param",
    "source", "track", "wbr",
  ]);
  const knownElements = new Set([
    "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo",
    "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col",
    "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl",
    "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2",
    "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img",
    "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta",
    "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p",
    "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "search",
    "section", "select", "slot", "small", "source", "span", "strike", "strong", "style", "sub",
    "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead",
    "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "g", "path", "rect",
    "circle", "ellipse", "line", "polygon", "polyline", "defs", "lineargradient", "radialgradient",
    "stop", "use", "symbol", "marker", "pattern", "mask", "clippath", "foreignobject", "text",
    "tspan",
  ]);
  const optionalEndElements = new Set(["html", "head", "body"]);
  const optionalCloseOnStart = {
    address: ["p"], article: ["p"], aside: ["p"], blockquote: ["p"], details: ["p"],
    div: ["p"], dl: ["p"], fieldset: ["p"], footer: ["p"], form: ["p"], h1: ["p"],
    h2: ["p"], h3: ["p"], h4: ["p"], h5: ["p"], h6: ["p"], header: ["p"],
    hr: ["p"], main: ["p"], menu: ["p"], nav: ["p"], ol: ["p"], p: ["p"],
    pre: ["p"], section: ["p"], table: ["p"], ul: ["p"], li: ["li"],
    dt: ["dt", "dd"], dd: ["dt", "dd"], option: ["option"], optgroup: ["option", "optgroup"],
    thead: ["thead", "tbody", "tfoot"], tbody: ["thead", "tbody", "tfoot"],
    tfoot: ["thead", "tbody", "tfoot"], tr: ["tr"], td: ["td", "th"], th: ["td", "th"],
  };
  let offset = 0;

  function popOptionalElements(names) {
    const top = stack[stack.length - 1];
    if (top && names.includes(top.name)) {
      stack.pop();
    }
  }

  while (offset < source.length) {
    const start = source.indexOf("<", offset);
    if (start === -1) {
      break;
    }

    if (source.startsWith("<!--", start)) {
      const commentEnd = source.indexOf("-->", start + 4);
      if (commentEnd === -1) {
        diagnostics.push({ line: getSourceLine(source, start), message: "Komentar HTML belum ditutup dengan -->." });
        break;
      }
      offset = commentEnd + 3;
      continue;
    }

    if (!/^<\/?[A-Za-z!]/.test(source.slice(start, start + 3))) {
      offset = start + 1;
      continue;
    }

    let quote = "";
    let end = start + 1;
    for (; end < source.length; end += 1) {
      const character = source[end];
      if (quote) {
        if (character === quote) {
          quote = "";
        }
      } else if (character === '"' || character === "'") {
        quote = character;
      } else if (character === ">") {
        break;
      }
    }
    if (end >= source.length) {
      diagnostics.push({
        line: getSourceLine(source, start),
        message: quote ? "Atribut HTML memiliki tanda kutip yang belum ditutup." : "Tag HTML belum ditutup dengan >.",
      });
      break;
    }

    const tag = source.slice(start, end + 1);
    const match = tag.match(/^<\s*(\/?)\s*([A-Za-z][\w:-]*)/);
    offset = end + 1;
    if (!match || tag.startsWith("<!")) {
      continue;
    }

    const closing = Boolean(match[1]);
    const name = match[2].toLocaleLowerCase("en");
    const line = getSourceLine(source, start);
    if (!knownElements.has(name) && !name.includes("-")) {
      diagnostics.push({
        line,
        message: `Tag <${name}> tidak dikenal. Periksa kembali ejaan tag HTML.`,
      });
    }
    if (closing) {
      if (optionalEndElements.has(name)) {
        continue;
      }
      const matchingIndex = stack.map((item) => item.name).lastIndexOf(name);
      if (matchingIndex === -1) {
        diagnostics.push({ line, message: `Tag penutup </${name}> tidak memiliki tag pembuka.` });
      } else {
        for (let index = stack.length - 1; index > matchingIndex; index -= 1) {
          diagnostics.push({
            line: stack[index].line,
            message: `Tag <${stack[index].name}> belum ditutup sebelum </${name}>.`,
          });
        }
        stack.length = matchingIndex;
      }

      if (name === "script" || name === "style") {
        const closingPattern = new RegExp(`<\\s*\\/\\s*${name}\\s*>`, "ig");
        closingPattern.lastIndex = offset;
        const closingMatch = closingPattern.exec(source);
        if (closingMatch) {
          offset = closingPattern.lastIndex;
        }
      }
      continue;
    }

    if (name === "html" || name === "head" || name === "body") {
      continue;
    }
    popOptionalElements(optionalCloseOnStart[name] || []);
    if (!voidElements.has(name) && !/\/\s*>$/.test(tag)) {
      stack.push({ name, line });
    }
    if (name === "script" || name === "style") {
      const closingPattern = new RegExp(`<\\s*\\/\\s*${name}\\s*>`, "ig");
      closingPattern.lastIndex = offset;
      const closingMatch = closingPattern.exec(source);
      if (closingMatch) {
        offset = closingPattern.lastIndex;
        const rawElementIndex = stack.map((item) => item.name).lastIndexOf(name);
        if (rawElementIndex !== -1) {
          stack.length = rawElementIndex;
        }
      }
    }
  }

  for (const unclosedTag of stack) {
    diagnostics.push({ line: unclosedTag.line, message: `Tag <${unclosedTag.name}> belum memiliki tag penutup.` });
  }
  return diagnostics;
}

function validateCssSource(source) {
  const diagnostics = [];
  const cssTree = window.csstree;
  if (!cssTree) {
    return diagnostics;
  }

  function addParseError(error) {
    const offset = Number.isInteger(error.offset) ? error.offset : 0;
    diagnostics.push({
      line: Number.isInteger(error.line) ? error.line : getSourceLine(source, offset),
      message: error.message || "Sintaks CSS tidak valid.",
    });
  }

  try {
    const stylesheet = cssTree.parse(source, { positions: true, onParseError: addParseError });
    cssTree.walk(stylesheet, (node) => {
      if (
        node.type !== "Declaration" ||
        node.property.startsWith("--") ||
        node.property.startsWith("-") ||
        typeof window.CSS?.supports !== "function"
      ) {
        return;
      }

      const value = cssTree.generate(node.value);
      if (!window.CSS.supports(node.property, value)) {
        diagnostics.push({
          line: node.loc?.start.line || 1,
          message: `Properti atau nilai CSS tidak dikenali: ${node.property}: ${value}.`,
        });
      }
    });
  } catch (error) {
    addParseError(error);
  }
  return diagnostics;
}

function validateJavaScriptSource(source) {
  const acorn = window.acorn;
  if (!acorn) {
    return [];
  }

  try {
    acorn.parse(source, { ecmaVersion: "latest", sourceType: "script", allowHashBang: true });
    return [];
  } catch (error) {
    return [{
      line: error.loc?.line || getSourceLine(source, error.pos || 0),
      message: error.message || "Sintaks JavaScript tidak valid.",
    }];
  }
}

function validateEditorSource(language) {
  const source = editors[language].value;
  if (language === "html") {
    editorDiagnostics.html = validateHtmlSource(source);
  } else if (language === "css") {
    editorDiagnostics.css = validateCssSource(source);
  } else {
    editorDiagnostics.js = validateJavaScriptSource(source);
  }
  updateLineNumbers(language);
}

function scheduleEditorValidation(language) {
  window.clearTimeout(diagnosticsTimers[language]);
  diagnosticsTimers[language] = window.setTimeout(() => {
    validateEditorSource(language);
  }, 180);
}

function renderPreview() {
  const { html, css, js } = getCode();
  const parsedUserDocument = new DOMParser().parseFromString(html, "text/html");
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/i);
  const previewTitle = parsedUserDocument.title || (titleMatch
    ? new DOMParser().parseFromString(`<title>${titleMatch[1]}</title>`, "text/html").title
    : document.querySelector("#editor-topbar .project-title").textContent);
  document.querySelector("#preview-page-title").textContent = previewTitle.trim() || "Tanpa judul";
  const errorReporter = `window.addEventListener("error", (event) => {
  window.parent.postMessage({
    type: "kodelab-preview-error",
    message: event.message || "Kesalahan JavaScript",
    line: event.lineno || 0,
    source: event.filename || ""
  }, "*");
});`;

  let documentContent;
  if (/^\s*(?:<!doctype[^>]*>\s*)?<html(?:\s|>)/i.test(html)) {
    const previewDocument = new DOMParser().parseFromString(html, "text/html");
    const styleElement = previewDocument.createElement("style");
    styleElement.textContent = css;
    previewDocument.head.append(styleElement);

    const errorReporterElement = previewDocument.createElement("script");
    errorReporterElement.textContent = errorReporter;
    previewDocument.body.append(errorReporterElement);

    const userScriptElement = previewDocument.createElement("script");
    userScriptElement.textContent = `${js.replace(/<\/script/gi, "<\\/script")}\n//# sourceURL=kodepen-user-script.js`;
    previewDocument.body.append(userScriptElement);
    documentContent = `<!doctype html>\n${previewDocument.documentElement.outerHTML}`;
  } else {
    documentContent = `<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>${css.replace(/<\/style/gi, "<\\/style")}</style>
</head>
<body>
${html}
<script>${errorReporter}<\/script>
<script>${js.replace(/<\/script/gi, "<\\/script")}
//# sourceURL=kodepen-user-script.js
<\/script>
</body>
</html>`;
  }

  previewFrame.srcdoc = documentContent;
  setPreviewStatus("Pratinjau diperbarui");
}

function saveCode() {
  try {
    const project = getActiveProject();
    if (!project) {
      throw new Error("Project aktif tidak ditemukan.");
    }

    Object.assign(project, getCode(), { updatedAt: Date.now() });
    persistProjects();
    renderProjectList();
    saveIndicator.innerHTML = '<span class="save-dot"></span> Tersimpan';
    void writeLinkedProjectFile();
    scheduleCloudProjectSync(project);
  } catch (error) {
    saveIndicator.textContent = "Gagal menyimpan";
    console.error("Project gagal disimpan ke browser.", error);
  }
}

function scheduleUpdate() {
  saveIndicator.innerHTML = '<span class="save-dot"></span> Menyimpan…';
  window.clearTimeout(saveTimer);
  window.clearTimeout(runTimer);
  saveTimer = window.setTimeout(saveCode, 250);
  runTimer = window.setTimeout(renderPreview, 450);
}

window.addEventListener("message", (event) => {
  if (
    event.source !== previewFrame.contentWindow ||
    !event.data ||
    event.data.type !== "kodelab-preview-error" ||
    typeof event.data.message !== "string"
  ) {
    return;
  }

  const runtimeLine = Number.isInteger(event.data.line) ? event.data.line : 0;
  if (
    runtimeLine > 0 &&
    (!event.data.source || event.data.source.includes("kodepen-user-script.js")) &&
    runtimeLine <= editors.js.value.split("\n").length
  ) {
    runtimeDiagnostics.js = [{ line: runtimeLine, message: event.data.message }];
    updateLineNumbers("js");
    setPreviewStatus(`JavaScript baris ${runtimeLine}: ${event.data.message}`, true);
    return;
  }
  setPreviewStatus(`JavaScript: ${event.data.message}`, true);
});

for (const language of editorIds) {
  editors[language].value = starterCode[language];
  validateEditorSource(language);

  editors[language].addEventListener("input", () => {
    runtimeDiagnostics.js = [];
    updateLineNumbers(language);
    scheduleEditorValidation(language);
    scheduleUpdate();
  });

  editors[language].addEventListener("scroll", () => {
    document.querySelector(`#${language}-lines`).scrollTop = editors[language].scrollTop;
    document.querySelector(`#${language}-highlight pre`).style.transform =
      `translate(${-editors[language].scrollLeft}px, ${-editors[language].scrollTop}px)`;
  });

  editors[language].addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const { selectionStart, selectionEnd, value } = editors[language];
      editors[language].setRangeText("  ", selectionStart, selectionEnd, "end");
      runtimeDiagnostics.js = [];
      updateLineNumbers(language);
      scheduleEditorValidation(language);
      scheduleUpdate();
    }

    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      window.clearTimeout(runTimer);
      renderPreview();
    }
  });
}

initializeProjects();

document.querySelector("#run-button").addEventListener("click", () => {
  window.clearTimeout(runTimer);
  renderPreview();
});

document.querySelector("#reset-button").addEventListener("click", () => {
  setEditorCode(starterCode);
  window.clearTimeout(runTimer);
  renderPreview();
  saveCode();
});

const viewportLabels = {
  desktop: "Desktop · 100%",
  tablet: "Tablet · 768px",
  mobile: "Ponsel · 390px",
};

for (const button of document.querySelectorAll(".viewport-button")) {
  button.addEventListener("click", () => {
    const viewport = button.dataset.viewport;
    document.querySelector("#iframe-wrap").dataset.viewport = viewport;
    document.querySelector("#preview-size").textContent = viewportLabels[viewport];

    for (const otherButton of document.querySelectorAll(".viewport-button")) {
      const isActive = otherButton === button;
      otherButton.classList.toggle("is-active", isActive);
      otherButton.setAttribute("aria-pressed", String(isActive));
    }
  });
}

function showView(view) {
  const isLearning = view === "learning";
  const isEditor = view === "editor";
  const isDiscover = view === "discover";
  const isProfile = view === "profile";
  document.body.classList.remove("welcome-open");
  welcomeScreen.hidden = true;
  const discoveryTopbar = document.querySelector("#discovery-topbar");
  const discoveryView = document.querySelector("#discovery-view");
  const learningView = document.querySelector("#learning-view");
  const profileView = document.querySelector("#profile-view");
  const editorTopbar = document.querySelector("#editor-topbar");
  const editorView = document.querySelector("#editor-view");
  discoveryTopbar.hidden = isEditor;
  discoveryView.hidden = !isDiscover;
  learningView.hidden = !isLearning;
  profileView.hidden = !isProfile;
  editorTopbar.hidden = !isEditor;
  editorView.hidden = !isEditor;
  discoveryTopbar.inert = isEditor;
  discoveryView.inert = !isDiscover;
  learningView.inert = !isLearning;
  profileView.inert = !isProfile;
  editorTopbar.inert = !isEditor;
  editorView.inert = !isEditor;
  document.querySelectorAll(".main-nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.navView === view);
  });

  if (isEditor) {
    editors.html.focus();
  } else if (isLearning) {
    document.querySelector("#learning-title").focus({ preventScroll: true });
  } else if (isProfile) {
    document.querySelector("#profile-title").focus({ preventScroll: true });
  }
}

function renderProjectList() {
  projectList.replaceChildren();
  document.querySelector("#project-count").textContent = `${projects.length} project`;

  for (const project of [...projects].sort((first, second) => second.updatedAt - first.updatedAt)) {
    const item = document.createElement("div");
    item.className = `project-list-item${project.id === activeProjectId ? " is-active" : ""}`;

    const openButton = document.createElement("button");
    openButton.className = "project-open";
    openButton.type = "button";
    openButton.dataset.openProject = project.id;
    const title = document.createElement("strong");
    title.textContent = project.title;
    const updated = document.createElement("small");
    updated.textContent = `Diperbarui ${new Intl.DateTimeFormat("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(project.updatedAt))}${project.id === activeProjectId ? " · Sedang dibuka" : ""}`;
    openButton.append(title, updated);

    const deleteButton = document.createElement("button");
    deleteButton.className = "project-delete";
    deleteButton.type = "button";
    deleteButton.dataset.deleteProject = project.id;
    deleteButton.textContent = "Hapus";
    deleteButton.setAttribute("aria-label", `Hapus project ${project.title}`);
    item.append(openButton, deleteButton);
    projectList.append(item);
  }
}

async function openProject(project) {
  window.clearTimeout(runTimer);
  window.clearTimeout(saveTimer);
  saveCode();
  activeProjectId = project.id;
  activeProjectFileHandle = null;
  setEditorCode(project);
  document.querySelector("#editor-topbar .project-title").textContent = project.title;
  document.querySelector("#share-field").hidden = true;
  showView("editor");
  renderPreview();
  saveCode();
  await loadProjectFileHandle(project.id);
}

function createProject(title, code = starterCode) {
  saveCode();
  activeProjectFileHandle = null;
  setProjectFileStatus("Project tersimpan otomatis di browser. Pilih “Simpan ke perangkat” untuk membuat file di perangkat ini.");
  const project = {
    id: createProjectId(),
    title: title.trim().slice(0, 60) || "Website Pertamaku",
    ...code,
    updatedAt: Date.now(),
  };
  projects.push(project);
  activeProjectId = project.id;
  setEditorCode(project);
  document.querySelector("#editor-topbar .project-title").textContent = project.title;
  document.querySelector("#share-field").hidden = true;
  window.clearTimeout(runTimer);
  window.clearTimeout(saveTimer);
  showView("editor");
  renderPreview();
  saveCode();
  return project;
}

function startNewProject(title = "Website Pertamaku") {
  createProject(title);
}

for (const button of document.querySelectorAll("[data-show-editor]")) {
  button.addEventListener("click", () => {
    if (!activeAuthUser) {
      openAccount();
      return;
    }

    if (button.dataset.navView === "editor") {
      showView("editor");
    } else {
      startNewProject();
    }
  });
}

for (const button of document.querySelectorAll("[data-show-learning]")) {
  button.addEventListener("click", () => showView("learning"));
}

for (const button of document.querySelectorAll("[data-show-discover]")) {
  button.addEventListener("click", navigateToDiscover);
}

for (const button of document.querySelectorAll("[data-open-account]")) {
  button.addEventListener("click", () => openAccount());
}

for (const button of document.querySelectorAll("[data-show-welcome]")) {
  button.addEventListener("click", showWelcome);
}

for (const button of document.querySelectorAll("[data-open-card]")) {
  button.addEventListener("click", () => {
    const demo = demoProjects[button.closest(".pen-card")?.dataset.demo];
    if (!demo) {
      console.error("Contoh karya tidak ditemukan untuk kartu ini.");
      return;
    }

    createProject(demo.title, demo);
  });
}

document.querySelector("#open-projects").addEventListener("click", () => {
  window.clearTimeout(saveTimer);
  saveCode();
  projectDialogStatus.textContent = "";
  renderProjectList();
  updateProjectStorageDescription();
  updateLocalProjectMigrationButton();
  projectDialog.showModal();
  document.querySelector("#new-project-title").focus();
});

document.querySelector("#migrate-local-projects").addEventListener("click", () => {
  void migrateUnscopedLocalProjects();
});

for (const button of document.querySelectorAll("[data-close-projects]")) {
  button.addEventListener("click", () => projectDialog.close());
}

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    projectDialog.close();
  }
});

document.querySelector("#project-create-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.querySelector("#new-project-title");
  const title = titleInput.value.trim();
  if (!title) {
    titleInput.focus();
    return;
  }

  createProject(title);
  titleInput.value = "";
  projectDialog.close();
});

projectList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  if (target.dataset.openProject) {
    const project = projects.find((item) => item.id === target.dataset.openProject);
    if (!project) {
      projectDialogStatus.textContent = "Project tidak ditemukan.";
      return;
    }
    projectDialog.close();
    openProject(project);
  }

  if (target.dataset.deleteProject) {
    const project = projects.find((item) => item.id === target.dataset.deleteProject);
    if (!project) {
      return;
    }

    if (target.dataset.confirmDelete !== "true") {
      for (const button of projectList.querySelectorAll(".project-delete")) {
        const savedProject = projects.find((item) => item.id === button.dataset.deleteProject);
        button.dataset.confirmDelete = "false";
        button.textContent = "Hapus";
        button.setAttribute("aria-label", `Hapus project ${savedProject?.title || ""}`);
      }
      target.dataset.confirmDelete = "true";
      target.textContent = "Yakin?";
      target.setAttribute("aria-label", `Konfirmasi hapus project ${project.title}`);
      projectDialogStatus.textContent = `Klik “Yakin?” sekali lagi untuk menghapus "${project.title}".`;
      return;
    }

    projects = projects.filter((item) => item.id !== project.id);
    const deletedProjectUserId = activeAuthUser?.id || "";
    if (activeProjectFileHandle && activeProjectId === project.id) {
      activeProjectFileHandle = null;
    }
    if (projects.length === 0) {
      projects.push({
        id: createProjectId(),
        title: "Website Pertamaku",
        ...starterCode,
        updatedAt: Date.now(),
      });
    }
    if (activeProjectId === project.id) {
      const replacement = projects[0];
      activeProjectId = replacement.id;
      setEditorCode(replacement);
      document.querySelector("#editor-topbar .project-title").textContent = replacement.title;
      renderPreview();
    }

    try {
      persistProjects();
      accountHasSavedProjects = Boolean(deletedProjectUserId);
      void deleteStoredProjectFileHandle(project.id).catch((error) => {
        console.error("Tautan file project yang dihapus gagal dibersihkan.", error);
      });
      renderProjectList();
      projectDialogStatus.textContent = "Project berhasil dihapus.";
      deleteCloudProject(project.id, deletedProjectUserId);
    } catch (error) {
      projectDialogStatus.textContent = "Project gagal dihapus dari penyimpanan browser.";
      console.error("Project gagal dihapus.", error);
    }
  }
});

function getProjectExport() {
  return {
    version: 1,
    title: document.querySelector("#editor-topbar .project-title").textContent,
    ...getCode(),
    exportedAt: new Date().toISOString(),
  };
}

function downloadFile(filename, content, mimeType) {
  const file = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function getSafeProjectFilename(extension) {
  const title = document.querySelector("#editor-topbar .project-title").textContent;
  const safeTitle = title.replace(/[<>:"/\\|?*]+/g, "-").trim() || "Project KodePen";
  return `${safeTitle}${extension}`;
}

async function saveProjectToDevice() {
  window.clearTimeout(saveTimer);
  saveCode();

  if (activeProjectFileHandle && await writeLinkedProjectFile(true)) {
    return;
  }

  if (typeof window.showSaveFilePicker !== "function") {
    const project = getProjectFilePayload();
    downloadFile(getSafeProjectFilename(".kodepen.json"), JSON.stringify(project, null, 2), "application/json");
    setProjectFileStatus("File project berhasil diunduh. Pilih file ini lagi melalui Impor JSON untuk membukanya.");
    projectDialogStatus.textContent = "File project diunduh ke perangkat.";
    return;
  }

  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: getSafeProjectFilename(".kodepen.json"),
      types: [{
        description: "Project KodePen",
        accept: { "application/json": [".kodepen.json", ".json"] },
      }],
    });
    activeProjectFileHandle = handle;

    try {
      await storeProjectFileHandle(activeProjectId, handle);
    } catch (error) {
      console.error("Pilihan file tidak dapat ditautkan untuk simpan otomatis.", error);
    }

    const written = await writeLinkedProjectFile(true);
    if (written) {
      projectDialogStatus.textContent = "Project berhasil disimpan ke file perangkat.";
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return;
    }
    setProjectFileStatus(`File project gagal disimpan: ${error instanceof Error ? error.message : "kesalahan tidak diketahui"}`, true);
    projectDialogStatus.textContent = "Project gagal disimpan ke perangkat.";
    console.error("Pemilihan file project gagal.", error);
  }
}

function getStandaloneHtml() {
  const { html, css, js } = getCode();
  const parsed = new DOMParser().parseFromString(html, "text/html");
  const style = parsed.createElement("style");
  style.textContent = css;
  parsed.head.append(style);
  const script = parsed.createElement("script");
  script.textContent = js;
  parsed.body.append(script);
  return `<!doctype html>\n${parsed.documentElement.outerHTML}`;
}

document.querySelector("#export-project-json").addEventListener("click", () => {
  const project = getProjectExport();
  downloadFile(`${project.title.replace(/[<>:"/\\|?*]+/g, "-")}.json`, JSON.stringify(project, null, 2), "application/json");
  projectDialogStatus.textContent = "Salinan project JSON berhasil diunduh.";
});

document.querySelector("#save-project-file").addEventListener("click", () => {
  void saveProjectToDevice();
});

document.querySelector("#export-project-html").addEventListener("click", () => {
  const project = getProjectExport();
  downloadFile(`${project.title.replace(/[<>:"/\\|?*]+/g, "-")}.html`, getStandaloneHtml(), "text/html");
  projectDialogStatus.textContent = "Halaman HTML mandiri berhasil diunduh.";
});

function decodeProjectPayload(payload) {
  if (!payload || typeof payload !== "object" || typeof payload.title !== "string" || !isValidCode(payload)) {
    throw new Error("Format project tidak valid.");
  }

  return {
    title: payload.title.trim().slice(0, 60) || "Project impor",
    html: payload.html,
    css: payload.css,
    js: payload.js,
  };
}

document.querySelector("#import-project-file").addEventListener("change", async (event) => {
  const input = event.currentTarget;
  const file = input.files[0];
  if (!file) {
    return;
  }

  try {
    if (file.size > 1_000_000) {
      throw new Error("File terlalu besar. Batas impor adalah 1 MB.");
    }
    const imported = decodeProjectPayload(JSON.parse(await file.text()));
    createProject(imported.title, imported);
    projectDialog.close();
    projectDialogStatus.textContent = `Project "${imported.title}" berhasil diimpor.`;
  } catch (error) {
    projectDialogStatus.textContent = error instanceof Error ? error.message : "Project gagal diimpor.";
    console.error("Project gagal diimpor.", error);
  } finally {
    input.value = "";
  }
});

function encodeProjectForShare(project) {
  const bytes = new TextEncoder().encode(JSON.stringify({
    version: 1,
    title: project.title,
    html: project.html,
    css: project.css,
    js: project.js,
  }));
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

document.querySelector("#share-project").addEventListener("click", async () => {
  try {
    const project = getProjectExport();
    const url = new URL(location.href);
    url.hash = `share=${encodeProjectForShare(project)}`;
    const shareField = document.querySelector("#share-field");
    const shareInput = document.querySelector("#share-project-url");
    shareInput.value = url.href;
    shareField.hidden = false;

    if (url.href.length > 8000) {
      projectDialogStatus.textContent = "Tautan cukup panjang. Gunakan Unduh JSON agar project lebih mudah dibagikan.";
      return;
    }

    try {
      await navigator.clipboard.writeText(url.href);
      projectDialogStatus.textContent = location.protocol === "file:"
        ? "Tautan disalin. Tautan berbagi dapat dibuka orang lain setelah KodePen di-hosting."
        : "Tautan project berhasil disalin.";
    } catch (error) {
      shareInput.focus();
      shareInput.select();
      projectDialogStatus.textContent = "Tautan siap. Salin teks yang sudah dipilih untuk membagikannya.";
    }
  } catch (error) {
    projectDialogStatus.textContent = "Tautan project gagal dibuat.";
    console.error("Tautan berbagi project gagal dibuat.", error);
  }
});

const challengeProjects = {
  html: {
    title: "Latihan HTML — Kartu Perkenalan",
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kartu Perkenalan</title>
</head>
<body>
  <main class="card">
    <!-- Tambahkan judul, paragraf, dan tombol di sini -->
  </main>
</body>
</html>`,
    css: `body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  font-family: Arial, sans-serif;
}

.card {
  padding: 24px;
}`,
    js: "",
  },
  css: {
    title: "Latihan CSS — Kartu Berwarna",
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kartu Berwarna</title>
</head>
<body>
  <main class="card">
    <h1>Warna favoritku</h1>
    <p>Ubah tampilan kartu ini dengan CSS.</p>
  </main>
</body>
</html>`,
    css: `body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  font-family: Arial, sans-serif;
}

.card {
  padding: 24px;
  /* Atur latar, warna teks, dan sudut kartu */
}`,
    js: "",
  },
  js: {
    title: "Latihan JavaScript — Tombol Reaktif",
    html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tombol Reaktif</title>
</head>
<body>
  <main>
    <h1>Coba tombol ini</h1>
    <button id="action">Klik aku</button>
  </main>
</body>
</html>`,
    css: `body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  font-family: Arial, sans-serif;
}

button {
  padding: 10px 14px;
  cursor: pointer;
}`,
    js: `// Tambahkan event click untuk tombol di sini`,
  },
};

function updateChallengeButtons() {
  for (const button of document.querySelectorAll("[data-complete-challenge]")) {
    const isComplete = completedChallenges.has(button.dataset.completeChallenge);
    button.setAttribute("aria-pressed", String(isComplete));
    button.textContent = isComplete ? "Selesai ✓" : "Tandai selesai";
  }
}

function loadCompletedChallenges() {
  try {
    const savedChallenges = JSON.parse(localStorage.getItem(challengeStorageKey) || "[]");
    completedChallenges = Array.isArray(savedChallenges)
      ? new Set(savedChallenges.filter((id) => ["html", "css", "js"].includes(id)))
      : new Set();
  } catch (error) {
    console.error("Progres latihan tidak dapat dibaca.", error);
    completedChallenges = new Set();
  }
  updateChallengeButtons();
}

loadCompletedChallenges();

for (const button of document.querySelectorAll("[data-start-challenge]")) {
  button.addEventListener("click", () => {
    const challenge = challengeProjects[button.dataset.startChallenge];
    if (!challenge) {
      console.error("Latihan tidak ditemukan.");
      return;
    }
    createProject(challenge.title, challenge);
  });
}

for (const button of document.querySelectorAll("[data-complete-challenge]")) {
  button.addEventListener("click", () => {
    const id = button.dataset.completeChallenge;
    if (completedChallenges.has(id)) {
      completedChallenges.delete(id);
    } else {
      completedChallenges.add(id);
    }
    updateChallengeButtons();
    try {
      localStorage.setItem(challengeStorageKey, JSON.stringify([...completedChallenges]));
    } catch (error) {
      console.error("Progres latihan gagal disimpan.", error);
    }
  });
}

const penGrid = document.querySelector("#pen-grid");
const penCards = [...penGrid.querySelectorAll(".pen-card")];
const searchInput = document.querySelector("#pen-search");
const categoryButtons = [...document.querySelectorAll(".category-chip")];
const sidebarFilters = [...document.querySelectorAll("[data-category], [data-tag]")];
const sortButton = document.querySelector("#sort-button");
const sortModes = [
  { value: "trending", label: "Pilihan" },
  { value: "latest", label: "Terbaru" },
  { value: "popular", label: "Paling disukai" },
];
let activeCategory = "Semua";

function updatePenGrid() {
  const query = searchInput.value.trim().toLocaleLowerCase("id");

  for (const card of penCards) {
    const matchesCategory = activeCategory === "Semua" || card.dataset.tags.includes(activeCategory);
    const matchesSearch = `${card.innerText} ${card.dataset.tags}`
      .toLocaleLowerCase("id")
      .includes(query);
    card.hidden = !matchesCategory || !matchesSearch;
  }

  document.querySelector("#empty-state").hidden = penCards.some((card) => !card.hidden);
}

function setCategory(category) {
  activeCategory = category;

  for (const button of categoryButtons) {
    button.classList.toggle("is-active", button.dataset.filter === category);
  }

  for (const button of sidebarFilters) {
    const isActive =
      (button.dataset.category === "all" && category === "Semua") ||
      button.dataset.category === category.toLocaleLowerCase("id") ||
      button.dataset.tag === category;
    button.classList.toggle("is-active", isActive);
  }

  updatePenGrid();
}

function setSortMode(mode) {
  for (const [index, card] of [...penCards].entries()) {
    card.dataset.order = String(index);
  }

  const sortedCards = [...penCards].sort((first, second) => {
    if (mode === "popular") {
      const firstLikes = Number(first.dataset.likes) + Number(likedDemos.has(first.dataset.demo));
      const secondLikes = Number(second.dataset.likes) + Number(likedDemos.has(second.dataset.demo));
      return secondLikes - firstLikes;
    }

    if (mode === "latest") {
      return Number(second.dataset.order) - Number(first.dataset.order);
    }

    return Number(first.dataset.order) - Number(second.dataset.order);
  });

  for (const card of sortedCards) {
    penGrid.append(card);
  }

  sortButton.dataset.sort = mode;
  sortButton.innerHTML = `${sortModes.find((item) => item.value === mode).label} <span aria-hidden="true">⌄</span>`;

  for (const button of sidebarFilters) {
    if (
      button.dataset.category === "all" ||
      button.dataset.category === "latest" ||
      button.dataset.category === "popular"
    ) {
      button.classList.toggle(
        "is-active",
        button.dataset.category === (mode === "trending" ? "all" : mode),
      );
    }
  }
}

for (const button of categoryButtons) {
  button.addEventListener("click", () => setCategory(button.dataset.filter));
}

for (const button of sidebarFilters) {
  button.addEventListener("click", () => {
    if (button.dataset.tag) {
      setCategory(button.dataset.tag);
      return;
    }

    const category = button.dataset.category;
    if (category === "all") {
      setCategory("Semua");
      setSortMode("trending");
    } else {
      setCategory("Semua");
      setSortMode(category);
    }
  });
}

sortButton.addEventListener("click", () => {
  const currentIndex = sortModes.findIndex((mode) => mode.value === sortButton.dataset.sort);
  const nextMode = sortModes[(currentIndex + 1) % sortModes.length];
  setSortMode(nextMode.value);
});

searchInput.addEventListener("input", updatePenGrid);

let likedDemos = new Set();
function refreshLikedDemos() {
  try {
    const savedLikes = JSON.parse(localStorage.getItem(likesStorageKey) || "[]");
    likedDemos = Array.isArray(savedLikes)
      ? new Set(savedLikes.filter((id) => penCards.some((card) => card.dataset.demo === id)))
      : new Set();
  } catch (error) {
    console.error("Karya yang disukai tidak dapat dibaca.", error);
    likedDemos = new Set();
  }

  for (const button of document.querySelectorAll(".like-button")) {
    const demoId = button.closest(".pen-card").dataset.demo;
    const baseCount = Number(button.closest(".pen-card").dataset.likes);
    const isLiked = likedDemos.has(demoId);
    button.setAttribute("aria-pressed", String(isLiked));
    button.querySelector("span").textContent = isLiked ? "♥" : "♡";
    button.querySelector("b").textContent = String(baseCount + Number(isLiked));
  }
}
refreshLikedDemos();

for (const button of document.querySelectorAll(".like-button")) {
  const demoId = button.closest(".pen-card").dataset.demo;
  const baseCount = Number(button.closest(".pen-card").dataset.likes);

  button.addEventListener("click", () => {
    const liked = button.getAttribute("aria-pressed") === "true";
    if (liked) {
      likedDemos.delete(demoId);
    } else {
      likedDemos.add(demoId);
    }

    button.setAttribute("aria-pressed", String(!liked));
    button.querySelector("span").textContent = liked ? "♡" : "♥";
    button.querySelector("b").textContent = String(baseCount + Number(!liked));
    try {
      localStorage.setItem(likesStorageKey, JSON.stringify([...likedDemos]));
    } catch (error) {
      console.error("Karya yang disukai gagal disimpan.", error);
    }
  });
}

function loadAccountPreferences() {
  loadCompletedChallenges();
  refreshLikedDemos();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
      event.preventDefault();
      searchInput.focus();
    }
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    updatePenGrid();
    searchInput.blur();
  }
});

function openSharedProjectFromUrl() {
  const sharedMatch = location.hash.match(/^#share=([A-Za-z0-9_-]+)$/);
  if (!sharedMatch) {
    return false;
  }

  try {
    const base64 = sharedMatch[1].replace(/-/g, "+").replace(/_/g, "/");
    const paddedBase64 = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    const bytes = Uint8Array.from(atob(paddedBase64), (character) => character.charCodeAt(0));
    const payload = decodeProjectPayload(JSON.parse(new TextDecoder().decode(bytes)));
    createProject(payload.title, payload);
    history.replaceState(null, "", `${location.pathname}${location.search}`);
    return true;
  } catch (error) {
    console.error("Tautan project tidak dapat dibuka.", error);
    return false;
  }
}

if (openSharedProjectFromUrl()) {
  showView("editor");
} else {
  renderPreview();
}

const accountDialog = document.querySelector("#account-dialog");
const accountButton = document.querySelector("#account-button");
const authDialogStatus = document.querySelector("#auth-dialog-status");
const authSetupNote = document.querySelector("#auth-setup-note");
const profileStatus = document.querySelector("#profile-status");
const profileForm = document.querySelector("#profile-form");
const authProviderButtons = [...document.querySelectorAll("[data-auth-provider]")];
let supabaseClient = null;
let activeAuthUser = null;
let activeProfile = null;

function setAuthStatus(element, message, isError = false) {
  element.textContent = message;
  element.classList.toggle("is-error", isError);
}

function updateAccountButton() {
  const label = accountButton.querySelector(".account-button-label");
  const avatar = accountButton.querySelector(".account-avatar");
  const displayName = activeProfile?.display_name || activeAuthUser?.email || "";
  label.textContent = activeAuthUser ? displayName : "Profil";
  if (activeAuthUser) {
    avatar.textContent = displayName.trim().charAt(0).toLocaleUpperCase("id") || "K";
  } else {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 20 20");
    icon.setAttribute("aria-hidden", "true");
    const head = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    head.setAttribute("cx", "10");
    head.setAttribute("cy", "6.5");
    head.setAttribute("r", "3.1");
    const shoulders = document.createElementNS("http://www.w3.org/2000/svg", "path");
    shoulders.setAttribute("d", "M3.8 17a6.2 6.2 0 0 1 12.4 0");
    icon.append(head, shoulders);
    avatar.replaceChildren(icon);
  }
  accountButton.setAttribute(
    "aria-label",
    activeAuthUser ? `Profil ${displayName}` : "Profil — masuk atau daftar akun KodePen",
  );
  accountButton.title = activeAuthUser ? "Buka profil akun" : "Profil — masuk atau daftar akun KodePen";
}

function setCloudSyncStatus(message, isError = false) {
  const status = document.querySelector("#project-cloud-status");
  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function updateProjectStorageDescription() {
  const description = document.querySelector("#project-storage-description");
  description.textContent = activeAuthUser
    ? "Project akun tersimpan di browser dan disinkronkan secara privat ke Supabase."
    : "Project tersimpan di browser ini.";
}

function getCloudProjectPayload(project, userId = cloudSyncUserId) {
  return {
    user_id: userId,
    id: project.id,
    title: project.title.slice(0, 60),
    html: project.html,
    css: project.css,
    js: project.js,
    updated_at: new Date(project.updatedAt).toISOString(),
  };
}

function getCloudProjectIdsStorageKey(userId = cloudSyncUserId) {
  return `kodepen-cloud-project-ids:${userId}`;
}

function readKnownCloudProjectIds(userId = cloudSyncUserId) {
  try {
    const storedIds = JSON.parse(localStorage.getItem(getCloudProjectIdsStorageKey(userId)) || "[]");
    return new Set(Array.isArray(storedIds) ? storedIds.filter((id) => typeof id === "string") : []);
  } catch (error) {
    console.error("Daftar project yang tersinkron tidak dapat dibaca.", error);
    return new Set();
  }
}

function persistKnownCloudProjectIds(ids, userId = cloudSyncUserId) {
  try {
    localStorage.setItem(getCloudProjectIdsStorageKey(userId), JSON.stringify([...ids]));
  } catch (error) {
    console.error("Daftar project yang tersinkron tidak dapat disimpan.", error);
  }
}

function scheduleCloudProjectSync(project) {
  if (!supabaseClient || !activeAuthUser || !cloudSyncReady || cloudSyncUserId !== activeAuthUser.id) {
    return;
  }

  const userId = activeAuthUser.id;
  pendingCloudProjects.set(project.id, { ...project });
  setCloudSyncStatus("Menyinkronkan project ke Supabase…");
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(() => {
    const projectsToSync = [...pendingCloudProjects.values()];
    pendingCloudProjects.clear();
    queueCloudProjectSync(projectsToSync, userId);
  }, 700);
}

function queueCloudProjectSync(projectsToSync, userId) {
  if (projectsToSync.length === 0) {
    return;
  }

  cloudSyncQueue = cloudSyncQueue
    .then(async () => {
      if (cloudSyncUserId !== userId || !supabaseClient) {
        return;
      }
      for (const project of projectsToSync) {
        if (cloudSyncUserId !== userId || !supabaseClient) {
          return;
        }
        const { error } = await supabaseClient
          .from("projects")
          .upsert(getCloudProjectPayload(project, userId), { onConflict: "user_id,id" });
        if (error) {
          throw error;
        }
        if (cloudSyncUserId !== userId || !supabaseClient) {
          return;
        }
        const knownIds = readKnownCloudProjectIds(userId);
        knownIds.add(project.id);
        persistKnownCloudProjectIds(knownIds, userId);
      }
      if (cloudSyncUserId === userId) {
        setCloudSyncStatus(`${projectsToSync.length} project tersinkron ke Supabase.`);
      }
    })
    .catch((error) => {
      console.error("Project gagal disinkronkan ke Supabase.", error);
      if (cloudSyncUserId === userId) {
        const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
        setCloudSyncStatus(`Sinkronisasi gagal: ${message}. Periksa tabel dan kebijakan RLS.`, true);
      }
    });
}

function deleteCloudProject(projectId, userId) {
  if (!supabaseClient || !userId || cloudSyncUserId !== userId) {
    return;
  }

  window.clearTimeout(cloudSyncTimer);
  pendingCloudProjects.delete(projectId);
  const pendingProjects = [...pendingCloudProjects.values()];
  pendingCloudProjects.clear();
  const activeProject = getActiveProject();
  if (activeProject && !pendingProjects.some((project) => project.id === activeProject.id)) {
    pendingProjects.push({ ...activeProject });
  }
  cloudSyncQueue = cloudSyncQueue
    .then(async () => {
      if (cloudSyncUserId !== userId || !supabaseClient) {
        return;
      }

      const { error } = await supabaseClient
        .from("projects")
        .delete()
        .eq("user_id", userId)
        .eq("id", projectId);
      if (error) {
        throw error;
      }
      if (cloudSyncUserId !== userId || !supabaseClient) {
        return;
      }
      const knownIds = readKnownCloudProjectIds(userId);
      knownIds.delete(projectId);
      persistKnownCloudProjectIds(knownIds, userId);

      for (const project of pendingProjects) {
        if (cloudSyncUserId !== userId || !supabaseClient) {
          return;
        }
        const { error: saveError } = await supabaseClient
          .from("projects")
          .upsert(getCloudProjectPayload(project, userId), { onConflict: "user_id,id" });
        if (saveError) {
          throw saveError;
        }
        if (cloudSyncUserId !== userId || !supabaseClient) {
          return;
        }
        knownIds.add(project.id);
        persistKnownCloudProjectIds(knownIds, userId);
      }
      setCloudSyncStatus("Project dihapus dari browser dan akun Supabase.");
    })
    .catch((error) => {
      console.error("Project gagal dihapus dari Supabase.", error);
      if (cloudSyncUserId === userId) {
        const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
        setCloudSyncStatus(`Project terhapus dari browser, tetapi gagal dihapus dari Supabase: ${message}`, true);
      }
    });
}

function readUnscopedLocalProjects() {
  try {
    const storedProjects = JSON.parse(localStorage.getItem("kodepen-projects-v1") || "[]");
    if (!Array.isArray(storedProjects)) {
      return [];
    }
    return storedProjects
      .filter((project) =>
        project &&
        typeof project.id === "string" &&
        typeof project.title === "string" &&
        isValidCode(project),
      )
      .map((project) => ({
        ...project,
        updatedAt: Number.isFinite(project.updatedAt) ? project.updatedAt : Date.now(),
      }));
  } catch (error) {
    console.error("Project lama di browser tidak dapat dibaca.", error);
    return [];
  }
}

function getMigratedLocalProjectIds(userId = activeAuthUser?.id) {
  if (!userId) {
    return new Set();
  }
  try {
    const storedIds = JSON.parse(localStorage.getItem(`kodepen-migrated-project-ids:${userId}`) || "[]");
    return new Set(Array.isArray(storedIds) ? storedIds.filter((id) => typeof id === "string") : []);
  } catch (error) {
    console.error("Status impor project lokal tidak dapat dibaca.", error);
    return new Set();
  }
}

function updateLocalProjectMigrationButton() {
  const button = document.querySelector("#migrate-local-projects");
  const migratedIds = getMigratedLocalProjectIds();
  const localProjects = readUnscopedLocalProjects().filter((project) => !migratedIds.has(project.id));
  button.hidden = !activeAuthUser || !cloudSyncReady || localProjects.length === 0;
  button.textContent = localProjects.length > 0
    ? `Simpan ${localProjects.length} project lokal ke akun`
    : "Simpan project lokal ke akun";
}

async function syncAccountProjects(userId) {
  cloudSyncReady = false;
  setCloudSyncStatus("Mengambil project akun dari Supabase…");
  const { data: remoteRows, error } = await supabaseClient
    .from("projects")
    .select("id, title, html, css, js, updated_at")
    .eq("user_id", userId);

  if (error) {
    throw error;
  }
  if (cloudSyncUserId !== userId || !activeAuthUser || activeAuthUser.id !== userId) {
    return;
  }

  const remoteProjects = (remoteRows || [])
    .filter((row) =>
      row &&
      typeof row.id === "string" &&
      typeof row.title === "string" &&
      isValidCode(row),
    )
    .map((row) => ({
      id: row.id,
      title: row.title,
      html: row.html,
      css: row.css,
      js: row.js,
      updatedAt: Date.parse(row.updated_at) || Date.now(),
    }));
  const knownCloudProjectIds = readKnownCloudProjectIds(userId);
  const localProjects = accountHasSavedProjects
    ? projects.filter((project) =>
      !knownCloudProjectIds.has(project.id) ||
      remoteProjects.some((remoteProject) => remoteProject.id === project.id))
    : [];
  const remoteProjectIds = new Set(remoteProjects.map((project) => project.id));
  persistKnownCloudProjectIds(remoteProjectIds, userId);
  const mergedProjects = new Map(remoteProjects.map((project) => [project.id, project]));

  for (const localProject of localProjects) {
    const remoteProject = mergedProjects.get(localProject.id);
    if (!remoteProject || localProject.updatedAt > remoteProject.updatedAt) {
      mergedProjects.set(localProject.id, localProject);
    }
  }

  if (mergedProjects.size === 0 && !accountHasSavedProjects && projects.length > 0) {
    mergedProjects.set(projects[0].id, projects[0]);
  }
  if (mergedProjects.size === 0) {
    const emptyAccountProject = {
      id: createProjectId(),
      title: "Website Pertamaku",
      ...starterCode,
      updatedAt: Date.now(),
    };
    mergedProjects.set(emptyAccountProject.id, emptyAccountProject);
  }
  projects = [...mergedProjects.values()].sort((first, second) => second.updatedAt - first.updatedAt);
  const storedActiveId = localStorage.getItem(activeProjectStorageKey);
  const activeProject = projects.find((project) => project.id === storedActiveId)
    || projects[0];
  if (activeProject) {
    activeProjectId = activeProject.id;
    setEditorCode(activeProject);
    document.querySelector("#editor-topbar .project-title").textContent = activeProject.title;
    renderPreview();
  }
  renderProjectList();
  persistProjects();
  accountHasSavedProjects = true;
  cloudSyncReady = true;
  setCloudSyncStatus(`Project tersinkron. ${projects.length} project tersedia di akun ini.`);
  updateLocalProjectMigrationButton();

  const projectsToSync = [];
  for (const localProject of localProjects) {
    const remoteProject = remoteProjects.find((project) => project.id === localProject.id);
    if (!remoteProject || localProject.updatedAt > remoteProject.updatedAt) {
      projectsToSync.push(localProject);
    }
  }
  if (remoteProjects.length === 0 && projectsToSync.length === 0 && projects.length > 0) {
    projectsToSync.push(projects[0]);
  }
  queueCloudProjectSync(projectsToSync, userId);
}

async function refreshCloudProjects() {
  if (!activeAuthUser || !supabaseClient || !cloudSyncReady || cloudRefreshPromise) {
    return;
  }

  const userId = activeAuthUser.id;
  window.clearTimeout(saveTimer);
  saveCode();
  cloudRefreshPromise = (async () => {
    try {
      await syncAccountProjects(userId);
    } catch (error) {
      if (cloudSyncUserId !== userId) {
        return;
      }
      console.error("Penyegaran project dari Supabase gagal.", error);
      const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
      setCloudSyncStatus(`Penyegaran project gagal: ${message}. Project lokal tetap tersedia.`, true);
      cloudSyncReady = true;
      updateLocalProjectMigrationButton();
    } finally {
      cloudRefreshPromise = null;
    }
  })();
  await cloudRefreshPromise;
}

async function migrateUnscopedLocalProjects() {
  if (!activeAuthUser || !cloudSyncReady) {
    setCloudSyncStatus("Masuk dan tunggu sinkronisasi akun selesai sebelum menyimpan project lokal.", true);
    return;
  }

  const migratedIds = getMigratedLocalProjectIds(activeAuthUser.id);
  const localProjects = readUnscopedLocalProjects().filter((project) => !migratedIds.has(project.id));
  if (localProjects.length === 0) {
    updateLocalProjectMigrationButton();
    return;
  }

  try {
    const mergedProjects = new Map(projects.map((project) => [project.id, project]));
    for (const localProject of localProjects) {
      const accountProject = mergedProjects.get(localProject.id);
      if (!accountProject || localProject.updatedAt > accountProject.updatedAt) {
        mergedProjects.set(localProject.id, localProject);
      }
    }
    projects = [...mergedProjects.values()].sort((first, second) => second.updatedAt - first.updatedAt);
    persistProjects();
    renderProjectList();
    accountHasSavedProjects = true;
    for (const project of localProjects) {
      migratedIds.add(project.id);
    }
    localStorage.setItem(
      `kodepen-migrated-project-ids:${activeAuthUser.id}`,
      JSON.stringify([...migratedIds]),
    );
  } catch (error) {
    console.error("Project lama gagal disalin ke daftar akun.", error);
    const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
    setCloudSyncStatus(`Project lokal gagal disalin ke daftar akun: ${message}`, true);
    return;
  }
  setCloudSyncStatus("Menyimpan project lokal ke akun…");

  queueCloudProjectSync(localProjects, activeAuthUser.id);
  updateLocalProjectMigrationButton();
}

function openAccount() {
  if (activeAuthUser) {
    showView("profile");
    return;
  }

  setAuthStatus(authDialogStatus, "");
  if (!accountDialog.open) {
    accountDialog.showModal();
  }
}

function getProviderDisplayName(user) {
  const provider = user.app_metadata?.provider;
  if (provider === "google") {
    return "Google";
  }
  if (provider === "github") {
    return "GitHub";
  }
  return "penyedia login";
}

function getSuggestedDisplayName(user) {
  const metadata = user.user_metadata || {};
  const suggestion = metadata.full_name || metadata.name || metadata.user_name || user.email?.split("@")[0];
  return String(suggestion || "Pengguna KodePen").trim().slice(0, 50) || "Pengguna KodePen";
}

async function loadOrCreateProfile(user) {
  const profileColumns = "id, display_name, bio, profile_completed, updated_at";
  const { data, error } = await supabaseClient
    .from("profiles")
    .select(profileColumns)
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }

  const { data: createdProfile, error: createError } = await supabaseClient
    .from("profiles")
    .insert({ id: user.id, display_name: getSuggestedDisplayName(user) })
    .select(profileColumns)
    .single();

  if (!createError) {
    return createdProfile;
  }

  if (createError.code === "23505") {
    const { data: existingProfile, error: retryError } = await supabaseClient
      .from("profiles")
      .select(profileColumns)
      .eq("id", user.id)
      .single();
    if (!retryError && existingProfile) {
      return existingProfile;
    }
    if (retryError) {
      throw retryError;
    }
  }

  throw createError;
}

function showProfile(user, profile) {
  document.querySelector("#profile-email").value = user.email || "Email tidak dibagikan oleh provider";
  document.querySelector("#profile-display-name").value = profile.display_name;
  document.querySelector("#profile-bio").value = profile.bio;
  const onboarding = document.querySelector("#profile-onboarding");
  onboarding.hidden = profile.profile_completed;
  document.querySelector("#profile-onboarding-title").textContent =
    `Akun berhasil diverifikasi melalui ${getProviderDisplayName(user)}.`;
}

function clearProfileForm() {
  document.querySelector("#profile-email").value = "";
  document.querySelector("#profile-display-name").value = "";
  document.querySelector("#profile-bio").value = "";
  document.querySelector("#profile-onboarding").hidden = true;
}

function rememberAuthReturnView(view) {
  try {
    sessionStorage.setItem("kodepen-auth-return-view", view);
  } catch (error) {
    console.error("Halaman tujuan setelah login tidak dapat disimpan.", error);
  }
}

function consumeAuthReturnView() {
  try {
    const view = sessionStorage.getItem("kodepen-auth-return-view");
    sessionStorage.removeItem("kodepen-auth-return-view");
    return view;
  } catch (error) {
    console.error("Halaman tujuan setelah login tidak dapat dipulihkan.", error);
    return null;
  }
}

function clearAuthReturnView() {
  try {
    sessionStorage.removeItem("kodepen-auth-return-view");
  } catch (error) {
    console.error("Halaman tujuan login yang tersimpan tidak dapat dihapus.", error);
  }
}

async function handleAuthSession(event, session) {
  const user = session?.user || null;
  const previousUser = activeAuthUser;

  if (!user) {
    if (previousUser) {
      window.clearTimeout(saveTimer);
      saveCode();
      activeAuthUser = null;
      activeProfile = null;
      cloudSyncReady = false;
      cloudSyncUserId = "";
      window.clearTimeout(cloudSyncTimer);
      clearProfileForm();
      setAccountStorageScope("");
      setAuthStatus(profileStatus, "");
      updateAccountButton();
      updateProjectStorageDescription();
      updateLocalProjectMigrationButton();
      if (!document.querySelector("#profile-view").hidden) {
        showView("discover");
      }
    }
    return;
  }

  if (previousUser?.id !== user.id) {
    window.clearTimeout(saveTimer);
    saveCode();
    activeAuthUser = user;
    activeProfile = null;
    clearProfileForm();
    setAuthStatus(profileStatus, "");
    setAccountStorageScope(user.id);
  } else {
    activeAuthUser = user;
  }
  updateAccountButton();
  updateProjectStorageDescription();

  try {
    const profile = await loadOrCreateProfile(user);
    if (activeAuthUser?.id !== user.id) {
      return;
    }
    activeProfile = profile;
    showProfile(user, activeProfile);
    setAuthStatus(profileStatus, "");
    updateAccountButton();
    if (!activeProfile.profile_completed) {
      showView("profile");
    } else if (event === "SIGNED_IN") {
      const returnView = consumeAuthReturnView();
      showView(["discover", "learning", "editor"].includes(returnView) ? returnView : "discover");
    }
    try {
      await syncAccountProjects(user.id);
    } catch (syncError) {
      console.error("Project akun gagal dimuat dari Supabase.", syncError);
      if (cloudSyncUserId === user.id) {
        const syncMessage = syncError instanceof Error ? syncError.message : "kesalahan tidak diketahui";
        setCloudSyncStatus(
          `Project akun gagal dimuat: ${syncMessage}. Pastikan supabase/profiles.sql sudah dijalankan.`,
          true,
        );
        cloudSyncReady = false;
        updateLocalProjectMigrationButton();
      }
    }
  } catch (error) {
    if (activeAuthUser?.id !== user.id) {
      return;
    }
    console.error("Profil akun tidak dapat dimuat.", error);
    const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
    setAuthStatus(
      profileStatus,
      `Profil belum dapat dimuat. Pastikan skrip supabase/profiles.sql sudah dijalankan. Detail: ${message}`,
      true,
    );
    if (event === "SIGNED_IN" || !document.querySelector("#profile-view").hidden) {
      showView("profile");
    }
  }
}

function isValidSupabaseConfig(config) {
  if (
    typeof config.supabaseUrl !== "string" ||
    typeof config.publishableKey !== "string" ||
    !config.supabaseUrl.trim() ||
    !config.publishableKey.trim() ||
    /YOUR_|PLACEHOLDER/i.test(`${config.supabaseUrl} ${config.publishableKey}`)
  ) {
    return false;
  }

  try {
    const url = new URL(config.supabaseUrl);
    return url.protocol === "https:" || (
      url.protocol === "http:" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    );
  } catch {
    return false;
  }
}

async function startOAuthSignIn(provider) {
  if (!supabaseClient) {
    setAuthStatus(authDialogStatus, "Login belum siap. Lengkapi konfigurasi Supabase sesuai panduan.", true);
    return;
  }
  if (location.protocol === "file:") {
    setAuthStatus(authDialogStatus, "OAuth memerlukan alamat web. Jalankan situs melalui server lokal atau hosting HTTPS; file:// tidak didukung.", true);
    return;
  }

  for (const button of authProviderButtons) {
    button.disabled = true;
  }
  setAuthStatus(authDialogStatus, `Menghubungkan ke ${provider === "google" ? "Google" : "GitHub"}…`);

  try {
    const returnView = !document.querySelector("#editor-view").hidden
      ? "editor"
      : !document.querySelector("#learning-view").hidden
        ? "learning"
        : "discover";
    rememberAuthReturnView(returnView);
    const redirectUrl = new URL(location.pathname, location.origin);
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: { redirectTo: redirectUrl.toString() },
    });
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(`Login ${provider} gagal dimulai.`, error);
    clearAuthReturnView();
    const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
    setAuthStatus(authDialogStatus, `Login gagal dimulai: ${message}`, true);
    for (const button of authProviderButtons) {
      button.disabled = false;
    }
  }
}

for (const button of document.querySelectorAll("[data-close-account]")) {
  button.addEventListener("click", () => accountDialog.close());
}

accountDialog.addEventListener("click", (event) => {
  if (event.target === accountDialog) {
    accountDialog.close();
  }
});

accountButton.addEventListener("click", openAccount);

for (const button of authProviderButtons) {
  button.addEventListener("click", () => startOAuthSignIn(button.dataset.authProvider));
}

profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient || !activeAuthUser) {
    setAuthStatus(profileStatus, "Masuk kembali untuk mengubah profil.", true);
    return;
  }

  const displayName = document.querySelector("#profile-display-name").value.trim();
  const bio = document.querySelector("#profile-bio").value.trim();
  if (!displayName || displayName.length > 50 || bio.length > 240) {
    setAuthStatus(profileStatus, "Nama tampilan wajib diisi (maksimal 50 karakter); bio maksimal 240 karakter.", true);
    return;
  }

  const saveButton = document.querySelector("#profile-save-button");
  saveButton.disabled = true;
  setAuthStatus(profileStatus, "Menyimpan profil…");
  try {
    const { data, error } = await supabaseClient
      .from("profiles")
      .update({
        display_name: displayName,
        bio,
        profile_completed: true,
        updated_at: new Date().toISOString(),
      })
      .eq("id", activeAuthUser.id)
      .select("id, display_name, bio, profile_completed, updated_at")
      .single();
    if (error) {
      throw error;
    }

    activeProfile = data;
    showProfile(activeAuthUser, activeProfile);
    updateAccountButton();
    setAuthStatus(profileStatus, "Profil berhasil disimpan.");
  } catch (error) {
    console.error("Perubahan profil gagal disimpan.", error);
    const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
    setAuthStatus(profileStatus, `Profil gagal disimpan: ${message}`, true);
  } finally {
    saveButton.disabled = false;
  }
});

document.querySelector("#sign-out-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  button.disabled = true;
  setAuthStatus(profileStatus, "Keluar dari akun…");
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Logout gagal.", error);
    const message = error instanceof Error ? error.message : "kesalahan tidak diketahui";
    setAuthStatus(profileStatus, `Gagal keluar: ${message}`, true);
  } finally {
    button.disabled = false;
  }
});

function initializeAuth() {
  const config = window.KODEPEN_AUTH_CONFIG || {};
  const configured = isValidSupabaseConfig(config);
  const providerSdk = window.supabase;
  if (!configured) {
    authSetupNote.textContent = "Login belum aktif. Isi URL project dan publishable key di auth-config.js, lalu ikuti panduan setup.";
  } else if (!providerSdk || typeof providerSdk.createClient !== "function") {
    authSetupNote.textContent = "SDK Supabase tidak dapat dimuat. Periksa koneksi internet dan muat ulang halaman.";
  } else {
    try {
      supabaseClient = providerSdk.createClient(config.supabaseUrl, config.publishableKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      });
      authSetupNote.textContent = "Pilih Google atau GitHub. Login pertama akan membuat akun KodePen secara otomatis.";
    } catch (error) {
      console.error("Klien Supabase gagal disiapkan.", error);
      authSetupNote.textContent = "Klien Supabase gagal disiapkan. Periksa URL dan publishable key di auth-config.js.";
    }
  }

  for (const button of authProviderButtons) {
    button.disabled = !supabaseClient;
  }

  const providerError = new URLSearchParams(location.search).get("error_description");
  if (providerError) {
    setAuthStatus(authDialogStatus, `Login ditolak provider: ${providerError}`, true);
    accountDialog.showModal();
  }

  if (!supabaseClient) {
    return;
  }

  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === "INITIAL_SESSION") {
      return;
    }
    window.setTimeout(() => {
      void handleAuthSession(event, session);
    }, 0);
  });

  supabaseClient.auth.getSession().then(({ data, error }) => {
    if (error) {
      console.error("Sesi akun tidak dapat dipulihkan.", error);
      setAuthStatus(authDialogStatus, `Sesi tidak dapat dipulihkan: ${error.message}`, true);
      return;
    }
    void handleAuthSession("INITIAL_SESSION", data.session);
  }).catch((error) => {
    console.error("Sesi akun gagal dimuat.", error);
    setAuthStatus(authDialogStatus, "Sesi akun gagal dimuat. Periksa koneksi, lalu muat ulang halaman.", true);
  });
}

updateAccountButton();
updateProjectStorageDescription();
setCloudSyncStatus("Tanpa login, project tersimpan di browser ini.");
window.addEventListener("focus", () => {
  void refreshCloudProjects();
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    void refreshCloudProjects();
  }
});
initializeAuth();

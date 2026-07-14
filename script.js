// ===============================
// BVLTNE v0.3
// ===============================

// Supabase
const SUPABASE_URL = "https://qypotzqpbjgnyvraiajk.supabase.co";
const SUPABASE_KEY =
  "sb_publishable_WJeDy9HerJD_SXy1sA018w_MBTkgsW6";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("BVLTNE Connected");
console.log(db);

// -------------------------------

function hideAll() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("producerPage").classList.add("hidden");
}

function goHome() {
  hideAll();
  document.getElementById("homePage").classList.remove("hidden");
}

function showLogin() {
  hideAll();
  document.getElementById("loginPage").classList.remove("hidden");
}

function login() {
  const pw = document.getElementById("password").value;

  if (pw === "010305") {
    hideAll();
    document.getElementById("producerPage").classList.remove("hidden");
  } else {
    alert("Wrong password.");
  }
}

function startSession() {
  alert("Artist page will be built next.");
}

// 임시
function testBackend() {
  alert("Supabase connection is ready.");
}

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("startBtn")?.addEventListener("click", startSession);

  document.getElementById("producerLink")?.addEventListener("click", showLogin);

  document.getElementById("loginBtn")?.addEventListener("click", login);

  document.getElementById("backBtn")?.addEventListener("click", goHome);

  document.getElementById("instrumentalFile")?.addEventListener("change", function () {

    const file = this.files[0];

    document.getElementById("instrumentalName").innerText =
      file ? file.name : "No file selected";

  });

  document.getElementById("guideFile")?.addEventListener("change", function () {

    const file = this.files[0];

    document.getElementById("guideName").innerText =
      file ? file.name : "No file selected";

  });

});

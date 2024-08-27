const d = document;

const textConv = d.getElementById("text-converted");
const messageDiv = d.getElementById("message"),
  messageH2 = d.querySelector("#message h2"),
  messageP = d.querySelector("#message p");

function initialMessage() {
  let textSub = d.getElementById("text-submited").value;

  if (textSub.trim() === "") {
    messageDiv.classList.remove("hidden");
    messageH2.innerText = "Ningún mensaje fue encontrado";
    messageP.innerText =
      "Ingresa el texto que desees encriptar o desencriptar.";
  }
}

function verifyInfo() {
  let textSub = d.getElementById("text-submited").value.trim();

  messageH2.innerText = "";
  messageP.innerText = "";

  if (textSub === "") {
    messageDiv.classList.remove("hidden");
    messageH2.textContent = "Ningún mensaje fue encontrado";
    messageP.textContent =
      "Ingresa el texto que desees encriptar o desencriptar.";
    return false;
  }

  let regExp = /^[a-z\s]*$/;
  if (!regExp.test(textSub)) {
    messageDiv.classList.remove("hidden");
    messageP.textContent =
      "El texto solo puede contener minúsculas, sin números ni caracteres especiales.";
    return false;
  }

  messageDiv.classList.add("hidden");
  return true;
}

function encryptInfo() {
  if (!verifyInfo()) {
    return "";
  }

  let textSub = d.getElementById("text-submited").value;

  let encryptText = textSub
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return encryptText;
}

function decryptInfo() {
  if (!verifyInfo()) {
    return "";
  }

  let textSub = d.getElementById("text-submited").value;

  let decryptText = textSub;

  let text = decryptText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return text;
}

function showText(event) {
  let userAction = event.target.id;

  messageH2.textContent = "";
  messageP.textContent = "";

  let result = "";

  if (userAction === "encrypt") {
    result = encryptInfo();
  } else if (userAction === "decrypt") {
    result = decryptInfo();
  }

  let image = d.getElementById("picture");
  image.classList.remove("hidden-2");
  image.classList.add("hidden");
  messageDiv.classList.remove("hidden");

  messageH2.textContent = result;
}

function clearInterface() {
  let image = d.getElementById("picture");
  image.classList.remove("hidden-2");
  image.classList.remove("hidden");

  d.getElementById("text-submited").value = "";
  messageH2.classList.remove("hidden");
  messageP.classList.remove("hidden");
  messageDiv.classList.remove("hidden");

  messageH2.textContent = "";
  messageP.textContent = "";
  initialMessage();
}

function copyText() {
  let textoCopied = messageH2.textContent;

  if (textoCopied) {
    navigator.clipboard.writeText(textoCopied);
    messageP.textContent = "Texto copiado.";
  }
}

function buttons() {
  let encrypt = d.getElementById("encrypt"),
    decrypt = d.getElementById("decrypt"),
    copy = d.getElementById("copy"),
    clear = d.getElementById("clear");

  encrypt.addEventListener("click", showText);
  decrypt.addEventListener("click", showText);
  copy.addEventListener("click", copyText);
  clear.addEventListener("click", clearInterface);

  initialMessage();
}

d.addEventListener("DOMContentLoaded", buttons);

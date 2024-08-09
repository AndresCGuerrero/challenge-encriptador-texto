// Función para encriptar el texto
function encriptarTexto(texto) {
  // Validar el texto antes de encriptar
  if (!validarTexto(texto)) {
    return "Error: El texto debe contener solo letras minúsculas, sin acentos ni caracteres especiales.";
  }

  // Reemplazar las letras según las llaves de encriptación
  var textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
  // Validar el texto antes de desencriptar
  if (!validarTexto(texto)) {
    return "Error: El texto debe contener solo letras minúsculas, sin acentos ni caracteres especiales.";
  }

  // Revertir el proceso de encriptación
  var textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return textoDesencriptado;
}

// Función para validar el texto
function validarTexto(texto) {
  var regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
  return regex.test(texto);
}

// Función para manejar el clic en los botones
function manejarClicEncriptar() {
  var textoIngresado = document.getElementById("text-submited").value;
  var resultado = encriptarTexto(textoIngresado);
  mostrarResultado(resultado);
}

function manejarClicDesencriptar() {
  var textoIngresado = document.getElementById("text-submited").value;
  var resultado = desencriptarTexto(textoIngresado);
  mostrarResultado(resultado);
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
  var areaTextoConvertido = document.getElementById("text-converted");
  var mensaje = document.getElementById("message");

  if (resultado.startsWith("Error")) {
    // Mostrar mensaje de error
    areaTextoConvertido.value = "";
    mensaje.querySelector("h2").textContent = resultado;
    mensaje.style.display = "flex";
  } else {
    // Mostrar el texto encriptado/desencriptado
    areaTextoConvertido.value = resultado;
    mensaje.style.display = "none";
  }
}

// Asignar funciones a los botones
document
  .querySelector("button:nth-child(1)")
  .addEventListener("click", manejarClicEncriptar);
document
  .querySelector("button:nth-child(2)")
  .addEventListener("click", manejarClicDesencriptar);

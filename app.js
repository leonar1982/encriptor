
function encriptar() {
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = CryptoJS.AES.encrypt(textoOriginal, "secret key 123").toString();
    document.getElementById("textoResultado").value = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("textoResultado").value;
    var textoDesencriptado = CryptoJS.AES.decrypt(textoEncriptado, "secret key 123").toString(CryptoJS.enc.Utf8);
    document.getElementById("textoResultado").value = textoDesencriptado;
}
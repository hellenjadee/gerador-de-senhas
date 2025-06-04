document.getElementById("gerarBtn").addEventListener("click", gerarSenha);

document.getElementById("length").addEventListener("input", function() {
    document.getElementById("lengthValue").textContent = this.value;
});

function gerarSenha() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
    const charsetNumbers = "0123456789";
    const charsetSymbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

    let charset = "";
    if (useUppercase) charset += charsetUppercase;
    if (useLowercase) charset += charsetLowercase;
    if (useNumbers) charset += charsetNumbers;
    if (useSymbols) charset += charsetSymbols;

    if (charset === "") {
        alert("Escolha pelo menos um tipo de caractere.");
        return;
    }

    let senha = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        senha += charset[randomIndex];
    }

    document.getElementById("senhaGerada").value = senha;
}

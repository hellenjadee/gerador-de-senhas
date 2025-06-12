const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}<>?";

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthSlider.value);
  let chars = "";

  if (uppercaseEl.checked) chars += upper;
  if (lowercaseEl.checked) chars += lower;
  if (numbersEl.checked) chars += numbers;
  if (symbolsEl.checked) chars += symbols;

  if (chars.length === 0) {
    passwordInput.value = "Selecione pelo menos uma opção!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * chars.length);
    password += chars[random];
  }

  passwordInput.value = password;
});

copyBtn.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");
  copyBtn.textContent = "✅ Copiado!";
  setTimeout(() => (copyBtn.textContent = "📋 Copiar"), 1500);
});

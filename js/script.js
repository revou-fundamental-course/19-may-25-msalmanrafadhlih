let isCelsiusToFahrenheit = true;

function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const output = document.getElementById("outputTemp");
  const explanation = document.getElementById("explanation");

  if (isNaN(input)) {
    output.textContent = "";
    explanation.textContent = "Masukkan angka yang valid.";
    explanation.style.color = "red";
    return;
  }

  let result, explainText;

  if (isCelsiusToFahrenheit) {
    result = (input * 9 / 5) + 32;
    explainText = `${input}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;
  } else {
    result = (input - 32) * 5 / 9;
    explainText = `(${input}°F - 32) × (5/9) = ${result.toFixed(2)}°C`;
  }

  output.textContent = result.toFixed(2);
  explanation.textContent = explainText;
  explanation.style.color = "";
}

function resetForm() {
  document.getElementById("inputTemp").value = "";
  document.getElementById("outputTemp").textContent = "";
  const explanation = document.getElementById("explanation");
  explanation.textContent = "";
  explanation.style.color = "";
}

function reverseConversion() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

  document.querySelector("label[for='inputTemp']").textContent = isCelsiusToFahrenheit
    ? "Celsius (°C):"
    : "Fahrenheit (°F):";
  document.querySelector("label[for='outputTemp']").textContent = isCelsiusToFahrenheit
    ? "Fahrenheit (°F):"
    : "Celsius (°C):";
  document.querySelector("p[class='a-link']").innerHTML = isCelsiusToFahrenheit
    ? '<a href="#">Celsius ke Fahrenheit</a>'
    : '<a href="#">Fahrenheit ke Celcius</a>';
    

  document.getElementById("introText").innerHTML = isCelsiusToFahrenheit
    ? 'Masukkan suhu derajat <strong>Celsius (°C)</strong> ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).'
    : 'Masukkan suhu derajat <strong>Fahrenheit (°F)</strong> ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celsius (°C).';

  document.getElementById("conversionTitle").textContent = isCelsiusToFahrenheit
    ? "Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)"
    : "Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)";

  document.getElementById("conversionExplanation").innerHTML = isCelsiusToFahrenheit
    ? `Suhu <strong>S</strong> dalam derajat Fahrenheit (°F) sama dengan suhu <strong>S</strong> dalam derajat Celsius (°C) kali <strong>9/5</strong> tambah <strong>32</strong>.<br><br>
       <strong>S(°F)</strong> = <strong>(S(°C) × 9/5) + 32</strong><br>
       atau<br>
       <strong>S(°F)</strong> = <strong>(S(°C) × 1.8) + 32</strong>`
    : `Suhu <strong>S</strong> dalam derajat Celsius (°C) sama dengan suhu <strong>S</strong> dalam derajat Fahrenheit (°F) dikurangi <strong>32</strong>, lalu dikalikan <strong>5/9</strong>.<br><br>
       <strong>S(°C)</strong> = <strong>(S(°F) - 32) × 5/9</strong>`;

  resetForm();
}

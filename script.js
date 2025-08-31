const btn = document.getElementById("convert-btn");
const btnClean = document.getElementById("clean-btn");
const selectFrom = document.getElementById("fromTemp");
const selectTo = document.getElementById("toTemp");
const input = Number(document.getElementById("inputValue").value);
const output = document.getElementById("result");

function convert() {
  const temps = selectFrom.value + "-" + selectTo.value;

  if (input === "" || isNaN(input)) {
    return alert("Coloque o valor para conversão!");
  }

  switch (temps) {
    case "C-F":
      output.textContent = (input * 9) / 5 + 32;
      break;
    case "C-K":
      output.textContent = input + 273.15;
      break;
    case "F-C":
      output.textContent = ((input - 32) * 5) / 9;
      break;
    case "F-K":
      output.textContent = ((input - 32) * 5) / 9 + 273.15;
      break;
    case "K-C":
      output.textContent = input - 273.15;
      break;
    case "K-F":
      output.textContent = ((input - 273.15) * 9) / 5 + 32;
      break;
    default:
      alert("Selecione uma conversão válida!");
      break;
  }
}
function cleanUp() {
  output.value = "0";
  input.value = "";
}

btn.addEventListener("click", convert);
btnClean.addEventListener("click", cleanUp);

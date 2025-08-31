const btn = document.getElementById("convert-btn");
const btnC = document.getElementById("clear-btn")
const selectFrom = document.getElementById("fromTemp");
const selectTo = document.getElementById("toTemp");

function convert() {
  const input = Number(document.getElementById("inputValue").value);
  const output = document.getElementById("result");
  const temps = selectFrom.value + "-" + selectTo.value;

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
function clear (){
  const clearResult = document.getElementById("result")
  clearResult.textContent = "0"
}

btn.addEventListener("click", convert);
btnC.addEventListener("click",clear )
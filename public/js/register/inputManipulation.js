let firstNameInput = document.getElementById("firstName");
let firstNameLengthRequired = document.getElementById("lettersRequired");
let firstNameSymbolsRequired = document.getElementById("symbolsRestriction");
let lastNameInput = document.getElementById("lastName");
let lastNameSymRes = document.getElementById("sybmolsRestricted");
let lastNameLettersReq = document.getElementById("lettersRequire");

let msgs = document.getElementById("firstNameMessages");
let regex = new RegExp(/^[a-zA-Z]{1,2}[a-zA-Z]*$/);
let hasLength = false;
let isAllowed = false;
firstNameInput.addEventListener("input", (ev) => {
  if (firstNameInput.value.length <= 3) {
    firstNameLengthRequired.style.color = "rgb(255, 76, 76)";
  }
  if (firstNameInput.value.length > 3) {
    firstNameLengthRequired.style.color = "rgb(127, 255, 122)";
    hasLength = true;
  }
  let testForUnallowedSymbols = regex.test(firstNameInput.value);
  if (testForUnallowedSymbols == true) {
    firstNameSymbolsRequired.style.color = "rgb(127, 255, 122)";
    isAllowed = true;
  } else {
    isAllowed = false;
    firstNameSymbolsRequired.style.color = "rgb(255, 76, 76)";
  }
});
lastNameInput.addEventListener("input", (ev) => {
  if (lastNameInput.value.length <= 3) {
    lastNameLettersReq.style.color = "rgb(255, 76, 76)";
  }
  if (lastNameInput.value.length > 3) {
    lastNameLettersReq.style.color = "rgb(127, 255, 122)";
    hasLength = true;
  }
});
firstNameInput.addEventListener("focusin", (ev) => {
  msgs.style.display = "block";
  msgs.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800 });
});

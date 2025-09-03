const state = {
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

const form = document.querySelector("form");
const output = document.querySelector("output");
const sortOneBtn = document.querySelector("#sortOne");
const sortAllBtn = document.querySelector("#sortAll");
const clearBtn = document.querySelector("#clearBank");
const oddsOutput = document.querySelector("#oddsOutput");
const evensOutput = document.querySelector("#evensOutput");

// Completed Adding to Bank
function addToBank(event) {
  //prevent the page form refreshing
  event.preventDefault();
  const number = event.target.elements.number.value;

  //prevents empty strings from being added
  if (number == "") {
    console.log("Enter in a valid number");
  } else {
    state["numberBank"].push(number);

    renderNumbers(state["numberBank"], output);
  }

  // clears input after number is added
  event.target.elements.number.value = null;
}
form.addEventListener("submit", addToBank);
// clears the Number Bank
clearBtn.addEventListener("click", () => {
  const emptySlate = (state["numberBank"] = []);
  output.replaceChildren(emptySlate);
});

function renderNumbers(numArray, domElement) {
  const numBankString = numArray.join(", ");

  domElement.replaceChildren(numBankString);
}

function sortOne() {
  const numArray = state["numberBank"];
  console.log(numArray);
  const firstNum = numArray.shift();
  console.log(firstNum);
  if (firstNum % 2 === 0) {
    state["evenNumbers"].push(firstNum);
  } else {
    state["oddNumbers"].push(firstNum);
  }

  // re-renders the numbers
  renderNumbers(state["numberBank"], output);
  renderNumbers(state["evenNumbers"], evensOutput);
  renderNumbers(state["oddNumbers"], oddsOutput);
}

function sortAll() {
  state["numberBank"].forEach((num) => {
    if (num % 2 === 0) {
      state["evenNumbers"].push(num);
    } else {
      state["oddNumbers"].push(num);
    }
  });

  // clears number bank
  const emptySlate = (state["numberBank"] = []);

  // re-renders the numbers
  renderNumbers(emptySlate, output);
  renderNumbers(state["evenNumbers"], evensOutput);
  renderNumbers(state["oddNumbers"], oddsOutput);
}

sortOneBtn.addEventListener("click", sortOne);
sortAllBtn.addEventListener("click", sortAll);

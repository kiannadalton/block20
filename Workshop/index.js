const state = {
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

const form = document.querySelector("form");
const output = document.querySelector("output");
const sortOneBtn = document.querySelector("#sortOne");
const sortAllBtn = document.querySelector("#sortAll");
const oddsOutput = document.querySelector("#oddsOutput");
const evensOutput = document.querySelector("#evensOutput");

function renderNumbers(number, domElement) {
  // if it renders weird, see if we need to join them with a .join

  //replace element
  domElement.replaceChildren(number);
}

//prevent the page form refreshing
//   event.preventDefault();

// When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
// state["numberBank"].push(number)

// The number bank is not changed if the user enters a non-numeric value.
// if(typeof num == "number"){ state["numberBank"].push(number) } else {console.log("Please enter in a number value")}

// The number bank should display all the numbers the user has entered.
// the push method will handle this

// When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category.
// sortOne = state["numberBank"].shift(number); if sortOne % 2 == 0, state["evenNumbers"].push(sortOne) else { state["oddNumbers"].push(sortOne) }

// When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.
// state["numberBank"].forEach((num) => { if num % 2 == 0, state["evenNumbers"].push(num) else { state["oddNumbers"].push(num) }})

// The numbers are placed into the correct bucket based on whether they are odd or even.

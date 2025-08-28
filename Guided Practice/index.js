// === State ===
const state = {
  start: ["sheep"],
  target: [],
};

/** Moves a sheep from start to target */
function moveSheep() {
  //sheep is the clicked on button that is removed from the state.start array and that value is moved to the state target array.
  const sheep = state.start.pop();
  state.target.push(sheep);

  //re-renders the starting and target banks
  render();
}

// === Render ===

const form = document.querySelector("form");
const startingBank = document.querySelector("#startingBank ul");
const targetBank = document.querySelector("#targetBank ul");

form.addEventListener("submit", addSheep);
/** Renders sheep on the starting bank */
function renderStartSheep() {
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    // TODO: Add event listener so the sheep moves when clicked
    button.addEventListener("click", moveSheep);

    return li;
  });
  // iterates through all of the sheep in the array
  startingBank.replaceChildren(...startingSheep);
}

/** Renders sheep on the target bank */
function renderTargetSheep() {
  // TODO
  //map creates a new array based on the sheep added to its array from the moveSheep array
  const targetSheep = state.target.map((sheep) => {
    //
    const element = document.createElement("li");
    element.textContent = "🐑";
    return element;
  });
  targetBank.replaceChildren(...targetSheep);
}

function render() {
  renderStartSheep();
  renderTargetSheep();
}

// === Script ===
// Initial render
render();

// TODO: Add sheep to the starting bank when the form is submitted

function addSheep(event) {
  // prevents page from refreshing
  event.preventDefault();

  const numSheep = form.elements.numSheep.value;
  //numSheep is the input value. the below loop adds a sheep for every increment in the input value to the start array within the state object.
  for (let i = 0; i < numSheep; i++) {
    state.start.push("sheep");
  }

  render();
  //clears the form
  form.elements.numSheep.value = null;
}

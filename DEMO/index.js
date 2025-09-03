const state = {
  numbers: [],
  total: 0,
};

/**
 * 👉 STEP 1: Grab the `form`, `output` and div with a class of `total`
 * from the html document and save them to variables
 */
const form = document.querySelector("form");
const output = document.querySelector("output");
const total = document.querySelector(".total");

/**
 * 👉 STEP 2: Add an event listener to the form element which will wait for
 * a submit event and call the function `addNumber`
 *
 * Listening for `submit` is almost always better than the button `click`
 */

form.addEventListener("submit", addNumber);

/**
 * 👉 STEP 3: Add an event listener to the total element which will wait for
 * a click event and call the function `onNumberClick`
 *
 * This function uses event bubbling:
 *      we attach the event listener to the parent so that we don't have to attach it to each child
 */

total.addEventListener("click", onNumberClick);
/**
 * 👉 STEP 4: Complete the function so that it renders an array of numbers separated by commas to the element passed
 *
 * Note: This will be used in the addNumber function
 *
 *
 * @param {Number[]} numberBank - array of integers
 * @param {Object} element - DOM element to replace the children of
 */
function renderNumbers(numberBank, element) {
  //[1, 2, 3]
  //to convert to string and join
  const commaNumberBank = numberBank.join(", ");

  element.replaceChildren(commaNumberBank);
}

/**
 * 👉 STEP 5: Complete the function so that it adds the submitted number from the form into `numbers`, clears the form, and re-renders the page.
 *
 * Hint: Make sure to check it's a number before adding it into `numbers`
 *
 * Note: use renderNumbers to re-render the page
 *
 * @param {Event} event the deepest element that was clicked
 */
function addNumber(event) {
  //prevent the page form refreshing
  event.preventDefault();
  //get number from the form
  const number = form.elements.number.value;
  if (parseInt(number)) {
    state.numbers.push(number);

    //add number to running total
    state.total += parseInt(number);
    //re-render total on page;
    total.replaceChildren(state.total);

    //re-render the page (number bank, DOM element)
    renderNumbers(state.numbers, output);
  }
  //clear the form
  form.elements.number.value = null;
}

/**
 * 👉 STEP 6: Complete the function so that it updates the class of the event target to `active`
 *
 * Note: There are css styles applied to this class so the style of the
 * number should toggle on and off when clicking the total number
 *
 * @param {Event} event the deepest element that was clicked
 */
function onNumberClick(event) {
  //we need the target of the event (see target by looking at console.log(event) and checking the inspect)
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active");
  }
}

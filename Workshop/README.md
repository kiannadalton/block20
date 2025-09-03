# Workshop - Odds and Events

In this workshop, you'll continue to get more practice working with events and event handlers. The goal is to create an app that allows a user to enter a number which gets placed into a number bank. The user can then sort the numbers in the bank into one of two categories: odd or even.

![Preview of the app: a user types 9 into the input field and clicks a button to add it to a number bank. The user then clicks the "Sort 1" button. The 9 is moved from the number bank into the "odd" category.](odds_and_events-example_flow.png)

## Demonstrates use of:

- .querySelector
- .addEventListener
- .replaceChildren
- .preventDefault()
- .shift
- .push
- objects
- classes
- ids
- if...else

## Instructions

Remember to work on a local cloned copy of your forked repo, and to add your cohort team so that your code can be reviewed!

1. Read and serve `index.html` to familiarize yourself with the elements you'll be working with.
1. Write `index.js` so that your app meets the requirements below.

## Requirements

- When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
- The number bank is _not_ changed if the user enters a non-numeric value.
- The number bank should display all the numbers the user has entered.
- When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category.
- When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.
- The numbers are placed into the correct bucket based on whether they are odd or even.

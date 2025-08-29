const kikiFacts = {
  Type: "Cat",
  Age: "13",
  Mood: "Happy",
};
const kikiFavs = [
  "Sleep next to humans",
  "Eat wet food",
  "Chase string around the living room",
  "Meow until someone gives me attention",
];

const root = document.querySelector("#root");

//make an h1 tag called Things about Kiki
const kikiTitle = document.createElement("h1");
kikiTitle.innerText = "Things about Kiki";
root.appendChild(kikiTitle);

// h2: key facts
const keyFacts = document.createElement("h2");
keyFacts.innerText = "Key Facts:";
root.appendChild(keyFacts);
// make table, thead - th th th , tbody - tr td td td
//creates all main parts of table
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");

root.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
tbody.appendChild(tr);

//for each key in kikiFacts, createElement th and append it
for (let key in kikiFacts) {
  const th = document.createElement("th");
  th.innerText = key;
  thead.appendChild(th);
}
for (let key of Object.values(kikiFacts)) {
  const td = document.createElement("td");
  td.innerText = key;
  tr.appendChild(td);
}

// h2: favorite things to do
const favThings = document.createElement("h2");
favThings.innerText = "Favorite Things to Do:";
root.appendChild(favThings);

const ol = document.createElement("ol");
root.appendChild(ol);
// make an or list and then li
kikiFavs.forEach((thing) => {
  const li = document.createElement("li");
  li.innerText = thing;
  ol.appendChild(li);
});

// add a picture
const image = document.createElement("img");
image.setAttribute("src", "kiki.jpeg");
root.appendChild(image);

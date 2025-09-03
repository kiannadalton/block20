const cafeMielBtn = document.querySelector("#cafeMiel");

const coldBrewBtn = document.querySelector("#coldBrew");

const aeroPressBtn = document.querySelector("#aeropress");

function favoriteItem(event) {
  if (event.target.classList.contains("filled")) {
    event.target.classList.remove("filled");
    event.target.innerHTML = `&#9825;`;
  } else {
    event.target.classList.add("filled");
    event.target.innerHTML = `&#10084;`;
  }
}

cafeMielBtn.addEventListener("click", favoriteItem);
coldBrewBtn.addEventListener("click", favoriteItem);
aeroPressBtn.addEventListener("click", favoriteItem);

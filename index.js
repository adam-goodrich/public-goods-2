const closeButton = document.querySelector(".close-btn");

const popup = document.querySelector(".popup");

const mainPopup = document.querySelector(".main-popup");

const getFactsButton = document.querySelector(".getFacts");

const showPopup = () => {
  console.log("called");
  popup.style.display = "flex";
  mainPopup.style.display = "flex";
  mainPopup.style.cssText =
    "animation:slide-in .5s ease; animation-fill-mode: forwards;";
};

closeButton.addEventListener("click", () => {
  setTimeout(() => {
    popup.style.display = "none";
    mainPopup.style.display = "none";
  }, 600);
  mainPopup.style.cssText =
    "animation:slide-out .5s ease; animation-fill-mode: forwards;";
});

setTimeout(showPopup, 3000);

//get 5 cat facts from api https://cat-fact.herokuapp.com
const get5Facts = () => {
  const url =
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const facts = data;
      const factsContainer = document.querySelector(".facts-container");
      factsContainer.innerHTML = "";
      facts.forEach((fact) => {
        const factDiv = document.createElement("ul");
        factDiv.classList.add("fact");
        factDiv.classList.add("list-group-item");
        factDiv.innerHTML = `<li>${fact.text}</li>`;
        factsContainer.appendChild(factDiv);
      });
    });
};

getFactsButton.addEventListener("click", get5Facts);

const levels = document.getElementById("selectLevels");
const digimons = document.getElementById("digimons");
const url = "https://digimon-api.vercel.app/api/digimon";

document.addEventListener("DOMContentLoaded", () => {
  // console.log("eventLoaded");
  let hasData = localStorage.getItem("allData");
  hasData ? digimonCards(JSON.parse(hasData)) : fetchData();
  userDigimonLetters(JSON.parse(hasData));
});

const fetchData = async () => {
  try {
    console.log("Hi fetchData");
    const res = await fetch(url); // sending request
    const data = await res.json(); // converting data to json
    digimonCards(data);
    console.log(data);
    // digimonLevels(data);
    localStorage.setItem("allData", JSON.stringify(data)); //store data in localstorage
  } catch (error) {
    console.log(error);
  }
};

// populate select tag with options (digimon levels) via manipulating DOM
let allData = JSON.parse(localStorage.getItem("allData"));
if (allData) {
  const allLevels = allData.map((item) => item.level);
  // unique levels
  const textLevels = [...new Set(allLevels)];
  // console.log(textLevels);
  textLevels.forEach((item) => {
    const newOption = document.createElement("option");
    const optionText = document.createTextNode(item);
    // set option text
    newOption.appendChild(optionText);
    const valueOption = item.replace(/\s/g, "").toLowerCase();
    newOption.setAttribute("value", valueOption);
    selectLevels.appendChild(newOption);
  });
}

const digimonCards = (data) => {
  let cards = "";

  data.forEach((item) => {
    // console.log("localeString");
    cards += `
      <article class="card" href="#">
        <img src="${item.img}" alt="digimon image" class="digimon-img" />
        <div class="footer-card" >
          <h4>${item.name}</h4> 
          <p><b>Nivel: </b> <span>${item.level}</span></p>
        </div>
      </article>
    `;
  });
  digimons.innerHTML = cards;
};

const digimons = document.getElementById("digimons");
const url = "https://digimon-api.vercel.app/api/digimon";

document.addEventListener("DOMContentLoaded", () => {
  console.log("eventLoaded");

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
    localStorage.setItem("allData", JSON.stringify(data)); //store data in localstorage
  } catch (error) {
    console.log(error);
  }
};

const digimonCards = (data) => {
  let cards = "";

  data.forEach((item) => {
    // let population = toLocaleString(item.population);
    console.log("localeString");
    // let population = new Intl.NumberFormat("de-DE").format(item.population);
    // <a href="details.html?name=${item.translations.spa.common}"></a>
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

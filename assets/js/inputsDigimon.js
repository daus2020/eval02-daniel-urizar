const digimon = document.getElementById("digimon");
const inputDigimon = document.getElementById("input-digimon");
let levels = document.getElementById("levels");

const userDigimonLetters = (data) => {
  digimon.addEventListener("keyup", (e) => {
    e.preventDefault();
    levels.value = "all";
    // levels.style.color = "#958c8c";

    // lettersEntered
    const lettersEntered = inputDigimon.value.toLowerCase();

    const filterLetters = data.filter((el) => {
      const loweredLetters = el.name.toLowerCase();
      console.log(loweredLetters);

      if (loweredLetters.indexOf(lettersEntered) !== -1) {
        return el;
      }
    });
    digimonCards(filterLetters);
  });
};

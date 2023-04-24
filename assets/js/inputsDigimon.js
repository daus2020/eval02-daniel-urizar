const digimon = document.getElementById("digimon");
const inputDigimon = document.getElementById("input-digimon");

const userDigimonLetters = (data) => {
  digimon.addEventListener("keyup", (e) => {
    e.preventDefault();
    levels.value = "all"; // levels = document.getElementById("selectLevels")

    // Letters entered by user
    const lettersEntered = inputDigimon.value.toLowerCase();

    const filterLetters = data.filter((el) => {
      const loweredLetters = el.name.toLowerCase();
      // console.log(loweredLetters);

      if (loweredLetters.indexOf(lettersEntered) !== -1) {
        return el;
      }
    });
    digimonCards(filterLetters);
  });
};

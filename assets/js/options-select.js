const userLevel = () => {
  // let index = document.getElementById("selectLevels").selectedIndex;
  // let selected = document.getElementById("selectLevels");
  let selectedLevel = document.getElementById("selectLevels").value;

  document.getElementById("input-digimon").value = "";

  // call data from localStorage (recorded when fetch api once)
  let allData = JSON.parse(localStorage.getItem("allData"));
  // console.log(allData);

  const filterLevel = allData.filter((item) => {
    if (selectedLevel === "all") {
      return allData;
    }
    if (item.level.replace(/\s/g, "").toLowerCase() === selectedLevel) {
      return item;
    }
  });

  digimonCards(filterLevel);
};

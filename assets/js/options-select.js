const userLevel = () => {
  let index = document.getElementById("levels").selectedIndex;
  // let regionColor = regionColors[index];
  let selected = document.getElementById("levels");
  // selected.style.color = levlColor;
  let selectedLevel = document.getElementById("levels").value;

  document.getElementById("input-digimon").value = "";
  console.log(selectedLevel);

  // call data from localStorage (recorded when fetch api once)
  let allData = JSON.parse(localStorage.getItem("allData"));
  console.log(allData);
};

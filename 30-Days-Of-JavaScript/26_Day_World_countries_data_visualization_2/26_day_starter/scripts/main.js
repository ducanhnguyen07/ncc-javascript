const displayCountries = (countryList) => {
  const countriesList = document.querySelector(".countries-list");
  if (countriesList) {
    countriesList.style.textAlign = "center";

    for (let i = 0; i < countryList.length; i++) {
      let div = document.createElement("div");
      div.textContent = countryList[i];
      div.style.padding = "5px";
      div.style.margin = "20px";
      div.style.border = "0.5px solid #ccc";
      div.style.borderRadius = "5px";
      div.style.textAlign = "center";
      div.style.fontWeight = "500";
      div.style.display = "inline-block";
      div.style.width = "100px";
      div.style.height = "130px";
      div.style.alignItems = "center";
      div.style.verticalAlign = "top";
      div.style.boxSizing = "border-box";
      div.style.backgroundImage = "url('./images/map_image.jpg')";
      div.style.backgroundSize = "cover";
      div.style.backgroundPosition = "center";
      countriesList.appendChild(div);

      if ((i + 1) % 6 == 0) {
        let br = document.createElement("br");
        countriesList.appendChild(br);
      }
    }
  }
};

const headerSearch = document.querySelector(".header-search");
if (headerSearch) {
  headerSearch.style.width = "100%";
  headerSearch.style.height = "400px";
  headerSearch.style.textAlign = "center";
  headerSearch.style.backgroundImage = "url('./images/globe-2.jpg')";
  headerSearch.style.backgroundPosition = "center";
  headerSearch.style.backgroundSize = "100%";
  headerSearch.style.color = "#fff";
  headerSearch.style.padding = "70px";
}

const totalCountriesLbl = document.querySelector(".total-countries");
if (totalCountriesLbl) {
  totalCountriesLbl.innerHTML = `Total Number of Countries: ${countries.length}`;
}

let optSearch = null;
let sortAZ = true;

const startWord = document.querySelector(".start-word");
if (startWord) {
  startWord.addEventListener("click", () => {
    optSearch = true;
    startWord.style.backgroundColor = "#581CB8";
    anyWord.style.backgroundColor = "#0069D9";
  });
}

const anyWord = document.querySelector(".any-word");
if (anyWord) {
  anyWord.addEventListener("click", () => {
    optSearch = false;
    anyWord.style.backgroundColor = "#581CB8";
    startWord.style.backgroundColor = "#0069D9";
  });
}

const inputSearch = document.querySelector(".input-search");
if (inputSearch) {
  inputSearch.style.width = "70%";
  inputSearch.style.height = "40px";
  inputSearch.style.fontSize = "20px";
  inputSearch.style.marginTop = "20px";
  inputSearch.style.marginBottom = "20px";
  inputSearch.style.padding = "10px";
  inputSearch.style.border = "1px solid #ccc";
  inputSearch.style.borderRadius = "25px";

  displayCountries(countries);

  const totalSearchLbl = document.querySelector(".total-search");

  inputSearch.addEventListener("keyup", (e) => {
    const countriesList = document.querySelector(".countries-list");
    if (countriesList) {
      countriesList.innerHTML = "";
    }
    let searchValue = e.target.value;

    const regex = new RegExp(searchValue, "gi");
    if (optSearch === true) {
      const country = countries.filter(
        (country) =>
          country.toLowerCase().slice(0, searchValue.length) ===
          searchValue.toLowerCase()
      );

      totalSearchLbl.innerHTML = `Country start with ${searchValue} are ${country.length}`;
      displayCountries(country);
    } else {
      const country = countries.filter((country) => country.match(regex));
      totalSearchLbl.innerHTML = `Country containing ${searchValue} are ${country.length}`;
      displayCountries(country);
    } 
  });
}

// displayCountries(countries);

const sortAZBtn = document.querySelector(".sort-az");
if (sortAZBtn) {
  if(sortAZ) {
    sortAZBtn.addEventListener("click", () => {
      sortAZ === true ? sortAZ = false : sortAZ = true;
      if(sortAZ) {
        countries.sort();
        const countriesList = document.querySelector(".countries-list");
        if (countriesList) {
          countriesList.innerHTML = "";
        }    
        displayCountries(countries);
      } else {
        countries.sort().reverse();
        const countriesList = document.querySelector(".countries-list");
        if (countriesList) {
          countriesList.innerHTML = "";
        }
        displayCountries(countries);
      }
    });
  }
}
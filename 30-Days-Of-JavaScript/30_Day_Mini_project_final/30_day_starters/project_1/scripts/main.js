const sumPopulation = countries.reduce(
  (acc, country) => acc + country.population,
  0
);

const displayCountries = (countryList) => {
  const countriesList = document.querySelector(".countries-wrapper");
  if (countriesList) {
    countryList.forEach((country) => {
      const divC = document.createElement("div");

      const lang = country.languages.join(", ");

      divC.innerHTML = `
        <img src=${country.flag} alt="albania" />
        <p class="country-name">${country.name}</p>
        <p class="country-capital">Capital: ${country.capital}</p>
        <p class="country-languages">Languages: ${lang}</p>
        <p class="country-population">Population: ${country.population}</p>
      `;
      divC.classList.add("country-container");

      countriesList.appendChild(divC);
    });
  }
};

const clearCountries = () => {
  const countriesList = document.querySelector(".countries-wrapper");
  if (countriesList) {
    countriesList.innerHTML = "";
  }
};

const populationBut = document.querySelector(".population");
const languagesBut = document.querySelector(".languages");

const graphs = document.querySelector(".graphs");

const preProcessData = (dataCountry, opt) => {
  let data = [];

  if (opt === "population") {
    const sortedCountries = dataCountry
      .sort((a, b) => b.population - a.population)
      .map((item) => {
        return {
          country: item.name,
          population: item.population,
        };
      });

    data = sortedCountries.slice(0, 10);

    data.push({
      country: "World",
      population: sumPopulation,
    });

    data.sort((a, b) => b.population - a.population);
  } else {
    const languages = dataCountry.map((item) => item.languages).flat();
    let languagesArray = [];
    languages.forEach((language) => {
      const index = languagesArray.findIndex(
        (item) => item.country === language
      );

      if (index === -1) {
        languagesArray.push({ country: language, languages: 1 });
      } else {
        languagesArray[index].languages++;
      }
    });

    languagesArray.sort((a, b) => b.languages - a.languages);
    data = languagesArray.slice(0, 10);
  }

  return data;
};

const renderChart = (dataCountry, optC) => {
  const canvasElement = document.querySelector("#stat");
  if (canvasElement) {
    canvasElement.remove();
  }

  const data = preProcessData(dataCountry, optC);

  const canvas = document.createElement("canvas");
  canvas.id = "stat"; // Repas lace with your canv
  canvas.className = "graphs";
  const ctx = canvas.getContext("2d");

  const chartData = {
    labels: data.map((item) => item.country), // Language labels
    datasets: [
      {
        label: "Popularity",
        data: data.map((item) => item[optC]), // Popularity values
        backgroundColor: "#F2A93B", // Generate random colors for each bar
        borderRadius: 2,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Place labels on the y-axis
    stacked: true, // Stack the bars on top of each other
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis from 0
      },
    },
  };

  const chart = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: options,
  });

  graphs.appendChild(canvas);
};

const removeChart = () => {
  const canvasElement = document.querySelector("#stat");
  if (canvasElement) {
    canvasElement.remove();
  }
};

displayCountries(countries);

let countryArr = countries.map((country) => country);

let checkName = true;
let checkCapital = true;
let checkPopulation = true;

const iconName = document.querySelector(".icon-name");
const iconCapital = document.querySelector(".icon-capital");
const iconPopulation = document.querySelector(".icon-population");

const displayOpt = document.querySelector(".get-started");

const sortByName = (dataCountry) => {
  clearCountries();

  if (!checkName) {
    iconName.classList.remove("fa-up-long");
    iconName.classList.add("fa-down-long");
  } else {
    iconName.classList.add("fa-up-long");
    iconName.classList.remove("fa-down-long");
  }

  let sortedCountries = [];
  if (checkName) {
    sortedCountries = dataCountry.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sortedCountries = dataCountry.sort((a, b) => b.name.localeCompare(a.name));
  }
  checkName = !checkName;

  displayCountries(sortedCountries);
};

const sortByCapital = (dataCountry) => {
  clearCountries();

  if (!checkCapital) {
    iconCapital.classList.remove("fa-up-long");
    iconCapital.classList.add("fa-down-long");
  } else {
    iconCapital.classList.add("fa-up-long");
    iconCapital.classList.remove("fa-down-long");
  }

  let sortedCountries = dataCountry.filter((country) => {
    if (country.capital) {
      return country;
    }
  });

  if (checkCapital) {
    sortedCountries.sort((a, b) => a.capital.localeCompare(b.capital));
  } else {
    sortedCountries.sort((a, b) => b.capital.localeCompare(a.capital));
  }
  checkCapital = !checkCapital;

  displayCountries(sortedCountries);
};

const sortByPopulation = (dataCountry) => {
  clearCountries();

  if (!checkPopulation) {
    iconPopulation.classList.remove("fa-up-long");
    iconPopulation.classList.add("fa-down-long");
  } else {
    iconPopulation.classList.add("fa-up-long");
    iconPopulation.classList.remove("fa-down-long");
  }

  let sortedCountries = dataCountry.sort((a, b) => a.population - b.population);
  if (!checkPopulation) {
    sortedCountries = dataCountry.sort((a, b) => b.population - a.population);
  } else {
    sortedCountries = dataCountry.sort((a, b) => a.population - b.population);
  }
  checkPopulation = !checkPopulation;

  displayCountries(sortedCountries);
};

const searchInput = document.querySelector(".input-container input");
if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) => {
      if (country.languages) {
        const lang = country.languages.join(", ");
        if (lang.toLowerCase().includes(searchValue)) {
          return country;
        }
      }
      if (country.capital) {
        if (country.capital.toLowerCase().includes(searchValue)) {
          return country;
        }
      }
      if (country.name.toLowerCase().includes(searchValue)) {
        return country;
      }
    });

    countryArr = filteredCountries;

    clearCountries();
    displayCountries(filteredCountries);
  });
}

const sortNameBtn = document.querySelector(".sort-by-name");
if (sortNameBtn) {
  sortNameBtn.addEventListener("click", () => sortByName(countryArr));
}

const sortCapitalBtn = document.querySelector(".sort-by-capital");
if (sortCapitalBtn) {
  sortCapitalBtn.addEventListener("click", () => sortByCapital(countryArr));
}

const sortPopulationBtn = document.querySelector(".sort-by-population");
if (sortPopulationBtn) {
  sortPopulationBtn.addEventListener("click", () => sortByPopulation(countryArr));
}

const pTag = document.createElement("p");

document.addEventListener("DOMContentLoaded", () => {
  pTag.innerHTML = `World`;
  displayOpt.appendChild(pTag);
  renderChart(countries, "population");
});

languagesBut.addEventListener("click", () => {
  pTag.innerHTML = `Languages of ${countryArr.length} countries`;
  displayOpt.appendChild(pTag);
  removeChart();
  renderChart(countryArr, "languages");
});

populationBut.addEventListener("click", () => {
  pTag.innerHTML = `Population of ${countryArr.length} countries`;
  displayOpt.appendChild(pTag);
  removeChart();
  renderChart(countryArr, "population");
});

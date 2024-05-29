const sumPopulation = countries.reduce((acc, country) => acc + country.population, 0);

const worldTitle = document.querySelector("#world-title");
worldTitle.style.textAlign = "center";
worldTitle.style.color = "#F2A93B";

const countryHead = document.querySelector("#countries");
countryHead.style.textAlign = "center";

const subTitle = document.querySelector(".subtitle");
subTitle.style.textAlign = "center";
subTitle.innerHTML = `Currently, we have ${countries.length} countries`;

const wrapper = document.querySelector(".wrapper");
wrapper.style.textAlign = "center";

const populationBut = document.querySelector(".population");
const languagesBut = document.querySelector(".languages");

const graphs = document.querySelector(".graphs");

const feedbackTxt = document.querySelector(".feedback");

populationBut.addEventListener("click", () => {
  const canvasElement = document.querySelector("#stat");
  if (canvasElement) {
    canvasElement.remove();
  }

  feedbackTxt.innerHTML = "10 Most populated countries in the world";

  const sortedCountries = countries.sort((a, b) => b.population - a.population).map((item) => {
    return {
      country: item.name,
      population: item.population
    };
  });
  
  const data = sortedCountries.slice(0, 10);

  data.push({
    country: "World",
    population: sumPopulation
  });

  data.sort((a, b) => b.population - a.population);

  const canvas = document.createElement("canvas");
  canvas.id = "stat"; // Repas lace with your canv
  canvas.className = "graphs";
  const ctx = canvas.getContext("2d");

  const chartData = {
    labels: data.map((item) => item.country), // Language labels
    datasets: [
      {
        label: "Population",
        data: data.map((item) => item.population), // Popularity values
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
  })

  graphs.appendChild(canvas);  
});

languagesBut.addEventListener("click", () => {
  const canvasElement = document.querySelector("#stat");
  if (canvasElement) {
    canvasElement.remove();
  }
  
  feedbackTxt.innerHTML = "10 Most Spoken languages in the world";

  const languages = countries.map((item) => item.languages).flat();
  let languagesArray = [];

  languages.forEach((language) => {
    const index = languagesArray.findIndex((item) => item.language === language);
    if (index === -1) {
      languagesArray.push({ language: language, count: 1 });
    } else {
      languagesArray[index].count++;
    }
  });

  languagesArray.sort((a, b) => b.count - a.count);

  const data = languagesArray.slice(0, 10);

  const canvas = document.createElement("canvas");
  canvas.id = "stat"; // Repas lace with your canv
  canvas.className = "graphs";
  const ctx = canvas.getContext("2d");

  const chartData = {
    labels: data.map((item) => item.language), // Language labels
    datasets: [
      {
        label: "Popularity",
        data: data.map((item) => item.count), // Popularity values
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
});

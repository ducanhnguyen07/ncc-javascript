// LEVEL 1
const url = 'https://restcountries.com/v3.1/all';
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     countriesArr = data;
//     let countryNames = countriesArr.map(i => (i.name));

//     console.log(countryNames)
//   })
//   .catch(error => console.log(error))

// // LEVEL 2
// const catsAPI = 'https://api.thecatapi.com/v1/breeds';
// fetch(catsAPI)
//   .then(response => response.json())
//   .then(data => {
//     const catNames = data.map(i => i.name);
//     console.log(catNames);
//   })
//   .catch(e => console.log(e))

//   fetch(catsAPI)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => console.log(e))

// // LEVEL 3
// // 1

// fetch(catsAPI)
//   .then(response => response.json())
//   .then(data => {
//     const catWeights = data.map(i => i.weight.metric);
//     const catWeightsArr = catWeights.map(i => i.split(' - '));
//     const catWeightsAvg = catWeightsArr.map(i => (parseInt(i[0]) + parseInt(i[1])) / 2);
//     console.log(catWeightsAvg);
//   })
//   .catch(e => console.log(e))

// 2
// Read the countries api and find out the 10 largest countries
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const countries = data;
//     const countriesByArea = countries.sort((a, b) => b.area - a.area);
//     const largestCountries = countriesByArea.slice(0, 10);
//     console.log(largestCountries);
//   })
//   .catch(e => console.log(e))

// 3
fetch(url)
  .then(response => response.json())
  .then(data => {
    const countries = data;
    let arr = data.map(i => (i.languages)).flat();

    let set = new Set();
    arr.forEach(i => {
      if(typeof i !== "undefined") {
        for (const val of Object.values(i)) {
          set.add(val);
        }
      }      
    });
    
    console.log(set.size)
  })
  .catch(e => console.log(e))



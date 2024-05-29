const body = document.querySelector("body");

body.style.textAlign = "center";

let h2 = document.querySelector("h2");
h2.textContent = h2.textContent.toUpperCase();
h2.style.letterSpacing = "8px";
h2.style.textAlign = "center";
h2.style.fontWeight = "600";
h2.style.margin = "0px";
h2.style.padding = "2px";
let totalCountries = document.querySelector("#total-countries");
totalCountries.textContent = `Total Number of countries: ${countries.length}`;
totalCountries.style.textAlign = "center";
totalCountries.style.fontWeight = "550";
totalCountries.style.margin = "0px";
totalCountries.style.padding = "2px";

let h3Headers = document.querySelectorAll("h3");

h3Headers.forEach((x) => {
  x.style.textAlign = "center";
  x.style.padding = "2px";
  x.style.margin = "0px";
});

h3Headers[0].style.fontSize = "13px";
h3Headers[0].style.textDecoration = "underline";
h3Headers[0].style.fontWeight = "380";

h3Headers[1].style.fontSize = "11px";
h3Headers[1].style.fontWeight = "360";

const countriesWrapper = document.querySelector(".countries-wrapper");
if(countriesWrapper) {
  countriesWrapper.style.textAlign = "center";
  for(let i=0; i<countries.length; i++) {
    let div = document.createElement("div");
    div.textContent = countries[i];
    div.style.padding = "5px";
    div.style.margin = "5px";
    div.style.border = "0.2px solid #ccc";
    div.style.borderRadius = "2px";
    div.style.textAlign = "center";
    div.style.fontWeight = "500";
    div.style.backgroundColor = "#ffffff";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.style.height = "150px";
    div.style.alignItems = 'center';
    div.style.verticalAlign = "top";
    div.style.boxSizing = "border-box";
    countriesWrapper.appendChild(div);

    if((i+1) % 6 == 0) {
      let br = document.createElement("br");
      countriesWrapper.appendChild(br);
    }
  }
}


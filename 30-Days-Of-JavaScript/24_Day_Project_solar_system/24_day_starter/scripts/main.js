const buttonCal = document.querySelector(".cal-weight");
if (buttonCal) {
  buttonCal.addEventListener("click", (event) => {
    const massOfObject = document.querySelector("input").value;
    const planetName = document.querySelector("select").value;
    const wrapperDiv = document.querySelector(".wrapper");

    wrapperDiv.innerHTML = "";

    if (massOfObject === "")
      return (wrapperDiv.innerHTML ='<p class="result glass-bg g-place-center">Please enter weight in kilograms</p>');
    if (planetName === "")
      return (wrapperDiv.innerHTML ='<p class="result glass-bg g-place-center">Please choose a Planet to proceed</p>');

    const planet = planetData[planetName];

    const weight = parseFloat(massOfObject * planet.surfaceGravity).toFixed(2);

    wrapperDiv.innerHTML = `
                      <p class="result glass-bg g-place-center">The weight of the object on <b>${planetName}</b>
                          <span class="rounded g-place-center">${weight} N</span>
                      </p>
                      <img src="./images/${planetName}.png" alt="${planetName}">
                      `;
  });
}
const display = document.querySelector(".display-txt");
if (display) {
  display.style.fontSize = "50px";
  display.style.textAlign = "center";
  display.style.margin = "100px";
  display.style.fontWeight = "300";
  display.style.border = "0.2px solid #333";
  display.style.padding = "20px";
  display.style.width = "80%";
  display.style.boxShadow = "0 0 10px #333";
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  const display = document.querySelectorAll(".display-txt");
  if (display) {
    display.forEach((element) => {
      element.remove();
    });

    const displayKey = document.createElement("div");
    displayKey.className = "display-txt";

    displayKey.textContent = `You pressed the ${key}.`;

    displayKey.style.fontSize = "50px";
    displayKey.style.textAlign = "center";
    displayKey.style.margin = "100px";
    displayKey.style.fontWeight = "300";
    displayKey.style.border = "0.2px solid #333";
    displayKey.style.padding = "20px";
    displayKey.style.width = "80%";
    displayKey.style.boxShadow = "0 0 10px #333";

    const asciiValue = document.createElement("div");
    asciiValue.textContent = `${event.keyCode}`;
    asciiValue.className = "display-txt";
    asciiValue.style.fontSize = "50px";
    asciiValue.style.textAlign = "center";
    asciiValue.style.margin = "100px";
    asciiValue.style.fontWeight = "300";
    asciiValue.style.border = "0.2px solid #333";
    asciiValue.style.padding = "20px";
    asciiValue.style.width = "80%";
    asciiValue.style.boxShadow = "0 0 10px #333";

    document.body.appendChild(displayKey);

    document.body.appendChild(asciiValue);
  }
});

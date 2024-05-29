const container = document.querySelector(".container");

fetch("./data/user.json")
  .then((response) => response.json())
  .then((data) => {
    let usersArr = data.map((user) => user);
    usersArr.sort((a, b) => b.score - a.score);
    const container = document.querySelector(".container");
    usersArr.forEach((user) => {
      const divU = document.createElement("div");
      divU.innerHTML = `
        <div class="row">
          <div class="info">
            <div class="name">${user.firstName} ${user.lastName}</div>
            <div class="date">${user.creatAt}</div>
          </div>
          <div class="country">${user.country}</div>
          <div class="score">${user.score}</div>
          <div class="actions">
            <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
            <button class="inc-btn">+5</button>
            <button class="dec-btn">-5</button>
          </div>
        </div>
      `;

      container.appendChild(divU);
    });
  })
  .catch((e) => console.log(e));

const buttonSubmit = document.querySelector(".submit-user");
if (buttonSubmit) {
  container.innerHTML = "";

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const alert = document.querySelector(".alert-container");
    if (alert) {
      alert.remove();
    }
    const firstName = document.querySelector(".first-name").value;
    const lastName = document.querySelector(".last-name").value;
    const country = document.querySelector(".country").value;
    const score = document.querySelector(".score").value;
    const creatAt = new Date().toLocaleString();

    if (firstName === "" || lastName === "" || country === "" || score === "") {
      const alert = document.querySelector(".alert-container");
      if (alert) {
        alert.remove();
      }
      const divA = document.createElement("div");
      divA.classList.add("alert-container");
      divA.innerHTML = `
        <div class="alert">
          <span>All fields are require!</span>
        </div>
      `;
      container.insertAdjacentElement("afterbegin", divA);
      return;
    }

    const user = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      score: score,
      creatAt: creatAt,
    };

    const divU = document.createElement("div");
    divU.innerHTML = `
      <div class="row">
        <div class="info">
          <div class="name">${user.firstName} ${user.lastName}</div>
          <div class="date">${user.creatAt}</div>
        </div>
        <div class="country">${user.country}</div>
        <div class="score">${user.score}</div>
        <div class="actions">
          <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
          <button class="inc-btn">+5</button>
          <button class="dec-btn">-5</button>
        </div>
      </div>
    `;

    container.appendChild(divU);
  });
}

container.addEventListener("click", (e) => {
  const alert = document.querySelector(".alert-container");
  if (alert) {
    alert.remove();
  }
  if (
    e.target.classList.contains("delete-btn") ||
    e.target.parentElement.classList.contains("delete-btn")
  ) {
    const row = e.target.closest(".row");
    row.remove();
  }
});

container.addEventListener("click", (e) => {
  const alert = document.querySelector(".alert-container");
  if (alert) {
    alert.remove();
  }
  if (
    e.target.classList.contains("inc-btn") ||
    e.target.parentElement.classList.contains("inc-btn")
  ) {
    const row = e.target.closest(".row");
    const score = row.querySelector(".score");
    score.textContent = parseInt(score.textContent) + 5;
  }

  const scores = Array.from(document.querySelectorAll(".score"));
  scores.sort((a, b) => b.textContent - a.textContent);
  scores.forEach((score) => {
    const row = score.closest(".row");
    container.appendChild(row);
  });
});

container.addEventListener("click", (e) => {
  const alert = document.querySelector(".alert-container");
  if (alert) {
    alert.remove();
  }
  if (
    e.target.classList.contains("dec-btn") ||
    e.target.parentElement.classList.contains("dec-btn")
  ) {
    const row = e.target.closest(".row");
    const score = row.querySelector(".score");
    score.textContent = parseInt(score.textContent) - 5;
  }

  const scores = Array.from(document.querySelectorAll(".score"));
  scores.sort((a, b) => b.textContent - a.textContent);
  scores.forEach((score) => {
    const row = score.closest(".row");
    container.appendChild(row);
  });
});

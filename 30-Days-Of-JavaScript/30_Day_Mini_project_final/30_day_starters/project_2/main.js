const createDiv = (msg, cls) => {
  const divA = document.createElement("div");
  divA.className = `${cls}`;
  divA.textContent = `${msg}`;
  divA.style.color = "#FFA715";
  divA.style.fontWeight = "bold";

  return divA;
};

const removeDiv = (cls) => {
  const divA = document.querySelector(`.${cls}`);
  if (divA) {
    divA.remove();
  }
}

const form = document.querySelector("form");

const btnSubmit = document.querySelector("#submit");
if (btnSubmit) {
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    // check if the form is valid
    const inpFirstName = document.querySelector('input[id="firstname"]');
    // alphanumeric and 3-16 char
    const firstName = inpFirstName.value;
    let regExp = /^[a-zA-Z0-9]{3,16}$/;
    if (!regExp.test(firstName)) {
      removeDiv('valFirst');

      const divA = createDiv("First name must be alphanumeric and 3-16 characters long", "valFirst");
      document.querySelector(".firstname").insertBefore(divA, inpFirstName);

      return;
    } else {
      removeDiv('valFirst');
    }

    const inpLastName = document.querySelector('input[id="lastname"]');
    const lastName = inpLastName.value;
    if (!regExp.test(lastName)) {
      removeDiv(`valLast`);

      const divA = createDiv("Last name must be alphanumeric and 3-16 characters long", "valLast");
      document.querySelector(".lastname").insertBefore(divA, inpLastName);

      return;
    } else {
      removeDiv('valLast');
    }

    const inpEmail = document.querySelector('input[id="email"]');
    const email = inpEmail.value;
    regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    if (!regExp.test(email)) {
      removeDiv('valEmail');

      const divA = createDiv("Email must be valid", "valEmail");
      document.querySelector(".email").insertBefore(divA, inpEmail);

      return;
    } else {
      removeDiv('valEmail');
    }

    const inpPassword = document.querySelector('input[id="password"]');
    // check numeric and 6-12 char
    const password = inpPassword.value;
    regExp = /^[0-9]{6,12}$/;
    if (!regExp.test(password)) {
      removeDiv('valPassword');

      const divA = createDiv("Password must be numeric and 6-12 characters long", "valPassword");
      document.querySelector(".password").insertBefore(divA, inpPassword);

      return;
    } else {
      removeDiv('valPassword');
    }

    const inpTelephone = document.querySelector('input[id="telephone"]');
    // 11 digits and starts with 0
    const telephone = inpTelephone.value;
    regExp = /^0[0-9]{10}$/;
    if (!regExp.test(telephone)) {
      removeDiv('valTelephone');

      const divA = createDiv("Telephone must be 11 digits and start with 0", "valTelephone");
      document.querySelector(".telephone").insertBefore(divA, inpTelephone);

      return;
    } else {
      removeDiv('valTelephone');
    }

    const inpBio = document.querySelector('textarea[id="bio"]');
    // check lower char, underscore, hyphen, and 8-50 char
    const bio = inpBio.value;
    regExp = /^[a-z_-]{8,50}$/;
    if (!regExp.test(bio)) {
      removeDiv('valBio');

      const divA = createDiv("Bio must be lowercase, underscore, hyphen, and 8-50 characters long", "valBio");
      document.querySelector(".bio").insertBefore(divA, inpBio);

      return;
    } else {
      removeDiv('valBio');
    }

    const obj = {
      firstName,
      lastName,
      email,
      password,
      telephone,
      bio
    };

    console.log(obj);
    form.reset();
  });
}





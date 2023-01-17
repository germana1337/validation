let formRegistration = document.getElementById("form-registration");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  
  // USERNAME
  let usernameField = document.getElementById("fname").value;
  let nameRegex = /^[a-zA-Z ]+$/;

  if (!nameRegex.test(usernameField)) {
    errors.username = "არასწორი სახელის ფორმატი";
  }

  if (usernameField.length < 3) {
    errors.username = "სახელი უნდა იყოს 3 სიმბოლოზე მეტი";
  }
  if (usernameField == "") {
    errors.username = "სახელის ველი არ უნდა იყოს ცარიელი";
  }


  //LASTNAME
  let lastnameField = document.getElementById("lname").value;

  if (lastnameField.length < 3) {
    errors.lastname = "გვარი უნდა იყოს 3 სიმბოლოზე მეტი";
    if (usernameField == "") {
      errors.lastname = "გთხოვთ ჩაწეროთ თქვენი გვარი";
    }
  }


  // PASSWORD ADDED REGEX
  let password1 = document.getElementById("passw1").value;
  let password2 = document.getElementById("passw2").value;
  let passwordField = document.getElementById("passw1");
  let passwordError = document.getElementById("error_mypassword");

  passwordField.addEventListener("focus", function () {
    passwordField.style.outline = "none";
  });

  passwordField.addEventListener("keyup", function () {
    let passwordValue = passwordField.value;
    let passwordRegex =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (passwordValue === "") {
      passwordError.innerText = "არასწორი პაროლი";
      passwordError.style.color = "red";
      passwordField.style.border = "2px solid red";
    } else if (!passwordValue.match(passwordRegex)) {
      passwordError.innerText =
        " პაროლი უნდა შეიცავდეს არანაკლებ 8 სიმბოლოს, ერთ დიდ სიმბოლოს, ერთ პატარა სიმბოლოს და ერთ ციფრს";

      passwordError.style.color = "red";
      passwordField.style.border = "2px solid red";
    } else {
      passwordError.innerText = "";
      passwordField.style.border = "2px solid green";
    }
  });

  if (password1 == "") {
    errors.mypassword = "გთხოვთ ჩაწეროთ პაროლი";
  }
  if (password1 != password2) {
    errors.mypassword2 = "პაროლები არ ემთხვევა ერთმანეთს";
  }

  //checkbox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "გთხოვთ დაეთანხმოთ წესებს და პირობებს";
  }


  // RADIO LOGIC 
  let age = false;
  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "გთხოვთ აირჩიეთ სქესი";
  }

  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = " ";
  });

  for (let item in errors) {
    let spanError = document.getElementById("error_" + item);

    if (errors[item]) {
      spanError.innerText = errors[item];
      spanError.style.marginTop = "10px";
      spanError.style.display = "block";
      spanError.style.color = "red";
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }



  //E-MAIL REGEX VALIADTION 

  let emailField = document.getElementById("myemail");
  let emailError = document.getElementById("error_myemail");

  emailField.addEventListener("focus", function () {
    emailField.style.outline = "none";
  });

  emailField.addEventListener("keyup", function () {
    let emailValue = emailField.value.toLowerCase();
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue === "") {
      emailError.innerText = "ელ-ფოსტის ველი ცარიელია";
      emailError.style.color = "red";
      emailField.style.border = "2px solid red";
    } else if (emailValue.match(emailRegex)) {
      emailError.innerText = "ელ-ფოსტა თავისუფალია!";
      emailError.style.color = "green";
      emailField.style.border = "2px solid green";
    } else {
      emailError.innerText = "Email is invalid";
      emailError.style.color = "red";
      emailField.style.border = "2px solid red";
    }
  });
});

// togglr Show/hide
let passwordInputs = document.querySelectorAll(".password-input");
let toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach(function (toggleIcon, i) {
  toggleIcon.addEventListener("click", function () {
    if (passwordInputs[i].type === "password") {
      passwordInputs[i].setAttribute("type", "text");
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordInputs[i].setAttribute("type", "password");
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  });
});

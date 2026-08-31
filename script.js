const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const confirmPasswordInput = document.getElementById("confirmpassword");
const confirmError = document.getElementById("confirmError");

const dateInput = document.getElementById("date");
const dateError = document.getElementById("dateError");

const genderInput = document.getElementById("gender");
const genderError = document.getElementById("genderError");

const phonePattern = /^\d+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let isvalid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Full name is required";
        isvalid = false;
    } else {
        nameError.textContent = "";
    }

    const emailValue = emailInput.value.trim();

if (emailValue === "") {
    emailError.textContent = "Email is required";
    isvalid = false;
} else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Enter a valid email address";
    isvalid = false;
} else {
    emailError.textContent = "";
}

    const phoneValue = phoneInput.value.trim();

if (phoneValue === "") {
    phoneError.textContent = "Phone number is required";
    isvalid = false;
} else if (!phonePattern.test(phoneValue)) {
    phoneError.textContent = "Phone number must contain only digits";
    isvalid = false;
} else {
    phoneError.textContent = "";
}

    const passwordValue = passwordInput.value.trim();

if (passwordValue === "") {
    passwordError.textContent = "Password is required";
    isvalid = false;
} else if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    isvalid = false;
} else {
    passwordError.textContent = "";
}

const confirmPasswordValue = confirmPasswordInput.value.trim();

if (confirmPasswordValue === "") {
    confirmError.textContent = "Please confirm your password";
    isvalid = false;
} else if (confirmPasswordValue !== passwordValue) {
    confirmError.textContent = "Passwords do not match";
    isvalid = false;
} else {
    confirmError.textContent = "";
}

if (dateInput.value.trim() === "") {
    dateError.textContent = "Date of birth is required";
    isvalid = false;
} else {
    dateError.textContent = "";
}

if (genderInput.value === "") {
    genderError.textContent = "Please select your gender";
    isvalid = false;
} else {
    genderError.textContent = "";
}
    if (isvalid === true) {
        alert("Account created successfully");
    }

});

    

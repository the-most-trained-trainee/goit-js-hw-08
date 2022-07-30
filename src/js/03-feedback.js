import throttle from "lodash.throttle";

const loginForm = document.querySelector(".feedback-form");
const loginFormEmail = document.querySelector(".feedback-form input");
const loginFormText = document.querySelector(".feedback-form textarea");

if (localStorage.getItem("feedback-form-state") !== null && localStorage.getItem("feedback-form-state") !== "") {
    loginFormText.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    loginFormEmail.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
}

function formDataReceipt() {
    const formData = new FormData(loginForm);
    let formOutPut = {};
    formData.forEach((value, name) => {
        formOutPut[name] = value;
    });
    return formOutPut;
}

function onSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.message.value === "") {
        alert("Please, fill all the fields");
    } else {
        console.log(formDataReceipt(event));
        event.currentTarget.reset();
        localStorage.setItem("feedback-form-state", "")
    }
}

loginForm.addEventListener("input", throttle(formInput => localStorage.setItem("feedback-form-state", JSON.stringify(formDataReceipt(formInput))), 500));

loginForm.addEventListener("submit", onSubmit);
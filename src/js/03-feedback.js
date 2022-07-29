import throttle from "lodash.throttle";

const loginForm = document.querySelector(".feedback-form");



loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);


    // if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
    //     alert("Please, fill all the fields");
    // } else {
    //     const formData = new FormData(event.currentTarget);
    //     let formOutPut = {};

    //     formData.forEach((value, name) => {
    //         formOutPut[name] = value;
    //     });
    //     event.currentTarget.reset();
    //     console.log(formOutPut);
    // }
}
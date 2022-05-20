import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

const key = "feedback-form-state";
let formData = {}

 
feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onInputForm, 500));

onSaveInfoForm()

function onSaveInfoForm() {
    const savedData = localStorage.getItem(key);
    if (savedData) {
        const {email, message} = JSON.parse(savedData);
        feedbackForm.email.value = email;
        feedbackForm.message.value = message;
        formData.email = email;
        formData.message = message;
    }
}


function onInputForm(evt) {
    formData.email = feedbackForm.elements.email.value;
    formData.message = feedbackForm.elements.message.value;
    localStorage.setItem(key,JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(key);

    console.log(formData)
}

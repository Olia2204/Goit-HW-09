import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

const storage_message = 'feedback-form-state';
let formData = {};

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(storage_message)));
  localStorage.removeItem(storage_message);
}

function onInput() {
  formData = {
    email: `${refs.form.elements.email.value}`,
    message: `${refs.form.elements.message.value}`,
  };
  localStorage.setItem(storage_message, JSON.stringify(formData));
}

function savedForm() {
  const savedFormData = JSON.parse(localStorage.getItem(storage_message));

  if (savedFormData !== null) {
    refs.form.elements.email.value = savedFormData.email;
    refs.form.elements.message.value = savedFormData.message;
  }
}

savedForm();

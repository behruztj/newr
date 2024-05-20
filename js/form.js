// Используйте объект для хранения элементов формы
const formElements = {
  selector: document.querySelector("#tel"),
  form: document.querySelector('.modal-form'),
  formInputs: document.querySelectorAll('.modal-form__input'),
  inputEmail: document.querySelector('.modal-input-email'),
  inputPhone: document.querySelector('.modal-input-phone'),
  inputName: document.querySelector('.modal-input-name'),
  closeButton: document.querySelector('.modal__btn-cross'),
  modal: document.querySelector('.modal')
};

// Инициализация Inputmask
const im = new Inputmask("+7(999)999-99-99");
im.mask(formElements.selector);

// Функции валидации
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

// Обработчик отправки формы
formElements.form.onsubmit = function () {
  let emailVal = formElements.inputEmail.value,
    phoneVal = formElements.inputPhone.value,
    nameVal = formElements.inputName.value,
    emptyInputs = Array.from(formElements.formInputs).filter(input => input.value === '');

  formElements.formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
      console.log('input not filled');
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validateEmail(emailVal)) {
    console.log('email not valid');
    formElements.inputEmail.classList.add('error');
    return false;
  } else {
    formElements.inputEmail.classList.remove('error');
  }

  if (validatePhone(phoneVal)) {
    console.log('phone not valid');
    formElements.inputPhone.classList.add('error');
    return false;
  } else {
    formElements.inputPhone.classList.remove('error');
  }
}

// Обработчики событий для модального окна
formElements.closeButton.addEventListener('click', closeModal);
window.addEventListener('click', function (event) {
  if (event.target == formElements.modal) {
    closeModal();
  }
});

// Функция для закрытия модального окна
function closeModal() {
  formElements.formInputs.forEach(function (input) {
    input.value = '';
    input.classList.remove('error');
  });
}

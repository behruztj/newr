const selector = document.querySelector("#tel");
const im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

let validation = new JustValidate("form")

validation.onSuccess(async function () {

  let data = {
    name: document.getElementById("name").value,
    tel: document.getElementById("tel").value,
    email: document.getElementById("email").value
  }

  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  let result = await response.text()

  alert(result)
})



let form = document.querySelector('.modal-form'),
  formInputs = document.querySelectorAll('.modal-form__input'),
  inputEmail = document.querySelector('.modal-input-email'),
  inputPhone = document.querySelector('.modal-input-phone'),
  inputName = document.querySelector('.modal-input-name');

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;

  return re.test(String(phone));
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    nameVal = inputName.value,
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
      console.log('input not filled');
    } else {
      input.classList.remove('error');
    }
  })

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validateEmail(emailVal)) {
    console.log('email not valid');
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }

  if (validatePhone(phoneVal)) {
    console.log('phone not valid');
    inputPhone.classList.add('error');
    return false;
  } else {
    inputPhone.classList.remove('error');
  }
}



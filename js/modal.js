// Получение элементов DOM
const openButton = document.querySelector('.button-block__button--first');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__btn-cross');
const modalSocialLink = document.querySelectorAll('.modal-social__link');
const productsButton = document.querySelectorAll('.info-wrapper__button');

// Контроллер прокрутки
const scrollController = {
  disableScroll() {
    document.body.style.overflow = 'hidden';
  },
  enableScroll() {
    document.body.style.overflow = '';
  },
};

// Функция для открытия модального окна
function openModal() {
  modal.classList.add('open');
  scrollController.disableScroll();
}

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.remove('open');
  scrollController.enableScroll();
}

// Обработчики событий
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

modalSocialLink.forEach(link => {
  link.addEventListener('click', closeModal);
});

productsButton.forEach(button => {
  button.addEventListener('click', openModal);
});

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
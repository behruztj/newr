// JavaScript
const CARDS_PER_CLICK = 2;
let cards = document.querySelectorAll('.cards__card');
let showMoreButton = document.querySelector('.wrapper__button-show-more');
let showLessButton = document.querySelector('#show-less');

let currentIndex = CARDS_PER_CLICK;

function hideCards(startIndex) {
  for (let i = startIndex; i < cards.length; i++) {
    cards[i].style.display = 'none';
  }
}

function showCards(startIndex, count) {
  for (let i = startIndex; i < startIndex + count && i < cards.length; i++) {
    cards[i].style.display = 'flex';
    cards[i].style.animation = 'fadeIn 0.5s';
  }
}

// Сначала скрываем все карточки, кроме первых двух
hideCards(currentIndex);

showMoreButton.addEventListener('click', function () {
  // Показываем по две карточки за раз
  showCards(currentIndex, CARDS_PER_CLICK);
  currentIndex += CARDS_PER_CLICK;

  // Если все карточки показаны, скрываем кнопку "Показать еще" и показываем кнопку "Скрыть"
  if (currentIndex >= cards.length) {
    showMoreButton.style.display = 'none';
    showLessButton.style.display = 'block';
  }
});

showLessButton.addEventListener('click', function () {
  // Скрываем все карточки, кроме первых двух
  hideCards(CARDS_PER_CLICK);
  // Сбрасываем индекс до начального значения
  currentIndex = CARDS_PER_CLICK;
  // Скрываем кнопку "Скрыть" и показываем кнопку "Показать еще"
  showLessButton.style.display = 'none';
  showMoreButton.style.display = 'block';
});

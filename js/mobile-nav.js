function mobileNav() {
	// Получаем элементы кнопки навигации, самого меню, иконки меню и кнопки закрытия
	const mobileNavButton = document.querySelector('.mobile-nav-btn');
	const mobileNavMenu = document.querySelector('.mobile-nav');
	const navIcon = document.querySelector('.nav-icon');
	const btnCross = document.querySelector('.mobile-nav__btn-cross');
	const mobileNavLinks = document.querySelectorAll('.mobile-nav__link, .mobile-nav__social-link');

	// Если элементы не найдены, выводим ошибку и прекращаем выполнение функции
	if (!mobileNavButton || !mobileNavMenu || !navIcon || !btnCross || !mobileNavLinks) {
		console.error('Не удалось найти необходимые элементы для мобильного меню.');
		return;
	}

	// Добавляем обработчик событий на кнопку навигации
	mobileNavButton.addEventListener('click', function () {
		// Переключаем классы для открытия и закрытия меню
		mobileNavMenu.classList.toggle('mobile-nav--open');
		navIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
		if (window.innerWidth <= 375) {
			btnCross.classList.add('active');
			mobileNavButton.classList.add('none');
		} else {
			btnCross.style.display = 'none';
		}
	});

	// Добавляем обработчик событий на кнопку закрытия
	btnCross.addEventListener('click', closeMobileNav);

	// Закрываем меню при клике вне его области
	document.addEventListener('click', function (event) {
		if (!mobileNavMenu.contains(event.target) && !mobileNavButton.contains(event.target)) {
			closeMobileNav();
		}
	});

	mobileNavLinks.forEach(link => {
		link.addEventListener('click', closeMobileNav);
	});

	function closeMobileNav() {
		mobileNavMenu.classList.remove('mobile-nav--open');
		navIcon.classList.remove('nav-icon--active');
		document.body.classList.remove('no-scroll');
		mobileNavButton.classList.remove('none');
		btnCross.classList.remove('active');
	}
}

mobileNav();



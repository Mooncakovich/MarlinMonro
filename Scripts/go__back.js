// Добавляем обработчик события scroll
window.addEventListener('scroll', handleScroll);

let lastScrollTop = 0; // Переменная для отслеживания последней позиции прокрутки
const targetBlock = document.getElementById('hidden__block');

function handleScroll() {
  const blockPosition = targetBlock.getBoundingClientRect().top;
  const currentScroll = window.scrollY || window.pageYOffset; // Текущая прокрутка страницы

  // Если блок попал в область видимости
  if (blockPosition <= window.innerHeight) {
    targetBlock.classList.add('fixed'); // Закрепляем блок
    targetBlock.classList.remove('go__back__button');

    // Если прокрутка вниз (пользователь скроллит вниз)
    if (currentScroll > lastScrollTop) {
      targetBlock.classList.remove('hidden'); // Показываем блок
    } else {
      targetBlock.classList.add('hidden'); // Скрываем блок при прокрутке вверх
    }
  } else {
    targetBlock.classList.remove('fixed'); // Убираем фиксированное позиционирование, если блок не виден
    targetBlock.classList.add('go__back__button');
    targetBlock.classList.remove('hidden'); // Убираем скрытие
  }

  // Обновляем последнюю позицию прокрутки
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

// Добавляем обработчик события scroll
window.addEventListener('scroll', handleScroll);
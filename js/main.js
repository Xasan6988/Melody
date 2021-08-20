let currentFloor = 2;
const counterUp = $('.counter-up');
const counterDown = $('.counter-down');
const floorPath = $('.home-image path');
const modal = $('.modal');
const modalCloseButton = $('.modal-close-button');
const flatPath = document.querySelectorAll('.flats path')
const flatLink = document.querySelectorAll('.flat-link');
const flatLinkNumber = document.querySelectorAll('.number');
const modalCounter = $('.modal-counter');
const counter = $('.counter');
const button = $('.button');

const toggleModal = () => {
  modal.toggleClass('is-open');
};

// Цикл по изображениям квартир
flatPath.forEach(path => {
  // добавляем слушатель
  path.addEventListener('mouseover', function() {
    // достаём номер квартиры
    const flatNumber = $(this).attr('data-number');
    // цикл по ссылкам на квартиры
    flatLinkNumber.forEach(item => {
      // очищаем все ссылки от класса
      item.parentNode.classList.remove('active-link');
      if (item.textContent === flatNumber) {
        // если номера совпадают - подсвечиваем ссылку
        item.parentNode.classList.add('active-link');
      }
    });
  });
  // слушатель для ухода мыши, что бы ссылки не оставались подсвеченными
  path.addEventListener('mouseout', () => {
    flatLinkNumber.forEach(number => {
      number.parentElement.classList.remove('active-link');
    });
  });
});

// цикл по ссылкам на квартиры
flatLinkNumber.forEach(number => {
  // добавляем слушатель
    number.parentNode.addEventListener('mouseover', () => {
      // достаём номер квартиры из ссылки
      const linkNumber = number.textContent;
      // цикл по изображениям
      flatPath.forEach(path => {
        // очищаем все изображения от подсветки
        path.classList.remove('active-path');
        if (path.dataset.number === linkNumber) {
          // если номера квартир совпадают - подсвечиваем изображение
          path.classList.add('active-path');
        }
      });
    });
    // слушатель для ухода мыши, что бы изображения не оставались подсвеченными
    number.parentElement.addEventListener('mouseout', () => {
      flatPath.forEach(path => path.classList.remove('active-path'));
    });
});

// изменение номера этажа в модальном окне
floorPath.on('click', function() {
  const floorNumber = $(this).attr('data-floor');
  modalCounter.text(floorNumber);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    toggleModal()
  }
});

// закрытие модалки по клавише эскейп
floorPath.on('mouseover', function() {
  floorPath.removeClass('current-floor');
  currentFloor = $(this).attr('data-floor');
  $(this).addClass('current-floor');
  $('.counter').text(currentFloor);
});

// открытие модалки по кнопке + подстановка номера этажа
button.on('click', () => {
  toggleModal();
  modalCounter.text(counter.text());
});




floorPath.on('click', toggleModal);
modalCloseButton.on('click', toggleModal);




$(counterUp).on('click', () => {
  if (currentFloor < 18) {
    currentFloor++;
  } else {
    currentFloor = 1;
  }
  const usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

  $('.counter').text(usCurrentFloor);
  floorPath.removeClass('current-floor');
  $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
});


$(counterDown).on('click', () => {
  if (currentFloor > 1) {
    currentFloor--;
  } else {
    currentFloor = 18;
  }
  const usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

  $('.counter').text(usCurrentFloor);
  floorPath.removeClass('current-floor');
  $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
});

let currentFloor = 2;
const counterUp = $('.counter-up');
const counterDown = $('.counter-down');
const floorPath = $('.home-image path')

floorPath.on('mouseover', function() {
  floorPath.removeClass('current-floor');
  currentFloor = $(this).attr('data-floor');
  $('.counter').text(currentFloor);
});

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

var $imageOne = document.querySelector('.image-one');
var $imageTwo = document.querySelector('.image-two');
var $imageThree = document.querySelector('.image-three');
var $imageFour = document.querySelector('.image-four');
var $imageFive = document.querySelector('.image-five');
var $right = document.querySelector('.right');
var $left = document.querySelector('.left');
var $dotOne = document.querySelector('.dot-one');
var $dotTwo = document.querySelector('.dot-two');
var $dotThree = document.querySelector('.dot-three');
var $dotFour = document.querySelector('.dot-four');
var $dotFive = document.querySelector('.dot-five');

setInterval(rotateImage, 3000);

function rotateImage() {

  if ($imageOne.className === 'image-one') {
    $imageOne.className = 'image-one hidden';
    $imageTwo.className = 'image-two';
    $dotOne.classList.remove('current-image');
    $dotTwo.classList.add('current-image');
  } else if ($imageTwo.className === 'image-two') {
    $imageTwo.className = 'image-two hidden';
    $imageThree.className = 'image-three';
    $dotTwo.classList.remove('current-image');
    $dotThree.classList.add('current-image');
  } else if ($imageThree.className === 'image-three') {
    $imageThree.className = 'image-three hidden';
    $imageFour.classList.remove('hidden');
    $dotThree.classList.remove('current-image');
    $dotFour.classList.add('current-image');
  } else if ($imageFour.className === 'image-four') {
    $imageFour.className = 'image-four hidden';
    $imageFive.classList.remove('hidden');
    $dotFour.classList.remove('current-image');
    $dotFive.classList.add('current-image');
  } else {
    $imageOne.classList.remove('hidden');
    $imageFive.className = 'image-five hidden';
    $dotFive.classList.remove('current-image');
    $dotOne.classList.add('current-image');
  }
}

$right.addEventListener('click', rotateImage);

$left.addEventListener('click', function () {
  if (!$imageOne.className.includes('hidden')) {
    $imageOne.classList.add('hidden');
    $imageFive.classList.remove('hidden');
    $dotOne.classList.remove('current-image');
    $dotFive.classList.add('current-image');
  } else if (!$imageTwo.className.includes('hidden')) {
    $imageTwo.classList.add('hidden');
    $imageOne.classList.remove('hidden');
    $dotTwo.classList.remove('current-image');
    $dotOne.classList.add('current-image');
  } else if (!$imageThree.className.includes('hidden')) {
    $imageThree.classList.add('hidden');
    $imageTwo.classList.remove('hidden');
    $dotThree.classList.remove('current-image');
    $dotTwo.classList.add('current-image');
  } else if (!$imageFour.className.includes('hidden')) {
    $imageFour.classList.add('hidden');
    $imageThree.classList.remove('hidden');
    $dotFour.classList.remove('current-image');
    $dotThree.classList.add('current-image');
  } else if (!$imageFive.className.includes('hidden')) {
    $imageFive.classList.add('hidden');
    $imageFour.classList.remove('hidden');
    $dotFive.classList.remove('current-image');
    $dotFour.classList.add('current-image');
  }
});

$dotOne.addEventListener('click', function () {
  $imageOne.classList.remove('hidden');
  $imageTwo.classList.add('hidden');
  $imageThree.classList.add('hidden');
  $imageFour.classList.add('hidden');
  $imageFive.classList.add('hidden');
  $dotOne.classList.add('current-image');
  $dotTwo.classList.remove('current-image');
  $dotThree.classList.remove('current-image');
  $dotFour.classList.remove('current-image');
  $dotFive.classList.remove('current-image');

});

$dotTwo.addEventListener('click', function () {
  $imageTwo.classList.remove('hidden');
  $imageOne.classList.add('hidden');
  $imageThree.classList.add('hidden');
  $imageFour.classList.add('hidden');
  $imageFive.classList.add('hidden');
  $dotOne.classList.remove('current-image');
  $dotTwo.classList.add('current-image');
  $dotThree.classList.remove('current-image');
  $dotFour.classList.remove('current-image');
  $dotFive.classList.remove('current-image');
});

$dotThree.addEventListener('click', function () {
  $imageTwo.classList.add('hidden');
  $imageOne.classList.add('hidden');
  $imageThree.classList.remove('hidden');
  $imageFour.classList.add('hidden');
  $imageFive.classList.add('hidden');
  $dotOne.classList.remove('current-image');
  $dotTwo.classList.remove('current-image');
  $dotThree.classList.add('current-image');
  $dotFour.classList.remove('current-image');
  $dotFive.classList.remove('current-image');
});

$dotFour.addEventListener('click', function () {
  $imageTwo.classList.add('hidden');
  $imageOne.classList.add('hidden');
  $imageThree.classList.add('hidden');
  $imageFour.classList.remove('hidden');
  $imageFive.classList.add('hidden');
  $dotOne.classList.remove('current-image');
  $dotTwo.classList.remove('current-image');
  $dotThree.classList.remove('current-image');
  $dotFour.classList.add('current-image');
  $dotFive.classList.remove('current-image');
});

$dotFive.addEventListener('click', function () {
  $imageTwo.classList.add('hidden');
  $imageOne.classList.add('hidden');
  $imageThree.classList.add('hidden');
  $imageFour.classList.add('hidden');
  $imageFive.classList.remove('hidden');
  $dotOne.classList.remove('current-image');
  $dotTwo.classList.remove('current-image');
  $dotThree.classList.remove('current-image');
  $dotFour.classList.remove('current-image');
  $dotFive.classList.add('current-image');
});

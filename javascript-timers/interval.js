var heading = document.querySelector('h1');
var headingCountDown = setInterval(countDown, 1000);

function countDown() {
  if (heading.textContent === '4') {
    heading.textContent = 3;
  } else if (heading.textContent === '3') {
    heading.textContent = 2;
  } else if (heading.textContent === '2') {
    heading.textContent = 1;
  } else {
    heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(headingCountDown);
  }
}

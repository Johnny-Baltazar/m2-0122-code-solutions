var count = 3;

var countDown = () => {
  if (count === 3) {
    console.log('3');
    count--;
  } else if (count === 2) {
    console.log('2');
    count--;
  } else if (count === 1) {
    console.log('1');
    count--;
  } else {
    console.log('Blast Off!');
    clearInterval(countDownInterval);
  }
};

var countDownInterval = setInterval(countDown, 1000);

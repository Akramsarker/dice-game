// Click lisener 
document.querySelector('.btn').addEventListener('click', function () {
  // Random Number Frist
  const randomNumberOne = Math.floor(Math.random() * 6) + 1;

  const randomDiceImgNumOne = 'dice' + randomNumberOne + '.png';

  const randomSrcOne = 'image/' + randomDiceImgNumOne;
  const imageOne = document.querySelectorAll('img')[0];
  imageOne.setAttribute('src', randomSrcOne);

  // Random Number Secend
  const randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  const randomDiceImgNumTwo = 'dice' + randomNumberTwo + '.png';

  const randomSrcTwo = 'image/' + randomDiceImgNumTwo;
  const imageTwo = document.querySelectorAll('img')[1];
  imageTwo.setAttribute('src', randomSrcTwo);


  // Compare Calcution
  if (randomNumberOne > randomNumberTwo) {
    document.querySelector('h1').innerHTML = ' &#x1F6A9 Player One is win';
  } else if (randomNumberOne < randomNumberTwo) {
    document.querySelector('h1').innerHTML = ' &#x1F3C1 Player 2 is win';
  } else {
    randomNumberOne == randomNumberTwo;
    document.querySelector('h1').innerHTML = ' 	&#x1F38C Player One and two same';
  }
})



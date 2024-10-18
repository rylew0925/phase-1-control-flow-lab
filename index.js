function scuberGreetingForFeet(feet){
  // Write your code here! 
  let rideFare;
  if (feet <= 400) {
    rideFare = 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    rideFare = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    rideFare = 'I will gladly take your thirty bucks.';
  } else {
    rideFare = 'No can do.';
  }
  return rideFare;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
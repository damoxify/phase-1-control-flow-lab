function scuberGreetingForFeet(distanceInFeet) {
  let greeting;

  if (distanceInFeet <= 400) {
    greeting = 'This one is on me!';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (distanceInFeet > 2500) {
    greeting = 'No can do.';
  }

  return greeting;
}


function ternaryCheckCity(city) {
  const response =
    city === 'NYC'
      ? 'Ok, sounds good.'
      : 'No go.';
    
  return response;
}


function switchOnCharmFromTip(tipAmount) {
  let response;

  switch (tipAmount) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    case 'thanks for everything':
      response = 'Bye.';
      break;
   }
   return response;
  }

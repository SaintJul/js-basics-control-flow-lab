function scuberGreetingForFeet(numFeet){
  // Write your code here!
if (numFeet <= 400){
  return 'This one is on me!';
}else if (numFeet > 2000 && numFeet < 2500){
  return 'I will gladly take your thirty bucks.';
}else if (numFeet > 2500){
  return 'No can do.';
}
}

function ternaryCheckCity(city){
  // Write your code here!
  const isCity = city === 'NYC' ? "Ok, sounds good.": "No go.";
  return isCity
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  let tipAmount;
  switch(Tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous': 
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
  
}
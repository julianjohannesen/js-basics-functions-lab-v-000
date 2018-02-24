function distanceFromHqInBlocks(end){
    if(end > 42) {
      return end - 42;
    } else {
      return 42 - end;
    }
}

function distanceFromHqInFeet(end){
  return distanceFromHqInBlocks(end) * 264;
};

function distanceTravelledInFeet(begin, end){
  return Math.abs(begin - end) * 264;
};

//`calculatesFarePrice`: Given the same starting and ending block, return the fare for the customer.
//The first four hundred feet are free.
//For a distance between 400 and 2000 feet, the price is 2 cents per foot.
//Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
//Finally Scuber does not allow any rides over 2500 feet - the function returns `'cannot travel that far'` if a ride over 2500 feet is requested.
function calculatesFarePrice(begin, end){
  var feet = distanceTravelledInFeet(begin, end);
  if (feet <= 400{
    return 0;
  } else if(feet < 2000){
    return feet * 0.02;
  } else if(feet <= 2500) {
    return 25.00;
  } else {
    return "cannot travel that far";
  }
};

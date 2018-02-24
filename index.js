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

function calculatesFarePrice(begin, end){
  if (Math.abs(begin - end) === 1){
    
  }
};

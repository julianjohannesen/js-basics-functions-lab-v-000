function distanceFromHqInBlocks(end){
    if(end > 42) {
      return end - 43 + 1;
    } else {
      return 43 - end - 1;
    }
}

function distanceFromHqInFeet(end){
  if(end > 42) {
    return (end - 43 + 1) * 264;
  } else {
    return (43 - end - 1) * 264;
  }
};

function distanceTravelledInFeet(begin, end){
  return Math.abs(begin - end) * 264;
};

function calculatesFarePrice(begin, end){
};

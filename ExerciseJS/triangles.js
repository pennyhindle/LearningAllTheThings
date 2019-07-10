let firstSide = parseInt(prompt("Please enter the 1st side"));
let secondSide = parseInt(prompt("Please enter the 2nd side"));
let thirdSide = parseInt(prompt("Please enter the 3rd side"));


let isValid;
function isValidTriangle (firstSide, secondSide, thirdSide) {
  if((firstSide + secondSide) > thirdSide && (firstSide + thirdSide) > secondSide && (thirdSide + secondSide) > firstSide){
    isValid = true;
    return isValid;
  }
  else{
    isValid = false;
    return isValid;
  }
}

function perimeter (firstSide, secondSide, thirdSide) {
  return (firstSide + secondSide + thirdSide);
}

function area (firstSide, secondSide, thirdSide) {
  return ((firstSide + secondSide + thirdSide) / 2);
}

function classification (firstSide, secondSide, thirdSide) {
  if (firstSide == secondSide == thirdSide) {
    return 'Equilateral';
  }
  else if (firstSide == secondSide || firstSide == thirdSide || secondSide == thirdSide) {
    return 'Isosceles';
  }
  else {
    return 'Scalene'
  }
}
 
let valid = isValidTriangle(firstSide, secondSide, thirdSide);
if(valid) {
  let a = area(firstSide, secondSide, thirdSide);
  let p = perimeter(firstSide, secondSide, thirdSide);
  let c = classification(firstSide, secondSide, thirdSide);

  window.onload = function what(){
    document.getElementById('valid').innerHTML = "Valid: " + valid;
    document.getElementById('perimeter').innerHTML  = "Perimeter: " + p;
    document.getElementById('area').innerHTML  = "Area: " + a;
    document.getElementById('classification').innerHTML  = "Classification: " + c;
  };
}
else {
  window.onload = function what(){
    document.getElementById('valid').innerHTML = "Valid: " + valid;
    document.getElementById('perimeter').innerHTML  = "Perimeter: N/A";
    document.getElementById('area').innerHTML  = "Area: N/A";
    document.getElementById('classification').innerHTML  = "Classification: N/A";
  };
}

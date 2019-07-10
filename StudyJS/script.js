number = prompt("Please enter a number");

nextPrime:
for (let i = 2; i <= number; i++) {

  for (let divider = 2; divider < i; divider++) {
    if(i % divider == 0)  continue nextPrime;
  }
  alert(i);
}

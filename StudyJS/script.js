visitor = prompt("Enter Admin, other or cancel")

if(visitor == "Cancel") {
  alert("Cancelled");
}
else if(visitor == 'Admin') {
  password = prompt("Please enter your password");

  if (password == "Cancel") {

  }
  if (password == "TheMaster") {
    alert("Welcome!")
  }
  else {
    alert("Wrong password");
  }
}
else {
  alert("I don't know you");
}

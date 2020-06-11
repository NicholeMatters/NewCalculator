//let display = 
//function for displaying values
function dis(value) {
  document.getElementById("edu").value+=value;
}

  //function for evalution
function solve(id) {
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}

//function for clearing the displaying
function clr() {
  document.getElementById("edu").value
}


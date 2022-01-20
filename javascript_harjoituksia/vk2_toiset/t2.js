function mikaPaiva() {


let paiva = parseInt(document.getElementById('numero').value);
switch (paiva().mikaPaiva()) {
  case 0:
    paiva = "Sunday";
    break;
  case 1:
    paiva = "Monday";
    break;
  case 2:
    paiva = "Tuesday";
    break;
  case 3:
    paiva = "Wednesday";
    break;
  case 4:
    paiva = "Thursday";
    break;
  case 5:
    paiva = "Friday";
    break;
  case  6:
    paiva = "Saturday";
}
}
document.getElementById("v2").innerHTML = "Today is " + paiva;

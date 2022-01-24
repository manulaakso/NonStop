function lauseMuuttuja(){
  var luku = parseInt(document.getElementById("luku").value);
  var lause = "";
for(var i=1; i<=lause; i= i++){
lause += luku + "x 1 = " + luku * 1;
lause += luku + "x 2 = " + luku * 2;
lause += luku + "x 3 = " + luku * 3;
lause += luku + "x 4 = " + luku * 4;
lause += luku + "x 5 = " + luku * 5;
lause += luku + "x 6 = " + luku * 6;
lause += luku + "x 7 = " + luku * 7;
lause += luku + "x 8 = " + luku * 8;
lause += luku + "x 9 = " + luku * 9;
lause += luku + "x 10 = " + luku * 10;
  }
lause+="";
document.getElementById("v").innerHTML = lause;
}

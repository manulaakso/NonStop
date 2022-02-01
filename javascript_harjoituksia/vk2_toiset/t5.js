function lauseMuuttuja()
{
  var lause = 0;
  var luku = 0;
  const kerroin = [1,2,3,4,5,6,7,8,9,10];

  luku = parseInt(document.getElementById('arvo').value);
  document.write("Antamasi luku on: " + luku + "<br><br>");

  for (let i = 0; i < kerroin.length; i++) {
    lause += kerroin[i] * luku + luku;
    document.write("Lausemuuttuja = Lausemuuttuja + luku + " + kerroin[i] + " x luku = " + lause + "<br>");

  }
}

function etsiSuurin()
{
    var l1 = document.getElementById('luku1').value;
    var l2 = document.getElementById('luku2').value;
    var l3 = document.getElementById('luku3').value;
    var l4 = document.getElementById('luku4').value;
    var l5 = document.getElementById('luku5').value;
    var taulukko = [l1, l2, l3, l4, l5];
    taulukko = taulukko.sort();
    document.getElementById('vastaus2').innerHTML = taulukko[4];
}

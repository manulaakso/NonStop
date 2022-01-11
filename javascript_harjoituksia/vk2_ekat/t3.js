function tarkasta()
{
    luku = document.getElementById('luku').value;
    if(luku%2 == 0)
    {
      document.getElementById('vastaus3').innerHTML = "Lukusi on parillinen";
    }
    else
      {
        document.getElementById('vastaus3').innerHTML = "Lukusi on pariton";
      }
}

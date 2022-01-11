function tarkastaIka()
{
  var ika = parseInt(document.getElementById('ika').value);
  if(ika < 16)
  {
    document.getElementById('vastaus4').innerHTML = "Saat ajaa polkupyörää";
  }
  else if (ika < 18)
  {
    document.getElementById('vastaus4').innerHTML = "Saat ajaa mopoa";
  }
  else
    {
    document.getElementById('vastaus4').innerHTML = "Saat ajaa autoa";
    }
}

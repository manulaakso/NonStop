function kaannos()
{
  var arvo = document.getElementById('kieli').value;
  if (arvo == "en")
  {
    document.getElementById('vastaus5').innerHTML = "Hello World";
  }
  else if (arvo == "es")
  {
    document.getElementById('vastaus5').innerHTML = "Hola Mundo";
  }
  else if (arvo == "ru")
  {
    document.getElementById('vastaus5').innerHTML = "Hejssan Världen";
  }
  else
  {
  document.getElementById('vastaus5').innerHTML = "Et valinnut mitään"  
  }
}

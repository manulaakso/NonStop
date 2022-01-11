function posneg() {
  var luku = parseInt(document.getElementById('luku').value);
  if(luku >=0)
  {
    document.getElementById('v1').innerHTML = "Luku on positiivinen";
  }
  else
    {
      document.getElementById('v1').innerHTML = "Luku on negatiivinen";
    }
  
}

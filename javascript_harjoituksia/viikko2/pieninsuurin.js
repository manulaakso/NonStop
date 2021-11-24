function testi(arr)
{
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("Pienin: " + pienin + " ja suurin " + suurin);
}

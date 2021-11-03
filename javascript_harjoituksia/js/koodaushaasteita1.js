var taulukkomuuttuja = [34, 566, 71, 89];
function tehtavaYksi(a, b)
{
  console.log(a + b);
}
function tehtavaKaksi()
{
  console.log(taulukkomuuttuja[0]);
}
function tehtavaKolme(a, b)
{
  if((a + b < 100))
  {
    console.log("Lukujen summa on alle 100");
  }
  else {
    console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!")
  }
}
function tehtavaNelja(a, b)
{
  if(a == b){
    console.log("Samat");
  }
  else("Eri luvut!");
}
function tehtavaViisi(a, b, c)
{
  console.log(a * 3600 + b * 60 + c);
}

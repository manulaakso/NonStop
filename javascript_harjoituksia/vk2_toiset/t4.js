function muuta(){
  var l1 = parseInt(document.getElementById("l1").value);
  var l2 = parseInt(document.getElementById("l2").value);
  var l3 = parseInt(document.getElementById("l3").value);
  var l4 = parseInt(document.getElementById("l4").value);
  var l5 = parseInt(document.getElementById("l5").value);

    var num = [l1, l2, l3, l4, l5];
    var sum = 0;

      for(var i in num){
      sum += num[i];
    }

    var numcnt = num.length;

    var yht = sum / numcnt;

document.getElementById("v").innerHTML = "lukujen summa on: " + sum + " ja keskiarvo on: " + yht;
}

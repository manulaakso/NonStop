/* Haetaan lomakkeelta painike ja laitetaan sille clickauksen 'kuuntelu' */
  var enterButton = document.getElementById("painike");
  enterButton.addEventListener("click",lisaaListaanNapauttaessa); // PerÃ¤sssÃ¤ funktio, jota kutsutaan

/* Haetaan lomakkeelta syÃ¶ttÃ¶kenttÃ¤ ja laitetaan sille enterin 'kuuntelu' */
  var input = document.getElementById("syotto");
  input.addEventListener("keypress", lisaaListaanEnterilla); // PerÃ¤ssÃ¤ funktio, jota kutsutaan

/* Haetaan lomakkeelta jÃ¤rjestÃ¤mÃ¤tÃ¶n lista, johon tehtÃ¤vÃ¤t syÃ¶tetÃ¤Ã¤n */
  var ul = document.querySelector("ul");

/* Luodaan funktio, joka palauttaa syÃ¶tetyn merkkijonon pituuden */
function inputLength()
{
	return input.value.length;
}

/* Varsinainen lisÃ¤ysfunktio */
function luoListaElementti()
{
	var li = document.createElement("li"); // luo "li" elementin
  // Tarkistetaan, ettÃ¤ on syÃ¶tetty jotain
  if(input.value != '')
  {
    li.appendChild(document.createTextNode(input.value)); //lisÃ¤tÃ¤Ã¤n li-elementtiin tekstin, joka on laatikossa
  	ul.appendChild(li); //lisÃ¤Ã¤ li-elementin ul-elementtiin
  	input.value = ""; // TyhjentÃ¤Ã¤ syÃ¶ttÃ¶kentÃ¤n
  }

	// Aloitetaan tehdyn tehtÃ¤vÃ¤n vÃ¤rjÃ¤ys
	// koska se on funktiossa, se tekee sen vain lisÃ¤ttyihin tehtÃ¤viin
	function crossOut() {
		li.classList.toggle("done");
	}
  // Kutsutaan yllÃ¤olevaa funktiota
	li.addEventListener("click",crossOut);
	//Tehdyn tehtÃ¤vÃ¤n vÃ¤rjÃ¤ys loppuu


	// Aloitetaan poistopainikkeen lisÃ¤ys
	var poisto = document.createElement("button"); // luodaan painike-elementti
	poisto.appendChild(document.createTextNode("X")); // LisÃ¤tÃ¤Ã¤n siihen X-kirjain
	li.appendChild(poisto); // LisÃ¤tÃ¤Ã¤n se kaikkiin li-elementteihin
	poisto.addEventListener("click", poistaTehtava);
	// Poistopainikkeen lisÃ¤ys loppuu


	//LisÃ¤tÃ¤Ã¤n varsinainen poistofunktio (DISPLAY: NONE)
	function poistaTehtava()
  {
		li.classList.add("delete")
	}
}// PÃ¤Ã¤funktio pÃ¤Ã¤ttyy


function lisaaListaanNapauttaessa()
{
	if (inputLength() > 0) { //tarkistaa, ettÃ¤ on syÃ¶tetty jotain
		luoListaElementti(); // Kutsuu 'pÃ¤Ã¤funktiota'
	}
}

function lisaaListaanEnterilla(event)
{
	if (inputLength() > 0 && event.which ===13) { //Tarkistetaan, ettÃ¤ Enter on painettu
		//nro 13 on Enterin avainkoodi, voidaan kirjoittaa myÃ¶s event.keyCode === 13
		luoListaElementti(); // Kutsuu 'pÃ¤Ã¤funktiota'
	}
}

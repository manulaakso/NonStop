function tarkastaKarkausV(vuosi) {
      var vuosi = parseInt(document.getElementById('vuosi').value);

    if ((0 == vuosi % 4) && (0 != vuosi % 100) || (0 == vuosi % 400)) {
        document.getElementById('v3').innerHTML = (vuosi + ' on karkausvuosi');
    } else {
        document.getElementById('v3').innerHTML = (vuosi + ' ei ole karkausvuosi');
    }
}

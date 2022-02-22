function store(){ //stores items in the localStorage
    var tieto1 = document.getElementById('tieto1').value;
    var tieto2 = document.getElementById('tieto2').value;
    var tieto3 = document.getElementById('tieto3').value;
    var tieto4 = document.getElementById('tieto4').value;
    var tieto5 = document.getElementById('tieto5').value;
    var tieto6 = document.getElementById('tieto6').value;
    var avain = document.getElementById('avain').value;

    const tieto = {
        tieto1: tieto1,
        tieto2: tieto2,
        tieto3: tieto3,
        tieto4: tieto4,
        tieto5: tieto5,
        tieto6: tieto6,
    }

    window.localStorage.setItem(avain,JSON.stringify(tieto));
    //converting object to string
}
function retrieveRecords(){ //retrieves items in the localStorage
    var avain = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(avain); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var avain = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(avain) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    //document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}

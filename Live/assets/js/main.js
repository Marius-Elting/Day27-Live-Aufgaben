// Strings bearbeiten

// vordefinierte Funktionen um damit zu arbeiten 


const text = "Wo ist walter?";

// beinhaltet ein string ein bestimmtes wort?


// Indexof (gibt an wo im string das gesuchte Wort anfängt)
const walterIndex = text.indexOf("walter");
console.log(walterIndex); // Output = 7 (wort fängt an der 7. Stelle des strings an)
// bei indexOf wird mit 0 angefangen zu zählen und die leerzeichen werden mitgezählt

const istIndex = text.indexOf("ist");
console.log(istIndex); //3

const walderENGIndex = text.indexOf("waldo");
console.log(walderENGIndex);// -1

if (walderENGIndex > -1) {
    console.log("Waldo gefunden");
}

// Includes
console.log(text.includes("walter" && "Wo")); //gibt true oder false zurück (ist in dem String das Wort Walter enthalten)

// string slice
const halloween = "süßes oder saures";
console.log(halloween.slice(0, 8));//schneidet die wörter zwischen dem ersten und dem 2. Wert aus (0-8 = "süßes od")
console.log(halloween.slice(11, 17));// gibt "süßes" aus


// Substring = strings in einem string

// string replace 

console.log(halloween.replace("saures", "schläge"));
// ersetzt das erste Wort durch das 2. (im consoleLOG wird der ganze satz ausgegeben)
// hier wird nur ein Wort ersetzt (immer das erste)


const dogText = "dog quick dog lel dog ganz viel dog";
console.log(dogText.replaceAll("dog", "huhn"));
//hier werden alle wörter ersetzt


// to Upperce
// formatiert den Text in Uppercase (jeder Buchstabe groß geschrieben)
const halloweenUppercase = halloween.toLocaleUpperCase();
console.log(halloweenUppercase);



// der Unterschiede zwischen Length und Index ist, dass lengh die wahre länge angibt und bei 1 anfängt zu zälen (beim Index wird bei 0 angefangen zu zählen)
const userName = "WoWFreak98";
// gibt die länge des strings aus 
console.log(userName.length);

// prüft ob der Username länger als 12 zeichen ist 
if (userName.length > 12) {
    console.log("Der Username ist zu lang");
} else {
    console.log("Du wirst eingelogt");
}

const myText1 = "Ein Text";
// mit backtics lassen sich absätze einfach einfügen
// mit ${}lassen sich variablen ohne ein "Plus" einfügen 
const myText2 = `So können wir ab jetzt strings 
schreiben ${userName}`;

console.log(myText1);
console.log(myText2);
// document.getElementById('hallo').innerHTML = myText2;

// functioniert wie ParseInt(macht einen string zu einer Number) hier lassen sich auch dezimalzahlen umwandeln
console.log(Number("3"));
// Ist das gegenteil von Number (wandelt eine Number in einen String um)
console.log(String(3));


// Javascript verbindung mit HTML


function getNameOfMonth() {
    const numerOfMonth = Number(document.getElementById('month').value);
    let output = "";
    switch (numerOfMonth) {
        case 1: output = "Januar"; break;
        case 2: output = "Februar"; break;
        case 3: output = "Märt"; break;
        default: output = "Month not found";
    }
    console.log(output);
    document.getElementById("output").innerHTML = output;
}



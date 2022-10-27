function check(event) {
    event.preventDefault();
    const input = document.getElementById("input").value;
    let outputP = document.getElementById("output");

    switch (input) {
        case "NRW":
        case "nrw":
        case "Nordrhein - Westfalen": output = "Nordrhein - Westfalen hat 17, 865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Baden-Württemberg":
        case "BaWü": output = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern": output = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin": output = "Berlin hat3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg": output = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen": output = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg": output = "Hamburg hat1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen": output = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern": output = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niederscahsen": output = "Niederscahsen hat7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz": output = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt.";
            break;
        case "Saarland": output = "Saarland hat 0,996 Mio Einwohner  und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachen": output = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt": output = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein": output = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thüringen": output = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default: output = "Ein solches Bundesland gibt es in Deutschland nicht";

    }

    outputP.innerHTML = output;
}
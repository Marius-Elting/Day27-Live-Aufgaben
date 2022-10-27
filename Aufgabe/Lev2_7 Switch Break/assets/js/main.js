// JS Assets

//     < b > Brief und Postkarte</b > <br>
//         L: 10 - 23,5 cm
//         B: 7 - 12,5 cm
//         H: bis 1 cm

//         <b>DHL Paket 2 kg</b> <br>
//             bis 60 x 30 x 15 cm

//             <b>DHL Paket 5 kg</b> <br>
//                 bis 120 x 60 x 60 cm

//                 <b>DHL Paket 10 kg</b> <br>
//                     bis 120 x 60 x 60 cm

//                     "<b>Extra große Größe</b>;



function showtxt() {
    let input = parseInt(document.getElementById("mylist").value);
    let b = document.querySelector("b");
    let td = document.getElementById("masse");

    switch (input) {
        case 0: outputB = "Brief und Postkarte"; outputTD = "L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
            break;
        case 1: outputB = "DHL Paket 2 kg"; outputTD = "bis 60 x 30 x 15 cm";
            break;
        case 2: outputB = "DHL Paket 5 kg"; outputTD = "bis 120 x 60 x 60 cm";
            break;
        case 3: outputB = "DHL Paket 10 kg"; outputTD = "bis 120 x 60 x 60 cm";
            break;
        default: outputB = "Extra große Größe";
    }


    b.innerHTML = outputB;
    td.innerHTML = outputTD;
}
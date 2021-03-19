//als het scherm geladen is, wordt alles uitgevoerd
window.onload = function () {


    // audo wordt afgespeeld als de pagina wordt geopend. De audio is rechtstreeks uit de file gehaald.
    var audio = new Audio ('Audio/eetsmakelijk.mp3');
    audio.play();
    
    // dit is een array met 2 fotos erin 
    var bodemfotos = ["Fotos/bodem1.png", "Fotos/bodem2.png"];

    // hier worden de bodemfoto en bodemknop gedefinieerd
    var bodemfoto = document.querySelector("#bodem");
    var bodemknop = document.querySelector("#bodemknop");

    //als er op de knop geklikt wordt wordt de functie geactiveerd
    bodemknop.addEventListener("click", veranderBodem);

    //de index is de nummer in de array dus 1 is eerste van de array dus eerste foto
    var indexbodem = 1;

    function veranderBodem() {

        //volgende knop wordt getoond
        volgendeknop1.style.display = "block";

        //de array krijgt +1 dus de volgende foto wordt getoond
        indexbodem = indexbodem + 1;

        //als de foto groter dan 1 is gaat het opnieuw naar 0 
        if (indexbodem > 1) {
            indexbodem = 0;
        } else {}

        //hier wordt de index van de array gedefinieerd en wordt de foto in de src in de html gezet
        bodemfoto.setAttribute("src", bodemfotos[indexbodem]);
    };



    var kaasfotos = ["Fotos/kaas1.png", "Fotos/kaas2.png"];
    var kaasfoto = document.querySelector("#kaas");
    var kaasknop = document.querySelector("#kaasknop");

    kaasknop.addEventListener("click", veranderKaas);

    var indexkaas = 1;

    function veranderKaas() {

        kaasknop.style.display = "block";

        volgendeknop2.style.display = "block";

        indexkaas = indexkaas + 1;

        if (indexkaas > 1) {
            indexkaas = 0;
        } else {}

        kaasfoto.setAttribute("src", kaasfotos[indexkaas]);

    };

    var toppingfotos = ["Fotos/topping1.png", "Fotos/topping2.png", "Fotos/topping3.png", "Fotos/topping4.png"];
    var toppingfoto = document.querySelector("#topping");
    var toppingknop = document.querySelector("#toppingknop");

    toppingknop.addEventListener("click", veranderTopping);

    var indextopping = 1;

    function veranderTopping() {

        volgendeknop3.style.display = "block";

        indextopping = indextopping + 1;

        if (indextopping > 3) {
            indextopping = 0;
        } else {}

        toppingfoto.setAttribute("src", toppingfotos[indextopping]);
    };


    //hier wordt de knoppen getoond en niet getoond dus de volgende stap en de knoppen voor de pizzas
    var volgendeknop1 = document.querySelector("#volgendeknop1");
    var volgendeknop2 = document.querySelector("#volgendeknop2");
    var volgendeknop3 = document.querySelector("#volgendeknop3");
    var bestelknop = document.querySelector("#bestelknop");

    volgendeknop1.addEventListener("click", volgendeFunctie1);

    function volgendeFunctie1() {
        volgendeknop1.style.display = "none";
        bodemknop.style.display = "none";
        kaasknop.style.display = "block";
    };


    volgendeknop2.addEventListener("click", volgendeFunctie2);

    function volgendeFunctie2() {
        volgendeknop2.style.display = "none";
        kaasknop.style.display = "none";
        toppingknop.style.display = "block";
    };


    volgendeknop3.addEventListener("click", volgendeFunctie3);

    function volgendeFunctie3() {
        volgendeknop3.style.display = "none";
        toppingknop.style.display = "none";
        bestelknop.style.display = "block";
    };


    bestelknop.addEventListener("click", bestelFunctie);

    //hier krijgt de gebruiker een popup te zien dat er besteld is
    function bestelFunctie() {
        alert("Bestelling geplaatst, de bezorger is er over 20 minuten");
    }

};

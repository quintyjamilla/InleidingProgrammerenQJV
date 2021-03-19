//bronnen:
//https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
//https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
//https://stackoverflow.com/questions/14094590/if-else-with-selection-box-value-javascript-and-html
//https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/
//https://developer.mozilla.org/en-US/docs/Web/API/Window/open
//https://www.w3schools.com/js/js_htmldom_css.asp
//https://www.w3schools.com/js/js_htmldom_events.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play
//https://www.youtube.com/watch?v=up5r2wA0_B0&list=PLIjMQPyigCJ52LGqnCuMfqr4fWN7v5gJa

//als het scherm geladen is wordt alles uitgevoerd hiervoor werkte er dus niks, na deze functie werkt alles. 
window.onload = function () {

//als er op de 'volgende' knop gedrukt word, wordt de woonplaats gecheckt
    
    document.querySelector("#volgendeKnop").addEventListener("click", checkWoonplaats);


    function checkWoonplaats() {

        //de select wordt gedefinieerd
        var woonplaats = document.querySelector("#woonplaats");

        //de geselecteerde optie van de select wordt gedefinieerd
        var resultaat = woonplaats.options[woonplaats.selectedIndex].value;


        //als de gebruiker op ja klikt dan opent de nieuwe venster
        if (resultaat == 'ja') {

            windowObjectReference = window.open("pizza.html");

        } else {

            //als de gebruiker op nee klikt of op wat anders dan komt er een error bericht
            document.querySelector("#nee-tekst").innerHTML = "Helaas, je moet in Amsterdam wonen om te kunnen bestellen."
        };
    };

};

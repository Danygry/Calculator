function aggiungiALDisplay(valore){
    visualizza(display.value + valore);
}

function rimuoviUltimoCarattere(){
    visualizza(display.value.slice(0, -1));
}

function inserisciFunzione(nomeFunzione){
    visualizza(' '+nomeFunzione+'('+display.value+')');
}


function risolviEspressioneDisplay(){
    visualizza(eval(display.value));
}


function visualizza(valore){
    display.value = valore;
    spostaCursoreAllaFine(display);
}

function spostaCursoreAllaFine(el){
    display.focus();
    el.style.textIndent = "-999em";
    el.onkeydown = function(){
        this.style.textIndent = "0";
        this.style.onkeydown = function(){};
    }
}

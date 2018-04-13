var cfpiva = {};

var formatReturn = function(result, data, callback) {
    if(callback)
        callback(!result, data); //callback in format 'callback(err, data)'
    else
        return result; //return true or false
};

/**************************************
	Controllo del Codice Fiscale
	Linguaggio: JavaScript
***************************************/
cfpiva.controllaCF = function(codFisc, callback) {
    var validi, i, s, set1, set2, setpari, setdisp;
    if( codFisc == '' )  return '';
    codFisc = codFisc.toUpperCase();
    if( codFisc.length != 16 )
        return formatReturn(false, 'La lunghezza del codice fiscale non è corretta: il codice fiscale dovrebbe essere lungo esattamente 16 caratteri.', callback);
    validi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for( i = 0; i < 16; i++ ){
        if( validi.indexOf( codFisc.charAt(i) ) == -1 )
            return formatReturn(false, 'Il codice fiscale contiene un carattere non valido \'' + codFisc.charAt(i) + '\'. I caratteri validi sono lettere e cifre.', callback);
    }
    set1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    set2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ";
    setpari = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    setdisp = "BAKPLCQDREVOSFTGUHMINJWZYX";
    s = 0;
    for( i = 1; i <= 13; i += 2 )
        s += setpari.indexOf( set2.charAt( set1.indexOf( codFisc.charAt(i) )));
    for( i = 0; i <= 14; i += 2 )
        s += setdisp.indexOf( set2.charAt( set1.indexOf( codFisc.charAt(i) )));
    if( s%26 != codFisc.charCodeAt(15)-'A'.charCodeAt(0) )
        return formatReturn(false, 'Il codice fiscale non è corretto, il codice di controllo non corrisponde.', callback);
    return formatReturn(true, codFisc, callback);
}

/*****************************************
	Controllo della Partita I.V.A.
	Linguaggio: JavaScript
******************************************/
cfpiva.controllaPIVA = function(piva, callback) {
    if( piva == '' )  return '';
    if( piva.length != 11 )
        return formatReturn(false, 'La lunghezza della partita IVA non è corretta: la partita IVA dovrebbe essere lunga esattamente 11 caratteri.', callback);
    var validi = "0123456789";
    for( i = 0; i < 11; i++ ){
        if( validi.indexOf( piva.charAt(i) ) == -1 )
            return formatReturn(false, 'La partita IVA contiene un carattere non valido \'' + piva.charAt(i) + '\'. I caratteri validi sono solo cifre.', callback);
    }
    s = 0;
    for( i = 0; i <= 9; i += 2 )
        s += piva.charCodeAt(i) - '0'.charCodeAt(0);
    for( i = 1; i <= 9; i += 2 ){
        c = 2*( piva.charCodeAt(i) - '0'.charCodeAt(0) );
        if( c > 9 )  c = c - 9;
        s += c;
    }
    if( ( 10 - s%10 )%10 != piva.charCodeAt(10) - '0'.charCodeAt(0) )
        return formatReturn(false, 'La partita IVA non è valida: il codice di controllo non corrisponde.', callback);
    return formatReturn(true, piva, callback);
}

module.exports = cfpiva;
cfpiva - Utility per calcolo e verifica di Codice Fiscale e Partita IVA

## Installation

    npm install cfpiva

## Usage

### controllaCF(codFisc, [callback])

Controlla la validità del codice fiscale fornito come 'codFisc'.
* Se non viene fornita una funzione di callback, restituisce semplicemente 'true' o 'false' per indicare la correttezza del codice fiscale.
* Utilizzando la funzione di callback, il primo argomento indica o meno la presenza di un errore, il secondo l'eventuale descrizione dell'errore.

Esempio:
<pre>
    var cfpiva = require('./cfpiva');
    var retVal = cfpiva.controllaCF('ABCDEF01B01A000X');
    // retVal == false
    
    cfpiva.controllaCF('ABCDEF01B01A000X', function(err, data){
        // err == true
        // ...
    });
</pre>

### controllaPIVA(piva, [callback])

Controlla la validità della partita IVA come 'piva'.
* Se non viene fornita una funzione di callback, restituisce semplicemente 'true' o 'false' per indicare la correttezza della partita IVA.
* Utilizzando la funzione di callback, il primo argomento indica o meno la presenza di un errore, il secondo l'eventuale descrizione dell'errore.

Esempio:
<pre>
    var cfpiva = require('./cfpiva');
    var retVal = cfpiva.controllaPIVA('01234567890');
    // retVal == false
    
    cfpiva.controllaPIVA('01234567890', function(err, data){
        // err == true
        // ...
    });
</pre>
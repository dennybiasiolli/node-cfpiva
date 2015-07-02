var cfpiva = require('./cfpiva');

cfpiva.controllaCF('ABCDEF01B01A000X', function(err, data){
    if(err)
        console.log('Error: ' + data);
    else
        console.log('OK: ' + data);
});

cfpiva.controllaPIVA('01234567890', function(err, data){
    if(err)
        console.log('Error: ' + data);
    else
        console.log('OK: ' + data);
});
document.querySelector('#button').addEventListener('click',logDebug); 

function logDebug(){
    logMessage()
}

function logMessage(){
    console.log('message');
    console.warn('attention!');
    console.error('ERREUR');
}
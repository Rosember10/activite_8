document.querySelector('#button').addEventListener('click',logmessages); 

function logmessages(){
    console.log('message');
    console.warn('attention!');
    console.error('ERREUR');
}
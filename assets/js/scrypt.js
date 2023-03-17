/*

1. chiedo il nome all'utente e salvo in una variabile
2. chiedo il cognome e salvo in un'altra variabile 
3. chiedo il colore preferito e salvo in variabile
4. compongo la pwd e la salvo in una costante
5. scrivo la stringa nella pagina

*/

const name = prompt('Inserisci Nome');


const surname = prompt('Inserisci Cognome');

const favColour = prompt('Qual è il tuo colore preferito?')


const pwdString= name + surname + favColour + '23'

document.getElementById('pwdResult').innerHTML=`
<div class="border text-bg-success text-center">
  <p>
    <strong>Fatto!</strong> <br>
    La tua password totalmente sicura è ${pwdString}
  </p>
</div>

`
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    else if(argMove == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce'
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if ( playerInput == '1'){
  playerMove = 'kamień';
}
else if ( playerInput == '2'){
    playerMove = 'papier';
}
else if ( playerInput == '3'){
    playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if ( computerMove == 'papier' && playerMove == 'papier'){
    printMessage("Remis, zagrajmy jeszcze raz");
}
else if ( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrałem !!!, czcesz zagrać jeszcze raz ?');
}
else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrałem !!! naostrz nożyce i zagrajmy jeszcze raz');
    }
else if ( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrałeś !!! Zagrajmy jeszcze raz, chcę się odegrać');
    }
else if ( computerMove =='nożyce' && playerMove == 'nożyce') {
    printMessage ( 'Nierozegrane, zagrajmy jeszcze !!');
}
else if  ( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage ( 'Nierozegrane, szkod że to nie krzemienie, grajmy jeszcze ');
}
else if ( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage ('Spróbujmy jeszcze raz, remis');
}
else if ( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage ( ' Wygrałeś, potrzebuję czas na naostrzenie nożyc ;) ');
}
else if ( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage ( ' Wybierz wartość pomiędzy 1 a 3, zagrajmy jeszcze raz ;) ');
}
else if ( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage ( ' Wprowadzona wartość jest spoza przedziału 1 - 3, zagrajmy jeszcze raz ;) ');
}
else if ( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage ( ' Możesz wybierać tylko wartości z przedziału 1 - 3, zagrajmy jeszcze raz ');
}
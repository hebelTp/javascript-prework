function playGame(playerInput){
    

            function getMoveName(argMoveId){
            if(argMoveId == 1){
                return 'kamień';
            }
            else if(argMoveId == 2){
                return 'papier';
            }
            else if(argMoveId == 3){
                return 'nożyce';
            }

            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';

            }

            let randomNumber = Math.floor(Math.random() * 3 + 1);

            console.log('Wylosowana liczba to: ' + randomNumber);

            let argComputerMove = getMoveName(randomNumber);
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

            //printMessage('Mój ruch to: ' + computerMove);

            //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

            console.log('Gracz wpisał: ' + playerInput);

            let argPlayerMove = getMoveName(playerInput);
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

            function displayResult(argComputerMove, argPlayerMove){
                if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                    printMessage('Ty wygrywasz!');
                }
                else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
                    printMessage("Remis, zagrajmy jeszcze raz");
                }
                else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                    printMessage('Wygrałem !!!, czcesz zagrać jeszcze raz ?');
                }
                else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                    printMessage('Wygrałem !!! naostrz nożyce i zagrajmy jeszcze raz');
                    }
                else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                    printMessage('Wygrałeś !!! Zagrajmy jeszcze raz, chcę się odegrać');
                    }
                else if ( argComputerMove =='nożyce' && argPlayerMove == 'nożyce') {
                    printMessage ( 'Nierozegrane, zagrajmy jeszcze !!');
                }
                else if  ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                    printMessage ( 'Nierozegrane, szkod że to nie krzemienie, grajmy jeszcze ');
                }
                else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                    printMessage ('Spróbujmy jeszcze raz, remis');
                }
                else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                    printMessage ( ' Wygrałeś, potrzebuję czas na naostrzenie nożyc ;) ');
                }
                else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
                    printMessage ( ' Wybierz wartość pomiędzy 1 a 3, zagrajmy jeszcze raz ;) ');
                }
                else if ( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
                    printMessage ( ' Wprowadzona wartość jest spoza przedziału 1 - 3, zagrajmy jeszcze raz ;) ');
                }
                else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
                    printMessage ( ' Możesz wybierać tylko wartości z przedziału 1 - 3, zagrajmy jeszcze raz ');
                }

            }

            displayResult(argComputerMove,argPlayerMove);
}
playGame(3);
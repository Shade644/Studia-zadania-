
/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
 let rectWidth = 7;
 let rectHeight = 5;
 let rectBorderSymbol = '#';
 let rectString = '';
 let a=''
 let b=''

 if(rectWidth <= -1 || rectWidth>=81){
    console.log("liczby mają być w zakresie 0 do 80")
}

if(rectHeight <= -1 || rectHeight>=81){
    console.log("liczby mają być w zakresie 0 do 80!")
}
/*
if (rectBorderSymbol == ){
    console.log("nie uzywaj znaków białych")
}
*/

for(let i=0; i<rectWidth; i++){
    rectString+=rectBorderSymbol;
}

rectString += "\n";

for(let i=0; i<rectHeight-2; i++){

    rectString+=rectBorderSymbol;

        for(let j = 0; j<rectWidth-2; j++){
            rectString+=" "       
        }
    rectString+=rectBorderSymbol;
    rectString += "\n";
}


   

for(let i=0; i<rectWidth; i++){
    rectString+=rectBorderSymbol;
}

 console.log(rectString);
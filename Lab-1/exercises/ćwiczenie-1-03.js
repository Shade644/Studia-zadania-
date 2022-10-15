/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber =1;
let romanNumber = '';
 if (decimalNumber>=1 && decimalNumber<=10){

    switch (decimalNumber) {
        case 1: "I";
            break;
        case 2: 
            break;
        case 3: console.log=("III");
            break;
        case 4: console.log=("IV");
            break;
        case 5: console.log=("V");
            break;
        case 6: console.log=("VI");
            break;
        case 7: console.log=("VII");
            break;
        case 8: console.log=("VIII");
            break;
        case 9: console.log=("IX");
            break;
        case 10: console.log=("X");
            break;
            default:
    }
 //  console.log(a);
 }
 else {
     console.log("Decimal number is out of range!")
 }

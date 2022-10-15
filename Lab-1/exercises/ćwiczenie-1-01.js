/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 5;
let radius = (area / Math.PI);
let a =Math.sqrt(radius);
a=a.toFixed(2);

console.log(a);


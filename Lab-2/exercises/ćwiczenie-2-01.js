/**
 * Zdefiniuj funkcję, która oblicza promienie kół na podstawie dwowolnej liczby pól - parametrów funkcji.
 * Wywołanie                Wyniki  
 * radius(4)                -> [1.1283791670955126]
 * radius(4, 2, -2, "a")    -> [1.1283791670955126, 0.7978845608028654, NaN, NaN] 
 * radius()                 -> []
 */
function radius(a,b,c,d,e){
    let result='';

    if (radius === undefined && radius === null){
    result='';
        console.log(result);
return true;
    }
    else if(isNaN(b) && isNaN(c) && isNaN(d) && isNaN(e)){
        let pi = Math.PI;
        let r= Math.sqrt(a/pi);
         result =[r];
         console.log(result)

    }
    
    else{
    let pi = Math.PI;
    let r= Math.sqrt(a/pi);

    let r2= Math.sqrt(b/pi);

     let r3= Math.sqrt(c/pi);

     let r4= Math.sqrt(d/pi);
  
     let r5= Math.sqrt(e/pi);
     
      result = [r,r2,r3,r4,r5];
     console.log(result);
     
    }
    return radius;
}
/**
 * Testy. Nic nie zmieniaj!!!
 */
let result = radius();
if ((result instanceof Array) && result.length === 0){
    console.log("Test 11 passed!");
} else {
    console.log("Test 11 failed!")
}
result = radius(4);
if (result instanceof Array && result.length === 1 && result[0].toFixed(4) === "1.1284"){
    console.log("Test 12 passed!");
} else {
    console.log("Test 12 failed!")
}
result = radius(4, 2, -2, "a", "2");
if (result instanceof Array 
    && result.length === 5 
    && result[0].toFixed(4) === "1.1284"
    && result[1].toFixed(4) === "0.7979"
    && result[2].toFixed(4) === "NaN"
    && result[3].toFixed(4) === "NaN"
    && result[4].toFixed(4) === "0.7979"
    ) {
    console.log("Test 13 passed!");
} else {
    console.log("Test 13 failed!")
}


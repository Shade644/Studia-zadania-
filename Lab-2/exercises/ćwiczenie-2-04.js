/**
 * Zdefiniuj funkcję, która zwróci najdłuższy wyraz łańcucha
 * Przykład
 * let word = longestWord("Programowanie w JavaScript jest super")
 * w word powinno być słowo "Programowanie"
 * Załóż, że w łańcuchu są słowa oddzielone tylko spacją (brak kropek, przecinków itd.)
 */

function longestWord(sentence){

    let a="";
if (sentence == null){
    return a;
}
else{
    let array = sentence.match(/[a-z]+/gi) || [""];
    let result = array[0];
  
    for(let x = 1 ; x < array.length ; x++)
    {
     if(result.length < array[x].length)
      {
      result = array[x];
      }

    }
    return result;
}

    // let array = sentence.match( /regexp/ ) || [];
    // let longest="";
    // for (let i=0;i<sentence.longest;i++){
    //     if(sentence[i].length >= longest.length){
    //         longest=array[i];
    //     }
    // }
    // return longest;

}

//Testy
if (longestWord("Is this a fox") === "this"){
    console.log("Test 41 passed")
} else {
    console.log("Test 41 failed")
}
if (longestWord("") === ""){
    console.log("Test 42 passed")
} else {
    console.log("Test 42 failed")
}
if (longestWord() === ""){
    console.log("Test 43 passed")
} else {
    console.log("Test 43 failed")
}
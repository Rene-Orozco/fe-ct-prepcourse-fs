/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let vacio=[];
   for (let clave in objeto){
      vacio.push([clave,objeto[clave]])
   }
   return(vacio);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto={};
   for (let i=0; i<string.length; i++){
      if (objeto.hasOwnProperty(string[i])){
         objeto[string[i]]= objeto[string[i]]+1;
      }
      else{
         objeto[string[i]] = 1;
      }
   }
   return (objeto);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayúscula="";
   let minúscula="";
   for (let i=0; i<string.length; i++){
      if (string[i] === string[i].toUpperCase()){
         mayúscula+=(string[i]);
      }
      else if(string[i] === string[i].toLowerCase()){
         minúscula+=(string[i]);
      }
   }
   string=mayúscula+minúscula;
   return (string);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   return frase
   .split(" ")
   .map((palabra) => palabra.split("").reverse().join(""))
   .join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroStr=numero.toString();
   let reverso=numeroStr.split("").reverse().join("");
   let numero2=parseInt(reverso);

   if (numero===numero2){
      return("Es capicua");
   }
   else{
      return ("No es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   /*let separar=string.split("");
   let guardar="";
   for (let i=0; i<separar.length; i++){
      if ((separar[i] === 'a') || (separar[i] === 'b') || (separar[i] === 'c')){
         continue;
      }
      else{
         guardar+=separar[i];
      }
   }
   return (guardar);*/
   return (string.replace(/[abc]/g,""));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((stringA,stringB)=>{
      return (stringA.length-stringB.length)
   })
   return(arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arrayFinal=[];

   array1.forEach(element1 => {
      array2.forEach(element2 => {
         if (element1 === element2){
            arrayFinal.push(element1);
         }
      });
   });
   return (arrayFinal);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

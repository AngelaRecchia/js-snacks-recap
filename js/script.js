/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */

const arr = [2,4,7,3,8,55,7,433,5,77,2,3,4,5,23,4545,7676,4343,11,66,3];
let a = 1;
let z = 3;
console.log(arr.filter((elem, i) => i>= a && i<= z ));


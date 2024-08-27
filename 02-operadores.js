// Aritméticos

let a = 8
let b = 3

console.log(a + b) // adición o suma
console.log(a - b) // resta
console.log(a * b) // multiplicación
console.log(a / b) // división

console.log(a % b) // módulo o restante
console.log(a ** b) // exponente

// De asignación

let x = 4
let y = 7

/* Adición asignación: Suma el valor de la derecha 
   al valor de la variable de la izquierda y retorna el nuevo valor */
console.log(x += 2)

/* Resta asignación: Resta el valor de la derecha 
   del valor de la variable de la izquierda y retorna el nuevo valor */
console.log(x -= 5)

/* Multiplicación asignación: Multiplica el valor de la variable en la izquierda 
   por el valor en la derecha y retorna el nuevo valor */
console.log(y *= 4)

/* División asignación: Divide el valor de la variable en la izquierda 
   por el valor de la derecha y retorna el nuevo valor */
console.log(y /= 3)

// De comparación

let i = 9
let j = "9"

/* Igualdad estricta: Comprueba si los valores izquierdo y derecho 
   son idénticos entre sí en valor y tipo de dato */
console.log(i === j)

/* Igualdad no-estricta: Comprueba si los valores izquierdo y derecho 
   tienen el mismo valor */
console.log(i == j)

/* Desigualdad estricta: Comprueba si los valores izquierdo y derecho 
   no son idénticos entre sí en valor y tipo de dato */
console.log(i !== j)

/* Desigualdad no-estricta: Comprueba si los valores izquierdo y derecho 
   no tienen el mismo valor */
console.log(i != j)

/* Menor que: Comprueba si el valor izquierdo es menor que el derecho */
console.log(i < j)

/* Mayor que: Comprueba si el valor izquierdo es mayor que el derecho */
console.log(i > j)

/* Menor o igual a: Comprueba si el valor izquierdo es menor o igual que el derecho */
console.log(i <= j)

/* Mayor o igual a: Comprueba si el valor izquierdo es mayor o igual que el derecho */
console.log(i >= j)

/* NOTA: Tener presente los valores TRUTHY y FALSY
   Truthy: valores considerados "verdaderos" en un contexto booleano ("false", true, 1, 3.14, etc)
   Falsy: valores considerados "falsos" en un contexto booleano (false, 0, null, undefined, NaN, etc)
*/

// Lógicos

let expOne = 7
let expTwo = 6 

/* AND: */
console.log(expOne < 9 && expTwo >= 5)

/* OR: */
console.log(expOne <= 7 || expTwo >= 9)

/* NOT: */
console.log(!true)
console.log(!false)

console.log(!(expOne < 9 && expTwo >= 5))
console.log(!(expOne <= 7 || expTwo >= 9))


// Operador condicional Ternario

const isCloudy = true

/* condición ? val1 : val2
   Si la condición es verdadera, el operador tiene el valor de val1
   de lo contrario, tiene el valor de val2 
*/
isCloudy ? console.log("Está nublado") : console.log("No está nublado")

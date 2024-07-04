
//Write a function that returns a string with each Write a function that returns a string with each of its words reversed but in the original order. without using a loop


// El mapeo itera sobre cada elemento, split divide en caracteres el método y reverse() lo invierte, devolviendo la referencia a la misma matriz, donde el primer elemento de la matriz pasa a ser el último y el último elemento de la matriz pasa a ser el primero. Join une de nuevo los elementos en una cadena.
function reverse (array) {
    let res= array.map(e => {
        return e.split('').reverse().join();
    });
    return res;
    


}

let array = ['Carolina', 'Serpiente', 'Alfredo'];
console.log(reverse(array));
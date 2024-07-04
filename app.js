// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1,151);
    fetchData(random);
});

/*const input = document.getElementById("space");
 const data = {
    inputPoke: input.value
 }
*/

  

console.log(getRandomInt(1, 151));

const fetchData = async (id) => {
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        
        pintarCard(data);


    } catch (error) {
        console.error(error);
    }
}


/* clone: Se clona el contenido del template y se asigna a la variable clone. El true asegura que se clone todo el árbol de nodos.
El contenido dentro de un template solo se renderiza cuando se clona y se inserta en el documento */
/*  Se crea un DocumentFragment, que es un contenedor ligero y minimalista para manipular el DOM sin impactar el rendimiento.*/

const pintarCard = (pokemon) => {
    console.log(pokemon);

    const flex = document.querySelector(".flex");
    const template = document.querySelector("#template-card").content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default);

    fragment.appendChild(clone);
    flex.appendChild(fragment);


}


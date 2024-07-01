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



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

     // Inserta el contenido del template en el DOM
     insertTemplate();

    

    const random = getRandomInt(1,151); 
    fetchData(random);
/*
    const searchBtn = document.getElementById("cerca");
    console.log('searchBtn:', searchBtn);
    if(searchBtn){
    searchBtn.addEventListener("click", search);
    console.log('Search button found and event listener added');
    } else {
        console.log('Search button not found');
    }
    */
    
});

function insertTemplate() {
    const flex = document.querySelector(".flex");
    const template = document.querySelector("#template-card").content;
    const clone = template.cloneNode(true);
    flex.appendChild(clone);
}



// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }





/*const input = document.getElementById("space");
 const data = {
    inputPoke: input.value
 }
*/

function search(){
    const input = document.querySelector('#space');
    const pok = input.value.trim().toLowerCase();

    if(pok){
        fetchData(pok)
    } else {
        alert("No es un pokemón válido");
    }
    
    
}


function refreshPage(){
    location.reload();

}

console.log(getRandomInt(1, 151));

const fetchData = async (id) => {
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        console.log(data);

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            id: data.id,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            velocidad: data.stats[5].base_stat
        
        }
        
        pintarCard(pokemon);


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

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    clone.querySelector('.card-title').innerHTML = `${pokemon.nombre} <span>ID:${pokemon.id}</span>`;
    clone.querySelector('.card-text').textContent = `${pokemon.experiencia} Experiencia`;
    clone.querySelectorAll('.card-footer-social h6')[0].textContent = `${pokemon.ataque}`;
    clone.querySelectorAll('.card-footer-social h6')[1].textContent = `${pokemon.defensa}`;
    clone.querySelectorAll('.card-footer-social h6')[2].textContent = `${pokemon.velocidad}`;
    
    



    fragment.appendChild(clone);
    flex.innerHTML=''; // Limpiar el contenedor antes de agregar la nueva tarjeta
    flex.appendChild(fragment);


}


document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1,151);
    fetchData(random);
})

const input = document.getElementById("space");
 const data = {
    inputPoke: input.value
 }

// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  

console.log(getRandomInt(1, 151));

const fetchData = async (id) => {
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json()
        console.log(data);


    } catch (error) {
        console.error(err);
    }
}


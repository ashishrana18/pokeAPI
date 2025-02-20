// const searchPokemon = async () => {
//   const input = document.querySelector("input").value.trim().toLowerCase();
//   const img = document.querySelector("img");
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
//     if (!response.ok) {
//       throw new Error("Pokemon not found");
//     }

//     const data = await response.json();
//     img.style.display = "block";
//     img.src = data.sprites.front_default;
//   } catch (error) {
//     console.error(error);
//   }
// };

const searchPokemon = async () => {
  const input = document.querySelector("input").value.trim().toLowerCase();
  const imgContainer = document.getElementById("imgContainer");
  const pokeName = document.getElementById("pokeName");

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await response.json();
    pokeName.textContent = data.name.toUpperCase();
    imgContainer.innerHTML = "";

    const imageUrls = [
      data.sprites.front_default,
      data.sprites.back_default,
      data.sprites.front_shiny,
      data.sprites.back_shiny
    ];

    imageUrls.forEach((src) => {
      if (src) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = data.name;
        img.classList.add("pokeImage");
        imgContainer.appendChild(img);
      }
    });
  } catch (error) {
    console.error(error);
    pokeName.textContent = "Pokemon not found!";
    imgContainer.innerHTML = "";
  }
};

document.querySelector("input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchPokemon();
  }
});

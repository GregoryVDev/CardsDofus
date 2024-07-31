import styles from "./PokemonCard.module.css";

export function PokemonCard({ props }) {
  console.log(props);
  const pokemon = pokemonList[1];

  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className={styles.cardImg}
        />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

const pokemonList = [
  {
    name: "squirtle",
    imgSrc: "https://solomonk.fr/img/classes/CRA.png",
  },
  {
    name: "mew",
  },
];

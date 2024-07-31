import styles from "./PokemonCard.module.css";

export function PokemonCard() {
  return (
    <figure className={styles.card}>
      <img
        src="https://solomonk.fr/img/classes/CRA.png"
        alt="Crâ"
        className={styles.cardImg}
      />
      <figcaption>squirtle</figcaption>
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

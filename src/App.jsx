import React from "react";
import { DofusCards } from "./components/DofusCards";
import "./App.css";
import { Title } from "./components/Title";
const dofusList = [
  {
    container: "card-cra",
    name: "Crâ",
    imgSrc: "https://solomonk.fr/img/classes/CRA.png",
    description:
      "Les Crâs sont des Archers aussi fiers que précis ! Ils font des alliés précieux contre les adeptes de la mêlée franche. Restant à distance, décochant leurs traits empennés dans le moindre orifice laissé sans surveillance, ils s'y entendent pour faire des dégâts !",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-eca",
    name: "Ecaflip",
    imgSrc: "https://solomonk.fr/img/classes/ECAFLIP.png",
    description:
      "Les Ecaflips sont des Guerriers joueurs qui se fourrent dans les endroits où l'on peut gagner gros, et perdre beaucoup... Un Ecaflip bien dans sa peau joue sans arrêt, pour tout et pour rien. Mais attention, il prend le jeu très au sérieux et ira même jusqu'à jouer sa vie sur un lancer de dés pour gagner un combat...",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-eni",
    name: "Eniripsa",
    imgSrc: "https://solomonk.fr/img/classes/ENIRIPSA.png",
    description:
      "Les Eniripsas sont des Soigneurs qui guérissent d'un simple Mot. Ils les utilisent surtout pour soigner leurs alliés, mais parfois aussi pour blesser leurs ennemis. Parmi eux, certains sont même devenus chasseurs de mots, arpenteurs du verbe, ou rôdeurs des langues oubliées.",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-enu",
    name: "Enutrof",
    imgSrc: "https://solomonk.fr/img/classes/ENUTROF.png",
    description:
      "Les Enutrofs sont des Chasseurs de trésor invétérés ! Ils sont intéressés par toute denrée, objet, ou créature dont ils pourront tirer des kamas. La première chose que fait un Enutrof lorsqu'il rencontre un autre aventurier, c'est de le soupeser du regard. C'est vrai : aux yeux d'un Enutrof, un aventurier, c'est une créature chargée de denrées, et bardée d'objets... revendables !",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-feca",
    name: "Féca",
    imgSrc: "https://solomonk.fr/img/classes/FECA.png",
    description:
      "Les Fecas sont des Protecteurs loyaux. Ils sont appréciés dans les groupes d'aventuriers à cause de leurs pouvoirs de protection, mais aussi parce qu'ils manient le bâton comme pas deux. Des générations de Fécas s'enorgueillissent d'être des protecteurs hors pair à qui les Sages ont confié les objets les plus précieux qui soient, en toute confiance.",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-iop",
    name: "Iop",
    imgSrc: "https://solomonk.fr/img/classes/IOP.png",
    description:
      "Les Iops sont des Guerriers fonceurs et sans reproches ! Une chose est sûre : les Iops savent faire parler les armes. D'ailleurs, verser le premier sang au moins une fois par jour est pour eux un signe de bonne santé. Leur tempérament impétueux fait des Iops des paladins de l'extrême, capables du meilleur... comme du pire !",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-osa",
    name: "Osamodas",
    imgSrc: "https://solomonk.fr/img/classes/OSAMODAS.png",
    description:
      "Les Osamodas sont des Invocateurs nés ! Ils ont le pouvoir d'invoquer des créatures et sont de remarquables dresseurs. Une rumeur prétend qu'ils taillent leurs vêtements dans la peau de leurs ennemis, mais allez donc leur demander ce qu'il en est... Vous verrez bien si vous terminez votre vie sous la forme d'une botte ou d'un bonnet fourré.",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-panda",
    name: "Pandawa",
    imgSrc: "https://solomonk.fr/img/classes/PANDAWA.png",
    description:
      "Les Pandawas sont des Guerriers porteurs qui savent faire des folies de leurs corps ! Ils peuvent même en faire avec le corps des autres... En effet, le Pandawa sait soulever ses alliés pour les protéger. Quant à ses ennemis, il les enverra dans les airs pour les blesser !",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-sacri",
    name: "Sacrieur",
    imgSrc: "https://solomonk.fr/img/classes/SACRIEUR.png",
    description:
      "Les Sacrieurs sont des Berzerkers qui décuplent leurs forces dès qu'ils sont frappés ! N'ayant pas peur de recevoir des coups, ni de s'exposer aux blessures, ils seront souvent en première ligne, et donc très apprécié par les groupes d'aventuriers ! Le Sacrieur est vraiment le compagnon idéal pour vos longues soirées guerrières...",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-sadi",
    name: "Sadida",
    imgSrc: "https://solomonk.fr/img/classes/SADIDA.png",
    description:
      "Les Sadidas sont des Invocateurs qui fabriquent des onguents et des poisons redoutables ! Apprivoiser les Ronces pour en faire des armes terrifiantes, confectionner des poupées de guerre et de soins, voilà qui satisfait tout disciple Sadida digne de ce nom.",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-sram",
    name: "Sram",
    imgSrc: "https://solomonk.fr/img/classes/SRAM.png",
    description:
      "Les Srams sont des Assassins qui aiment les bourses, rebondies de préférence. Trousser les pans d'une tunique, tâter le fond d'une poche, faire preuve de doigté, palper enfin des bijoux tant convoités, poser un piège mortel, voilà la vie d'un disciple de Sram !",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
  {
    container: "card-xel",
    name: "Xelor",
    imgSrc: "https://solomonk.fr/img/classes/XELOR.png",
    description:
      "Les Xélors sont des Mages qui maîtrisent le temps et toutes les mécaniques qui donnent l'heure : carillons, horloges, et pendules leur obéissent au doigt et à l'oeil. Les Xélors jouent donc avec le temps pour ralentir un ennemi ou se téléporter où bon leur semble.",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
  },
];

export function App() {
  return (
    <>
      <div className="title-container">
        <Title titre="Le monde des douzes" />
      </div>
      <img
        src="https://rpdofus.wordpress.com/wp-content/uploads/2016/11/dofus-emeraude.png"
        alt="Dofus"
        className="dofus"
      />
      <div className="containerDofus">
        {dofusList.map((dofus, index) => (
          <DofusCards key={index} dofus={dofus} />
        ))}
      </div>
    </>
  );
}

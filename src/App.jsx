import React from "react";
import { DofusCards } from "./components/DofusCards";
import "./App.css";
import { Title } from "./components/Title";
import { MonstresCards } from "./components/MonstresCards";

const dofusList = [
  {
    container: "card-cra",
    name: "Crâ",
    imgSrc: "https://solomonk.fr/img/classes/CRA.png",
    description:
      "Les Crâs sont des Archers aussi fiers que précis ! Ils font des alliés précieux contre les adeptes de la mêlée franche. Restant à distance, décochant leurs traits empennés dans le moindre orifice laissé sans surveillance, ils s'y entendent pour faire des dégâts ! Ce n'est pas n'importe quel dégâts, ce sont des très gros dégâts !",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3851,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 221,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 521,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 350,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 221,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 420,
    weapon1: "https://solomonk.fr/img/weapons/bow-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/dagger-orange.svg",
    sort1: "https://solomonk.fr/img/spells/180.svg",
    sort2: "https://solomonk.fr/img/spells/179.svg",
    sort3: "https://solomonk.fr/img/spells/178.svg",
    sort4: "https://solomonk.fr/img/spells/176.svg",
    sort5: "https://solomonk.fr/img/spells/166.svg",
    sort6: "    https://solomonk.fr/img/spells/171.svg",
  },
  {
    container: "card-eca",
    name: "Ecaflip",
    imgSrc: "https://solomonk.fr/img/classes/ECAFLIP.png",
    description:
      "Les Ecaflips sont des Guerriers joueurs qui se fourrent dans les endroits où l'on peut gagner gros, et perdre beaucoup... Un Ecaflip bien dans sa peau joue sans arrêt, pour tout et pour rien. Mais attention, il prend le jeu très au sérieux et ira même jusqu'à jouer sa vie sur un lancer de dés pour gagner un combat...",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3753,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 206,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 511,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 231,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 221,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 866,
    weapon1: "https://solomonk.fr/img/weapons/sword-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/dagger-orange.svg",
    sort1: "https://solomonk.fr/img/spells/119.svg",
    sort2: "https://solomonk.fr/img/spells/120.svg",
    sort3: "https://solomonk.fr/img/spells/114.svg",
    sort4: "https://solomonk.fr/img/spells/115.svg",
    sort5: "https://solomonk.fr/img/spells/108.svg",
    sort6: "https://solomonk.fr/img/spells/109.svg",
  },
  {
    container: "card-eni",
    name: "Eniripsa",
    imgSrc: "https://solomonk.fr/img/classes/ENIRIPSA.png",
    description:
      "Les Eniripsas sont des Soigneurs qui guérissent d'un simple Mot. Ils les utilisent surtout pour soigner leurs alliés, mais parfois aussi pour blesser leurs ennemis. Parmi eux, certains sont même devenus chasseurs de mots, arpenteurs du verbe, ou rôdeurs des langues oubliées. Ils feront tout ce qu'ils peuvent pour vous sauver.",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3803,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 151,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 456,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 560,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 570,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 221,
    weapon1: "https://solomonk.fr/img/weapons/wand-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/staff-orange.svg",
    sort1: "https://solomonk.fr/img/spells/125.svg",
    sort2: "https://solomonk.fr/img/spells/139.svg",
    sort3: "https://solomonk.fr/img/spells/122.svg",
    sort4: "https://solomonk.fr/img/spells/127.svg",
    sort5: "https://solomonk.fr/img/spells/129.svg",
    sort6: "https://solomonk.fr/img/spells/140.svg",
  },
  {
    container: "card-enu",
    name: "Enutrof",
    imgSrc: "https://solomonk.fr/img/classes/ENUTROF.png",
    description:
      "Les Enutrofs sont des Chasseurs de trésor invétérés ! Ils sont intéressés par toute denrée, objet, ou créature dont ils pourront tirer de l'argent. La première chose que fait un Enutrof lorsqu'il rencontre un autre aventurier, c'est de le soupeser du regard. C'est vrai : aux yeux d'un Enutrof, un aventurier, c'est une créature chargée et bardée d'objets... revendables !",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3701,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 555,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 510,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 201,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 221,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 271,
    weapon1: "https://solomonk.fr/img/weapons/shovel-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/hammer-orange.svg",
    sort1: "https://solomonk.fr/img/spells/51.svg",
    sort2: "https://solomonk.fr/img/spells/52.svg",
    sort3: "https://solomonk.fr/img/spells/58.svg",
    sort4: "https://solomonk.fr/img/spells/49.svg",
    sort5: "https://solomonk.fr/img/spells/41.svg",
    sort6: "https://solomonk.fr/img/spells/56.svg",
  },
  {
    container: "card-feca",
    name: "Féca",
    imgSrc: "https://solomonk.fr/img/classes/FECA.png",
    description:
      "Les Fecas sont des Protecteurs loyaux. Ils sont appréciés dans les groupes d'aventuriers à cause de leurs pouvoirs de protection, mais aussi parce qu'ils manient le bâton comme pas deux. Des générations de Fécas s'enorgueillissent d'être des protecteurs hors pair à qui les Sages ont confié les objets les plus précieux qui soient, en toute confiance.",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3951,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 301,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 476,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 201,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 711,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 256,
    weapon1: "https://solomonk.fr/img/weapons/staff-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/wand-orange.svg",
    sort1: "https://solomonk.fr/img/spells/9.svg",
    sort2: "https://solomonk.fr/img/spells/7.svg",
    sort3: "https://solomonk.fr/img/spells/10.svg",
    sort4: "https://solomonk.fr/img/spells/6.svg",
    sort5: "https://solomonk.fr/img/spells/4.svg",
    sort6: "https://solomonk.fr/img/spells/11.svg",
  },
  {
    container: "card-iop",
    name: "Iop",
    imgSrc: "https://solomonk.fr/img/classes/IOP.png",
    description:
      "Les Iops sont des Guerriers fonceurs et sans reproches ! Une chose est sûre : les Iops savent faire parler les armes. D'ailleurs, verser le premier sang au moins une fois par jour est pour eux un signe de bonne santé. Leur tempérament impétueux fait des Iops des paladins de l'extrême, capables du meilleur... comme du pire !",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 4148,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 151,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 521,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 181,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 221,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 690,
    weapon1: "https://solomonk.fr/img/weapons/sword-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/hammer-orange.svg",
    sort1: "https://solomonk.fr/img/spells/144.svg",
    sort2: "https://solomonk.fr/img/spells/159.svg",
    sort3: "https://solomonk.fr/img/spells/156.svg",
    sort4: "https://solomonk.fr/img/spells/157.svg",
    sort5: "https://solomonk.fr/img/spells/143.svg",
    sort6: "https://solomonk.fr/img/spells/158.svg",
  },
  {
    container: "card-osa",
    name: "Osamodas",
    imgSrc: "https://solomonk.fr/img/classes/OSAMODAS.png",
    description:
      "Les Osamodas sont des Invocateurs nés ! Ils ont le pouvoir d'invoquer des créatures et sont de remarquables dresseurs. Une rumeur prétend qu'ils taillent leurs vêtements dans la peau de leurs ennemis, mais allez donc leur demander ce qu'il en est... Vous verrez bien si vous terminez votre vie sous la forme d'une botte.",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 4175,
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 370,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 501,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 326,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 320,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 221,
    weapon1: "https://solomonk.fr/img/weapons/hammer-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/staff-orange.svg",
    sort1: "https://solomonk.fr/img/spells/34.svg",
    sort2: "https://solomonk.fr/img/spells/28.svg",
    sort3: "https://solomonk.fr/img/spells/31.svg",
    sort4: "https://solomonk.fr/img/spells/36.svg",
    sort5: "https://solomonk.fr/img/spells/40.svg",
    sort6: "https://solomonk.fr/img/spells/27.svg",
  },
  {
    container: "card-panda",
    name: "Pandawa",
    imgSrc: "https://solomonk.fr/img/classes/PANDAWA.png",
    description:
      "Les Pandawas sont des Guerriers porteurs qui savent faire des folies de leurs corps ! Ils peuvent même en faire avec le corps des autres... En effet, le Pandawa sait soulever ses alliés pour les protéger. Quant à ses ennemis, il les enverra dans les airs pour les blesser ! Un Pandawa bourré, c'est un Pandawa heureux",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3715,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 201,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 491,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 176,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 271,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 866,
    weapon1: "https://solomonk.fr/img/weapons/axe-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/staff-orange.svg",
    sort1: "https://solomonk.fr/img/spells/686.svg",
    sort2: "https://solomonk.fr/img/spells/705.svg",
    sort3: "https://solomonk.fr/img/spells/696.svg",
    sort4: "https://solomonk.fr/img/spells/700.svg",
    sort5: "https://solomonk.fr/img/spells/703.svg",
    sort6: "https://solomonk.fr/img/spells/702.svg",
  },
  {
    container: "card-sacri",
    name: "Sacrieur",
    imgSrc: "https://solomonk.fr/img/classes/SACRIEUR.png",
    description:
      "Les Sacrieurs sont des Berzerkers qui décuplent leurs forces dès qu'ils sont frappés ! N'ayant pas peur de recevoir des coups, ni de s'exposer aux blessures, ils seront souvent en première ligne, et donc très apprécié par les groupes d'aventuriers ! Le Sacrieur est vraiment le compagnon idéal pour vos longues soirées guerrières...",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 5291,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 151,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 456,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 461,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 471,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 221,
    weapon1: "https://solomonk.fr/img/weapons/sword.svg",
    weapon2: "https://solomonk.fr/img/weapons/dagger.svg",
    sort1: "https://solomonk.fr/img/spells/441.svg",
    sort2: "https://solomonk.fr/img/spells/448.svg",
    sort3: "https://solomonk.fr/img/spells/435.svg",
    sort4: "https://solomonk.fr/img/spells/442.svg",
    sort5: "https://solomonk.fr/img/spells/446.svg",
    sort6: "https://solomonk.fr/img/spells/440.svg",
  },
  {
    container: "card-sadi",
    name: "Sadida",
    imgSrc: "https://solomonk.fr/img/classes/SADIDA.png",
    description:
      "Les Sadidas sont des Invocateurs qui fabriquent des onguents et des poisons redoutables ! Apprivoiser les Ronces pour en faire des armes terrifiantes, confectionner des poupées de guerre et de soins, voilà qui satisfait tout disciple Sadida digne de ce nom.",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3830,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 186,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 591,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 361,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 430,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 320,
    weapon1: "https://solomonk.fr/img/weapons/staff-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/wand-orange.svg",
    sort1: "https://solomonk.fr/img/spells/194.svg",
    sort2: "https://solomonk.fr/img/spells/182.svg",
    sort3: "https://solomonk.fr/img/spells/185.svg",
    sort4: "https://solomonk.fr/img/spells/184.svg",
    sort5: "https://solomonk.fr/img/spells/187.svg",
    sort6: "https://solomonk.fr/img/spells/200.svg",
  },
  {
    container: "card-sram",
    name: "Sram",
    imgSrc: "https://solomonk.fr/img/classes/SRAM.png",
    description:
      "Les Srams sont des Assassins qui aiment les bourses, rebondies de préférence. Trousser les pans d'une tunique, tâter le fond d'une poche, faire preuve de doigté, palper enfin des bijoux tant convoités, poser un piège mortel, voilà la vie d'un disciple de Sram !",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3503,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 201,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 471,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 509,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 221,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 590,
    weapon1: "https://solomonk.fr/img/weapons/dagger-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/bow-orange.svg",
    sort1: "https://solomonk.fr/img/spells/76.svg",
    sort2: "https://solomonk.fr/img/spells/65.svg",
    sort3: "https://solomonk.fr/img/spells/70.svg",
    sort4: "https://solomonk.fr/img/spells/72.svg",
    sort5: "https://solomonk.fr/img/spells/80.svg",
    sort6: "https://solomonk.fr/img/spells/71.svg",
  },
  {
    container: "card-xel",
    name: "Xelor",
    imgSrc: "https://solomonk.fr/img/classes/XELOR.png",
    description:
      "Les Xélors sont des Mages qui maîtrisent le temps et toutes les mécaniques qui donnent l'heure : carillons, horloges, et pendules leur obéissent au doigt et à l'oeil. Les Xélors jouent donc avec le temps pour ralentir un ennemi ou se téléporter où bon leur semble.",
    vitalite: "https://solomonk.fr/img/icons/Vita.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 3720,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 221,
    sagesse: "https://solomonk.fr/img/icons/Wisdom.svg",
    sasanum: 661,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 356,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 371,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 221,
    weapon1: "https://solomonk.fr/img/weapons/hammer-green.svg",
    weapon2: "https://solomonk.fr/img/weapons/wand-orange.svg",
    sort1: "https://solomonk.fr/img/spells/82.svg",
    sort2: "https://solomonk.fr/img/spells/95.svg",
    sort3: "https://solomonk.fr/img/spells/91.svg",
    sort4: "https://solomonk.fr/img/spells/92.svg",
    sort5: "https://solomonk.fr/img/spells/84.svg",
    sort6: "https://solomonk.fr/img/spells/88.svg",
  },
];

const monstreList = [
  {
    container: "card-krala",
    name: "Krala Géant",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1635.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 4600,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 2000,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 2000,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 2000,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 2000,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "900%",
  },
  {
    container: "card-grozilla",
    name: "Grozilla",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1503.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 100000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 5000,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 6000,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 5000,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 5000,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "50%",
  },
  {
    container: "card-grasmera",
    name: "Grasmera",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1508.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 100000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 5000,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 6000,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 5000,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 5000,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "50%",
  },
  {
    container: "card-ily",
    name: "Ilyzaelle",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/8036.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 13000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 300,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 1200,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 300,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 300,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "33%",
  },
  {
    container: "card-fan",
    name: "Preskapwal",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1292.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 16000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 0,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 0,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 0,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 0,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "25%",
  },
  {
    container: "card-qutan",
    name: "Qu'tan",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1665.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 13000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 300,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 300,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 300,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 300,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "35%",
  },
  {
    container: "card-ougah",
    name: "Ougah",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1258.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 16000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 800,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 800,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 800,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 800,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "33%",
  },

  {
    container: "card-croca",
    name: "Crocabulia",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1451.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 10000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 9999,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 300,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 300,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 20,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "20%",
  },

  {
    container: "card-kimbo",
    name: "Kimbo",
    imgSrc: "https://solomonk.fr/img/monsters/artworks/1623.svg",
    vita: "https://solomonk.fr/img/icons/Vita.svg",
    vitanum: 9000,
    chance: "https://solomonk.fr/img/icons/WaterBonus.svg",
    eaunum: 9999,
    agil: "https://solomonk.fr/img/icons/AirBonus.svg",
    aginum: 650,
    intel: "https://solomonk.fr/img/icons/FireBonus.svg",
    feunum: 600,
    force: "https://solomonk.fr/img/icons/EarthBonus.svg",
    terrenum: 600,
    imgResSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/U%2B262F.svg/180px-U%2B262F.svg.png",
    neutrenumb: "400%",
  },
];

export function App() {
  return (
    <>
      <img src="../public/dofus.png" alt="Dofus" className="oeufs" />
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
      <div className="title-container">
        <Title titre="Le monde des monstres" />
      </div>
      <img
        src="https://www.dofuspourlesnoobs.com/uploads/1/3/0/1/13010384/custom_themes/586567114324766674/files/tutorials/dofus/illus/vulbis.png"
        alt="Dofus"
        className="dofus"
      />
      <div className="containerDofus">
        {monstreList.map((mob, index) => (
          <MonstresCards key={index} mob={mob} />
        ))}
      </div>
      <img src="../public/dofus.png" alt="Dofus" className="oeufs" />
    </>
  );
}

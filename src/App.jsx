import React from "react";
import { DofusCards } from "./components/DofusCards";
import "./App.css";
import { Title } from "./components/Title";
const dofusList = [
  {
    container: "card-cra",
    name: "Crâ",
    imgSrc: "https://solomonk.fr/img/classes/CRA.png",
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

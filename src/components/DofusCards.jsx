import { Title } from "./Title";

export const DofusCards = ({ dofus }) => {
  return (
    <>
      <div className="containerDofus">
        <figure className={dofus.container}>
          {dofus.imgSrc ? (
            <img src={dofus.imgSrc} alt={dofus.name} className="card-img" />
          ) : (
            <p>???</p>
          )}
          <figcaption>
            <h2>{dofus.name}</h2>
            <div className="content">
              <p>{dofus.description}</p>
            </div>
            <div className="containerCara">
              <div className="stats">
                <img src={dofus.vita} alt="Vita" className="img-element" />
                <div className="number">
                  <span>{dofus.vitanum}</span>
                </div>
              </div>
              <div className="stats">
                <img
                  src={dofus.sagesse}
                  alt="Sagesse"
                  className="img-element"
                />
                <div className="number">
                  <span>{dofus.sasanum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={dofus.chance} alt="Eau" className="img-element" />
                <div className="number">
                  <span>{dofus.eaunum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={dofus.agil} alt="Air" className="img-element" />
                <div className="number">
                  <span>{dofus.aginum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={dofus.intel} alt="Feu" className="img-element" />
                <div className="number">
                  <span>{dofus.feunum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={dofus.force} alt="Force" className="img-element" />
                <div className="number">
                  <span>{dofus.terrenum}</span>
                </div>
              </div>
            </div>
            <div className="title-container">
              <h3>Armes de prédilection</h3>
              <div className="container-weapon">
                <img src={dofus.weapon1} alt="Weapon" className="weapon" />
                <img src={dofus.weapon2} alt="Weapon" className="weapon" />
              </div>
            </div>
            <div className="title-container">
              <h3>Sorts</h3>
            </div>
            <div className="sorts">
              <img src={dofus.sort1} alt="Sort" />
              <img src={dofus.sort2} alt="Sort" />
              <img src={dofus.sort3} alt="Sort" />
              <img src={dofus.sort4} alt="Sort" />
              <img src={dofus.sort5} alt="Sort" />
              <img src={dofus.sort6} alt="Sort" />
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

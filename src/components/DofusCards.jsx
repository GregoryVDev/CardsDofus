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
              <img src={dofus.vita} alt="Vita" className="img-element" />
              <img src={dofus.chance} alt="Eau" className="img-element" />
              <img src={dofus.agil} alt="Air" className="img-element" />
              <img src={dofus.intel} alt="Feu" className="img-element" />
              <img src={dofus.force} alt="Force" className="img-element" />
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

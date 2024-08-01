import React from "react";

export const MonstresCards = ({ mob }) => {
  return (
    <>
      <div className="containerDofus">
        <figure className={mob.container}>
          {mob.imgSrc ? (
            <img src={mob.imgSrc} alt={mob.name} className="card-img" />
          ) : (
            <p>???</p>
          )}
          <figcaption>
            <h2>{mob.name}</h2>
            <div className="containerCara">
              <div className="stats">
                <img src={mob.vita} alt="Vita" className="img-element" />
                <div className="number">
                  <span>{mob.vitanum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={mob.chance} alt="Eau" className="img-element" />
                <div className="number">
                  <span>{mob.eaunum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={mob.agil} alt="Air" className="img-element" />
                <div className="number">
                  <span>{mob.aginum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={mob.intel} alt="Feu" className="img-element" />
                <div className="number">
                  <span>{mob.feunum}</span>
                </div>
              </div>
              <div className="stats">
                <img src={mob.force} alt="Force" className="img-element" />
                <div className="number">
                  <span>{mob.terrenum}</span>
                </div>
                <div className="stats">
                  <img
                    src={mob.resisneutre}
                    alt="Resistances"
                    className="img-element"
                  />
                  <div className="number">
                    <span>{mob.neutrenumb}</span>
                  </div>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

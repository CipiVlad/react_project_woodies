import React from "react";
import "../scss/CategoriesDetail.scss";
import { useParams, useLocation } from "react-router-dom";

const CategoriesDetail = () => {
  let { uniqueId } = useParams();

  //   Daten für Ausgabe ziehen
  const location = useLocation();
  let data = location.state;

  console.log(uniqueId);
  //   console.log(data);

  //einzelnes Objekt rausfiltern

  return (
    <div className="">
      {data
        .filter((elt) => elt.id === uniqueId)
        .map((elt, index) => (
          <div key={index} className="product_card_child_grid_detail">
            <h1>{elt.category}</h1>
            {console.log(`${elt.img}`)}
            <img src={`/${elt.img}`} alt="" width="400" />
            <h2>{elt.price}</h2>
            <p>{elt.description}</p>
          </div>
        ))}
    </div>
  );
};

export default CategoriesDetail;

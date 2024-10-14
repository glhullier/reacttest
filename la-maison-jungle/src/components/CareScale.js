import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};
//Créer une alerte qui se déclenche au clic sur le composant CareScale qui devra dire :
//"Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage" en fonction de la donnée correspondante ;
//s'il s'agit d'un composant CareScale de type "water" ou de type "light".

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;

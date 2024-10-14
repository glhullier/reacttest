import CareScale from "./CareScale";
import "../styles/PlantItem.css";

//Vous allez créer un composant PlantItem qui sera un composant enfant de ShoppingList.

function PlantItem({ id, cover, name, water, light }) {
  //PlantItem prend les 5 props
  return (
    //Les props name et cover sont directement utilisées
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;

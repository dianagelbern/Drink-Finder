import React from "react";
import { Image, Modal } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

export default function DrinkModal() {
  const { modal, hanldeModalClick, recipe, loading } = useDrink();
    const showIngredients = () => {
        let ingredients = []
        for(let i = 1; i < 16; i++){
            if(recipe[`strIngredient${i}`]){
                ingredients.push(
                    <li key={recipe[`strIngredient${i}`]}>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }
  return (
    !loading && (
        <Modal show={modal} onHide={hanldeModalClick}>
      <Image src={recipe.strDrinkThumb} alt={recipe.strDrink} />
      <Modal.Header>
        <Modal.Title>{recipe.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
            <h2>Instructions</h2>
            {recipe.strInstructions}
            <h2>Ingredients</h2>
            {showIngredients()}
        </div>
      </Modal.Body>
    </Modal>
    )
  );
}

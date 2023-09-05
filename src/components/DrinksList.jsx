import { Row } from "react-bootstrap"
import useDrink from "../hooks/useDrink"
import Drink from "./Drink"


export default function DrinksList() {

    const {drinks} = useDrink()

  return (
    <Row className="mt-5">
        {drinks.map(drink => (
            <Drink
            key={drink.idDrink}
            drink={drink}
            />
        ))}
    </Row>
  )
}

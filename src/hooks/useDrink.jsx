import DrinkContext from "../contects/DrinkProvider"
import { useContext } from "react"

const useDrink = () => {
    return useContext(DrinkContext)
}

export default useDrink
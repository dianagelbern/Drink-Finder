import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinkContext = createContext()

const DrinkProvider = ({children}) => {
    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getRecipe = async () => {
            if(!drinkId)return
            try{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

                const {data} = await axios(url)
                setRecipe(data.drinks[0])
            }catch(error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getRecipe()
    }, [drinkId])


    const getDrinks = async datos => {
        try{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`
        
            const {data} = await axios(url)
            setDrinks(data.drinks)
        }catch(error) {
            console.log(error)
        }
    }

    const hanldeModalClick = () => {
        setModal(!modal)
    }

    const handleDrinkIdClick = id => {
        setDrinkId(id)
    }

    return (
        <DrinkContext.Provider
        value={{
            getDrinks,
            drinks,
            hanldeModalClick,
            modal,
            handleDrinkIdClick,
            recipe,
            loading
        }}>
            {children}
        </DrinkContext.Provider>
    )
}


export {
    DrinkProvider
}

export default DrinkContext
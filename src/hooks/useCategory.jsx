import CategoryContext from "../contects/CategoryProvider"
import { useContext } from "react"

const useCategory = () => {
    return useContext(CategoryContext)
}

export default useCategory
import { useEffect, useState } from "react"
import {
  getColor,
  getFeatured,
  getMaterial,
  getProducts,
} from "../utils/apiCalls"
import Tags from "./Tags"

const Sidebar = () => {
  const [products, setProducts] = useState("")
  const [featured, setFeatured] = useState("")
  const [material, setMaterial] = useState("")
  const [color, setColor] = useState("")
  const filterProducts = () => {
    if (products?.length > 0 && featured?.length > 0) {
      return products?.filter((prod) =>
        featured?.map((fet) => fet.productId).includes(prod.id)
      )
    }
  }

  useEffect(() => {
    getProducts((data) => setProducts(data))
    getFeatured((data) => setFeatured(data))
    getMaterial((data) => setMaterial(data))
    getColor((data) => setColor(data))
  }, [])
  return (
    <>
      <Tags title='Generic' data={filterProducts()} />
      <Tags title='Material' data={material} />
      <Tags title='Color' data={color} />
    </>
  )
}

export default Sidebar

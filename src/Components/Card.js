import { useEffect, useState } from "react"
import { getColor, getMaterial } from "../utils/apiCalls"
import { cart } from "../utils/Reducer/shopSlice"
import { useDispatch } from "react-redux"

const Card = ({ data }) => {
  const [color, setColor] = useState("")
  const [material, setMaterial] = useState("")
  const [addToCart, setAddToCart] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    getColor((data) => setColor(data))
    getMaterial((data) => setMaterial(data))
  }, [])
  const increaseCartQuantity = (id)=>{
    setAddToCart(id)
    dispatch(cart(id))
    console.log(addToCart)
}
  return (
    <>
      <div class='card m-5 text-start' style={{ width: "23rem" }}>
        <img src={data.image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{data.name}</h5>
          <span className='text-uppercase fw-bold'>
            {color?.length > 0
              ? color?.map((colorObj) => {
                  return data?.materialId === colorObj?.id && colorObj?.name
                })
              : "Black"}
          </span>
          <span className='text-uppercase ms-3'>
            {material?.length > 0
              ? material.map((materialObj) => {
                  return data?.materialId === materialObj?.id && materialObj?.name
                })
              : "Material"}
          </span>
          <div>INR {data?.price}.00</div>
          <button className="btn btn-light" onClick={()=>increaseCartQuantity(data.id)}>Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default Card

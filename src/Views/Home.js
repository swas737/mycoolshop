import { useEffect, useState } from "react"
import Sidebar from "../Components/Sidebar"
import Card from "../Components/Card"
import { getFeatured, getProducts } from "../utils/apiCalls"
import "./index.css"
import { useDispatch, useSelector } from "react-redux"
import { products as PRODUCT,features as FEATURE } from "../utils/Reducer/shopSlice"
import { FaShoppingCart } from 'react-icons/fa'

const Home = () => {
  const [products, setProducts] = useState("")
  const [featured, setFeatured] = useState("")
  const [selectType, setSelectType] = useState("Product")
  const showCart = useSelector(state => state.shop.cart)
const dispatch = useDispatch()
  useEffect(() => {
    getProducts((data) => setProducts(data))
    getFeatured((data) => setFeatured(data))
  }, [])
  dispatch(PRODUCT(products))
  dispatch(FEATURE(featured))
  const filterProducts = () => {
    if (products?.length > 0 && featured?.length > 0) {
      return products?.filter((prod) =>
        featured?.map((fet) => fet?.productId).includes(prod.id)
      )
    }
  }
  return (
    <>
      <div
        className='d-flex fw-bolder justify-content-center align-items-center fs-4'
        style={{ height: 86 }}
      >
        MYCOOLSHOP.COM
      </div>
      <div className='header d-flex justify-content-between'>
       <div>
       <span
          className={
            selectType === "Product"
              ? "ms-5 fw-bold mousePointer"
              : "ms-5 mousePointer"
          }
          onClick={() => setSelectType("Product")}
        >
          All Products
        </span>
        <span
          className={
            selectType === "featuredProduct"
              ? "ms-5 fw-bold mousePointer"
              : "ms-5 mousePointer"
          }
          onClick={() => setSelectType("featuredProduct")}
        >
          Featured Products
        </span>
       </div>
      <div>
      <FaShoppingCart size={25} />
      <span className='pl-2'>{showCart.length}</span>
      </div>
      </div>
      <div className='row'>
        <div className='col-2'>
          <Sidebar />
        </div>
        <div className='col-10 d-flex flex-wrap'>
          {selectType === "Product" && (
            <>
              {products?.length > 0
                ? products?.map((product) => {
                    return <Card data={product} />
                  })
                : "Content not Avilable"}
            </>
          )}
          {selectType === "featuredProduct" && (
            <>
              {filterProducts()?.length > 0
                ? filterProducts()?.map((obj) => {
                    return <Card data={obj} />
                  })
                : "Content Not avilable"}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Home

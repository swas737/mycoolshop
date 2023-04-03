import axios from "axios"
import {
  COLORS_API,
  FEATURED_API,
  MATERIAL_API,
  PRODUCTS_API,
  TOKEN,
} from "./constant"

const config = {
  headers: { Authorization: `Bearer ${TOKEN}` },
}

export const getProducts = (setProducts) => {
  axios
    .get(PRODUCTS_API, {
      ...config,
    })
    .then((res) => {
      setProducts(res.data.products)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getFeatured = (setFeatured) => {
  axios
    .get(FEATURED_API, {
      ...config,
    })
    .then((res) => {
      console.log("res", res.data.featured)
      setFeatured(res.data.featured)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getMaterial = (setMaterial) => {
  axios
    .get(MATERIAL_API, {
      ...config,
    })
    .then((res) => {
      console.log("res", res.data.material)
      setMaterial(res.data.material)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getColor = (setColor) => {
  axios
    .get(COLORS_API, {
      ...config,
    })
    .then((res) => {
      console.log("res", res.data)
      setColor(res.data.color)
    })
    .catch((err) => {
      console.log(err)
    })
}

import { useRouter } from 'next/router'
import React from 'react'

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query
  return (
    <h1>Details for product {productId}</h1>
  )
}

export default ProductDetails
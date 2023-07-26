import { useEffect, useState } from 'react'

import { getProducts } from '@/api/products'
import Product from '@/model/product'

const useGetProductsQuery = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<Error | undefined>()

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      try {
        const products = await getProducts()

        setProducts(products)
        setError(undefined)
      } catch (err) {
        setError(err as Error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { result: products, error, loading }
}

export default useGetProductsQuery

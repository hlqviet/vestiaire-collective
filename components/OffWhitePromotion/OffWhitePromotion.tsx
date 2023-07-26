'use client'

import Table from '@/components/Table'
import TableCell from '@/components/Table/components/TableCell'
import TableHeaderCell from '@/components/Table/components/TableHeaderCell'
import useGetProductsQuery from '@/hooks/useGetProductsQuery'
import Product from '@/model/product'

const OffWhitePromotion = () => {
  const { error, loading, result: products } = useGetProductsQuery()

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  const offWhiteProducts = products.reduce<Product[]>((previous, current) => {
    if (current.brand === 'Off-White') {
      const reducedPrice = (current.price.price_in_cents * 90) / 100
      const price = {
        ...current.price,
        price: `${(reducedPrice / 100).toFixed(2)}${current.price.currency}`,
        price_in_cents: reducedPrice
      }

      return [...previous, { ...current, price }]
    }

    return previous
  }, [])

  return (
    <Table>
      <thead>
        <tr>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Brand</TableHeaderCell>
          <TableHeaderCell>Seller</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
        </tr>
      </thead>
      <tbody>
        {offWhiteProducts.map(({ name, brand, seller, price }) => (
          <tr key={name}>
            <TableCell>{name}</TableCell>
            <TableCell className="text-center">{brand}</TableCell>
            <TableCell>{seller.name}</TableCell>
            <TableCell className="text-right">{price.price}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default OffWhitePromotion

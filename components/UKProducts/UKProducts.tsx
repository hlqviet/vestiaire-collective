'use client'

import Table from '@/components/Table'
import TableCell from '@/components/Table/components/TableCell'
import TableHeaderCell from '@/components/Table/components/TableHeaderCell'
import useGetProductsQuery from '@/hooks/useGetProductsQuery'
import Product from '@/model/product'

const UKProducts = () => {
  const { error, loading, result: products } = useGetProductsQuery()

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  const validProducts = products.reduce<Product[]>((previous, current) => {
    const pound = current.price.price_in_cents / 100

    if (!current.shippable_countries.includes('UK')) return previous

    if (pound < 500 || pound > 1500) return previous

    return [...previous, current]
  }, [])
  const sortedProducts = [...validProducts].sort(
    (a, b) => a.price.price_in_cents - b.price.price_in_cents
  )

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
        {sortedProducts.map(({ name, brand, seller, price }) => (
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

export default UKProducts

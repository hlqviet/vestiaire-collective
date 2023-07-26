'use client'

import Table from '@/components/Table'
import TableCell from '@/components/Table/components/TableCell'
import TableHeaderCell from '@/components/Table/components/TableHeaderCell'
import useGetProductsQuery from '@/hooks/useGetProductsQuery'

const obfuscatedBrandName = 'Louis Vuitton'.split('').reverse().join('')

const LouisVuitton = () => {
  const { error, loading, result: products } = useGetProductsQuery()

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  const obfuscatedProducts = products.map((product) =>
    product.brand === 'Louis Vuitton'
      ? { ...product, brand: obfuscatedBrandName }
      : product
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
        {obfuscatedProducts.map(({ name, brand, seller, price }) => (
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

export default LouisVuitton

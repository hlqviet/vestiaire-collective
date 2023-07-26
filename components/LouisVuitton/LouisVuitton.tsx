'use client'

import { useMemo } from 'react'

import Table from '@/components/Table'
import TableCell from '@/components/Table/components/TableCell'
import TableHeaderCell from '@/components/Table/components/TableHeaderCell'
import useGetProductsQuery from '@/hooks/useGetProductsQuery'

const obfuscatedBrandName = 'Louis Vuitton'.split('').reverse().join('')

const LouisVuitton = () => {
  const { error, loading, result: products } = useGetProductsQuery()

  const rows = useMemo(() => {
    const obfuscatedProducts = products.map((product) =>
      product.brand === 'Louis Vuitton'
        ? { ...product, brand: obfuscatedBrandName }
        : product
    )

    return obfuscatedProducts.map(({ name, brand, seller, price }) => (
      <tr key={name}>
        <TableCell>{name}</TableCell>
        <TableCell className="text-center">{brand}</TableCell>
        <TableCell>{seller.name}</TableCell>
        <TableCell className="text-right">{price.price}</TableCell>
      </tr>
    ))
  }, [products])

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

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
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default LouisVuitton

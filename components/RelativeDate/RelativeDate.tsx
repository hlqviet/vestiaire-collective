'use client'

import { useMemo } from 'react'

import { timeAgo } from '@/common/helpers'
import Table from '@/components/Table'
import TableCell from '@/components/Table/components/TableCell'
import TableHeaderCell from '@/components/Table/components/TableHeaderCell'
import useGetProductsQuery from '@/hooks/useGetProductsQuery'

const RelativeDate = () => {
  const { error, loading, result: products } = useGetProductsQuery()

  const rows = useMemo(() => {
    const transformedProducts = products.map((product) => ({
      ...product,
      relative_date: timeAgo(product.deposited_on)
    }))

    return transformedProducts.map(
      ({ name, brand, seller, price, relative_date }) => (
        <tr key={name}>
          <TableCell>{name}</TableCell>
          <TableCell className="text-center">{brand}</TableCell>
          <TableCell>{seller.name}</TableCell>
          <TableCell className="text-right">{price.price}</TableCell>
          <TableCell className="max-w-xs">{relative_date}</TableCell>
        </tr>
      )
    )
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
          <TableHeaderCell>Deposited</TableHeaderCell>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default RelativeDate

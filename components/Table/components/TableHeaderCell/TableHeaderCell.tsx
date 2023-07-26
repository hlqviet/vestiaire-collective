import { HTMLAttributes } from 'react'

const TableHeaderCell = (props: HTMLAttributes<HTMLTableCellElement>) => {
  const { className, ...rest } = props

  return <th className={`p-2 ${className || ''}`} {...rest} />
}

export default TableHeaderCell

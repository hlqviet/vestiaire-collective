import { HTMLAttributes } from 'react'

const TableCell = (props: HTMLAttributes<HTMLTableCellElement>) => {
  const { className, ...rest } = props

  return <td className={`p-2 ${className || ''}`} {...rest} />
}

export default TableCell

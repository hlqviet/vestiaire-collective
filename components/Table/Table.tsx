import { HTMLAttributes } from 'react'

const Table = (props: HTMLAttributes<HTMLTableElement>) => {
  const { className, ...rest } = props

  return <table className={`my-4 w-full ${className || ''}`} {...rest} />
}

export default Table

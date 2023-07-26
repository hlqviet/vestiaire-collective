import { HTMLAttributes } from 'react'

const Container = (props: HTMLAttributes<HTMLElement>) => {
  return <main className="w-full min-h-screen px-12 py-24" {...props}></main>
}

export default Container

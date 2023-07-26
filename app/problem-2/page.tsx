import Container from '@/components/Container'
import LouisVuitton from '@/components/LouisVuitton'

const Problem1 = () => {
  return (
    <Container>
      <p>
        Louis Vuitton doesn&apos;t want us to display the name of their brand on
        our website, could you reverse the name of the brand for each LV product
        to obfuscate their name?
      </p>
      <LouisVuitton />
    </Container>
  )
}

export default Problem1

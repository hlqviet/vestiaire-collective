import Container from '@/components/Container'
import UKProducts from '@/components/UKProducts'

const Problem1 = () => {
  return (
    <Container>
      <p>
        I&apos;m a user from UK and I want to see product between 1500€ and
        500€, ordered from the cheaper to the most expensive that are shippable
        to my country.
      </p>
      <UKProducts />
    </Container>
  )
}

export default Problem1

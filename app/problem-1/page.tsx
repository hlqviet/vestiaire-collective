import Container from '@/components/Container'
import OffWhitePromotion from '@/components/OffWhitePromotion'

const Problem1 = () => {
  return (
    <Container>
      <p>
        User is coming from an Off-White promotion offer link, display only the
        Off-White&apos;s products with a reduced price of 10%.
      </p>
      <OffWhitePromotion />
    </Container>
  )
}

export default Problem1

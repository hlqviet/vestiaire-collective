import Container from '@/components/Container'
import RelativeDate from '@/components/RelativeDate'

const Problem1 = () => {
  return (
    <Container>
      <p>
        We want to display how many days/month/year since each products has been
        deposited on the website (ie: Deposited 1 month and 3 days ago).
      </p>
      <RelativeDate />
    </Container>
  )
}

export default Problem1

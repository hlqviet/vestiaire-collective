export default interface Product {
  id: number
  name: string
  brand: string
  seller: {
    id: number
    name: string
    country: string
  }
  price: {
    currency: string
    price_in_cents: number
    price: string
  }
  deposited_on: string
  shippable_countries: string[]
}

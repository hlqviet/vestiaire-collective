import data from '@/data/products.json'
import Product from '@/model/product'

const { products } = data

export const getProducts = () => Promise.resolve<Product[]>(products)

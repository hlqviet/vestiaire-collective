import { products } from '@/data/products.json'
import Product from '@/model/product'

export const getProducts = () => Promise.resolve<Product[]>(products)

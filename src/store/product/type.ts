import { IProduct } from '@/types/product'

export interface IProductState {
  products: IProduct[]
  nextPage?: number
}

import { ActionTree } from 'vuex'

import { headers } from '@/api/config'
import { IProductState } from './type'
import { IRootState } from '@/store/type'

export enum ACTIONS {
  GET_PRODUCTS = 'GET_PRODUCTS',
}

export const actions: ActionTree<IProductState, IRootState> = {
  [ACTIONS.GET_PRODUCTS](): unknown {
    return new Promise((resolve, reject) => {
      return fetch('/v1/products', {
        headers,
        method: 'GET',
      })
        .then((data) => data.json())
        .then((data) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

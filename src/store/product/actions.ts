import { ActionTree } from 'vuex'

import { headers } from '@/api/config'
import { IProductState } from './type'
import { IRootState } from '@/store/type'
import { MUTATIONS } from './mutations'

export enum ACTIONS {
  GET_PRODUCTS = 'GET_PRODUCTS',
}

export const actions: ActionTree<IProductState, IRootState> = {
  [ACTIONS.GET_PRODUCTS]({ commit }): unknown {
    return new Promise((resolve, reject) => {
      const node_env = process.env.NODE_ENV
      const baseUrl = process.env.VUE_APP_API_URL
      console.log('NODE_ENV', node_env)
      console.log('BASE_URL', baseUrl)
      return fetch(
        `${
          node_env === 'production' ? baseUrl : ''
        }/v1/products?per_page=${21}`,
        {
          headers,
          method: 'GET',
        }
      )
        .then((data) => {
          commit(
            MUTATIONS.SET_NEXT_PAGE,
            Number(data.headers.get('x-next-page'))
          )
          return data.json()
        })
        .then((data) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

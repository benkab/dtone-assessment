import { ActionTree } from 'vuex'

import { headers } from '@/api/config'
import { IProductState } from './type'
import { IRootState } from '@/store/type'
import { MUTATIONS } from './mutations'

const PER_PAGE = 21

export enum ACTIONS {
  GET_PRODUCTS = 'GET_PRODUCTS',
}

export const actions: ActionTree<IProductState, IRootState> = {
  [ACTIONS.GET_PRODUCTS]({ commit, state }): unknown {
    return new Promise((resolve, reject) => {
      console.log('state', state)
      return fetch(`/v1/products?per_page=${PER_PAGE}&page=${state.nextPage}`, {
        headers,
        method: 'GET',
      })
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

import { GetterTree } from 'vuex'

import { IProductState } from './type'
import { IRootState } from '@/store/type'

export enum GETTERS {
  GET_NEXT_PAGE = 'getNextPage',
}

export const getters: GetterTree<IProductState, IRootState> = {
  [GETTERS.GET_NEXT_PAGE](state) {
    return state.nextPage
  },
}

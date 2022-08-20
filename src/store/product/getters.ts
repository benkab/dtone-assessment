import { GetterTree } from 'vuex'

import { IProductState } from './type'
import { IRootState } from '@/store/type'

export enum GETTERS {
  GET_PROJECTS = 'getProjects',
}

export const getters: GetterTree<IProductState, IRootState> = {
  [GETTERS.GET_PROJECTS](state) {
    return state.products
  },
}

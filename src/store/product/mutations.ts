import { MutationTree } from 'vuex'

import { IProductState } from './type'

export enum MUTATIONS {
  SET_PROJECTS = 'setProjects',
  SET_NEXT_PAGE = 'setNextPage',
}

export const mutations: MutationTree<IProductState> = {
  [MUTATIONS.SET_PROJECTS](state, payload: IProductState) {
    state.products = payload.products
  },
  [MUTATIONS.SET_NEXT_PAGE](state, payload: number) {
    state.nextPage = payload
  },
}

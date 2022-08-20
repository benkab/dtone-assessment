import { MutationTree } from 'vuex'

import { IProductState } from './type'

export enum MUTATIONS {
  SET_PROJECTS = 'setProjects',
}

export const mutations: MutationTree<IProductState> = {
  [MUTATIONS.SET_PROJECTS](state, payload: IProductState) {
    state.products = payload.products
  },
}

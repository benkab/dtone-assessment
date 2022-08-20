import { Module } from 'vuex'
import { IRootState } from '@/store/type'

import { IProductState } from './type'

import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export const product: Module<IProductState, IRootState> = {
  state,
  mutations,
  actions,
  getters,
}

import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { IRootState } from '@/store/type'
import { product } from './product'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store: StoreOptions<IRootState> = {
  modules: {
    product,
  },
  strict: debug,
}

export default new Vuex.Store<IRootState>(store)

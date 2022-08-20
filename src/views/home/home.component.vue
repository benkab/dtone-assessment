<template src="./home.component.html" />
<style lang="scss" src="./home.component.scss"></style>

<script lang="ts">
import { mapState } from 'vuex'
import { ACTIONS } from '@/store/product/actions'
import { IProduct } from '@/types/product'

import Container from '@/components/layouts/container/container.component'
import Loaders from '@/components/organisms/loaders/loaders.component'
import Modal from '@/components/molecules/modal/modal.component'
import Navbar from '@/components/organisms/navbar/navbar.component'
import Product from '@/components/organisms/product/product.component'
import Textfield from '@/components/atoms/textfield/textfield.component'
import Typography from '@/components/atoms/typography/typography.component'

interface IProductList {
  loading: boolean
  error?: string
  data: IProduct[]
}

export default {
  name: 'HomeView',
  data() {
    return {
      products: {
        loading: false,
        data: [],
      } as IProductList,
      visibleProducts: [] as IProduct[],
      loadingMore: false,
    }
  },
  components: {
    Container,
    Modal,
    Navbar,
    Product,
    Textfield,
    Typography,
    Loaders,
  },
  computed: {
    ...mapState({
      product: (state) => state.product,
    }),
    nextPage: {
      get(): string {
        return this.$store.state.product.nextPage
      },
    },
    canLoadMore() {
      return Boolean(this.nextPage)
    },
  },
  methods: {
    loadProducts(): void {
      this.products = {
        loading: true,
        data: [],
      }
      this.$store
        .dispatch(ACTIONS.GET_PRODUCTS)
        .then((data) => {
          this.products = {
            loading: false,
            data: [...this.products.data, ...data],
          }
          this.visibleProducts = [...this.visibleProducts, ...data]
          this.loadingMore = false
        })
        .catch((error) => {
          this.products = {
            loading: false,
            error: JSON.stringify(error),
          }
          this.loadingMore = false
        })
    },
    onFilter(text: string) {
      if (!text) {
        this.visibleProducts = this.products.data
      } else {
        this.visibleProducts = this.products.data.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        )
      }
    },
    onLoadMore() {
      if (!this.canLoadMore) {
        return
      }
      this.loadingMore = true
      this.loadProducts()
    },
  },
  created() {
    this.loadProducts()
  },
}
</script>

<template src="./home.component.html" />
<style lang="scss" src="./home.component.scss"></style>

<script lang="ts">
import { ACTIONS } from '@/store/product/actions'
import { IProduct } from '@/types/product'
import { GETTERS } from '@/store/product/getters'

import Container from '@/components/layouts/container/container.component'
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
      step: 9,
      paginationLimit: 9,
      pageLimit: 18,
      canLoadMore: false,
    }
  },
  components: {
    Container,
    Modal,
    Navbar,
    Product,
    Textfield,
    Typography,
  },
  computed: {
    nextPage() {
      return this.$store.state.nextPage
      // console.log('store', this.$store.getters)
      // return Boolean(this.$store.getters.getNextPage)
    },
  },
  methods: {
    loadProducts(): void {
      this.products = {
        loading: true,
        data: [],
      }
      this.$store
        .dispatch(ACTIONS.GET_PRODUCTS, this.pageLimit)
        .then((data) => {
          this.products = {
            loading: false,
            data,
          }
          this.visibleProducts = data
        })
        .catch((error) => {
          this.products = {
            loading: false,
            error: JSON.stringify(error),
          }
        })
    },
    onFilter(text: string) {
      if (!text) {
        this.visibleProducts = this.products.data.slice(0, this.paginationLimit)
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
      const newLimit = this.paginationLimit + this.step
      this.visibleProducts = this.products.data.slice(0, newLimit)
      this.paginationLimit = newLimit
    },
  },
  created() {
    this.loadProducts()
  },
}
</script>

<template src="./home.component.html" />
<style lang="scss" src="./home.component.scss"></style>

<script lang="ts">
import { ACTIONS } from '@/store/product/actions'
import { IProduct } from '@/types/product'

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
    canGoBack() {
      return this.paginationLimit > this.step
    },
    canGoForward() {
      return this.paginationLimit < this.products.data.length - 1
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
            data,
          }
          this.visibleProducts = data.slice(0, this.paginationLimit)
        })
        .catch((error) => {
          this.products = {
            loading: false,
            error: JSON.stringify(error),
          }
        })
    },
    onSearch(text: string) {
      if (!text) {
        this.visibleProducts = this.products.data.slice(0, this.paginationLimit)
      } else {
        this.visibleProducts = this.products.data.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        )
      }
    },
    onShowNext() {
      if (!this.canGoForward) {
        return
      }
      const newLimit = this.paginationLimit + this.step
      this.visibleProducts = this.products.data.slice(
        this.paginationLimit,
        newLimit
      )
      this.paginationLimit = newLimit
    },
    onShowPrevious() {
      if (!this.canGoBack) {
        return
      }
      const newLimit = this.paginationLimit - this.step
      this.visibleProducts = this.products.data.slice(
        newLimit,
        this.paginationLimit
      )
      this.paginationLimit = newLimit
    },
  },
  created() {
    this.loadProducts()
  },
}
</script>

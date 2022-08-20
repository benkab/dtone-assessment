<template src="./product.component.html" />
<style lang="scss" src="./product.component.scss"></style>

<script lang="ts">
import { PropType } from 'vue'
import { ProductBus } from '@/main'
import { IProduct } from '@/types/product'
import Tags from '@/components/molecules/tags/tags.component'
import Typography from '@/components/atoms/typography/typography.component'

export default {
  name: 'Product',
  components: {
    Tags,
    Typography,
  },
  props: {
    product: {
      type: Object as PropType<IProduct>,
    },
  },
  methods: {
    onViewMore() {
      ProductBus.$emit('product', this.product)
    },
  },
}
</script>

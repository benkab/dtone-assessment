<template src="./modal.component.html" />
<style lang="scss" src="./modal.component.scss"></style>

<script lang="ts">
import { ProductBus } from '@/main'
import { capitalize } from '@/helpers/string'
import { beautifyNumber } from '@/helpers/number'
import { productTypeMap } from '@/constants/product'
import Typography from '@/components/atoms/typography/typography.component'
import Tags from '@/components/molecules/tags/tags.component'

export default {
  name: 'Modal',
  data() {
    return {
      product: undefined,
    }
  },
  components: {
    Tags,
    Typography,
  },
  methods: {
    onCloseModal() {
      ProductBus.$emit('product', undefined)
    },
    formatNumber(num: number) {
      return num.toString() === '0' ? beautifyNumber(num) : num.toString()
    },
    capitalizeText(text: string): string {
      return capitalize(text)
    },
  },
  computed: {
    productTypeDescription() {
      return productTypeMap[this.product?.type]
    },
  },
  created() {
    ProductBus.$on('product', (data) => {
      this.product = data
    })
  },
}
</script>

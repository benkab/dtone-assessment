<template src="./loaders.component.html" />
<style lang="scss" src="./loaders.component.scss"></style>

<script lang="ts">
import Typography from '@/components/atoms/typography/typography.component'

export default {
  name: 'Loaders',
  props: {
    text: {
      required: true,
      type: String,
    },
  },
  components: {
    Typography,
  },
}
</script>

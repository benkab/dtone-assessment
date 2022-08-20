<template src="./tags.component.html" />
<style lang="scss" src="./tags.component.scss"></style>

<script lang="ts">
import { PropType } from 'vue'
import Typography from '@/components/atoms/typography/typography.component'
import { capitalize } from '@/helpers/string'

export default {
  name: 'Tags',
  components: {
    Typography,
  },
  props: {
    tags: {
      required: true,
      type: Array as PropType<string[]>,
    },
  },
  methods: {
    capitalizeText(text: string): string {
      return capitalize(text)
    },
  },
}
</script>

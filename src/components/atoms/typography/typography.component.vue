<template src="./typography.component.html" />
<style lang="scss" src="./typography.component.scss" scoped></style>

<script lang="ts">
export default {
  name: 'Typography',
  props: {
    text: {
      required: true,
      type: String,
    },
    className: {
      required: false,
      type: String,
    },
  },
}
</script>

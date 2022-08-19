<template src="./textfield.component.html" />
<style lang="scss" src="./textfield.component.scss" scoped></style>

<script lang="ts">
import Typography from '@/components/atoms/typography/typography.component'

export default {
  name: 'Textfield',
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    error: {
      required: false,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
    placeholder: {
      required: false,
      type: String,
    },
    // onChange: {
    //   type: Function,
    //   default: function () {},
    // },
    value: {
      type: String,
      default: '',
    },
  },
  components: {
    Typography,
  },
}
</script>

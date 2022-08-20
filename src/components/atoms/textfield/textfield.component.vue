<template src="./textfield.component.html" />
<style lang="scss" src="./textfield.component.scss" scoped></style>

<script lang="ts">
import Typography from '@/components/atoms/typography/typography.component'

export default {
  name: 'Textfield',
  data() {
    return {
      input: '',
    }
  },
  watch: {
    input: function (val: string) {
      this.onInputChange(val)
    },
  },
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
    noMargin: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      required: false,
      type: String,
    },
    onInputChange: {
      required: true,
      type: Function,
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      required: false,
      type: String,
      default: 'text',
    },
  },
  components: {
    Typography,
  },
  methods: {
    onChange(e: {
      target: {
        value: string
      }
    }) {
      this.onInputChange(e.target.value)
    },
  },
}
</script>

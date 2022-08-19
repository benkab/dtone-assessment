<template src="./home.component.html" />
<style lang="scss" src="./home.component.scss"></style>

<script lang="ts">
import Container from '@/components/layouts/container/container.component'
import Typography from '@/components/atoms/typography/typography.component'
import Textfield from '@/components/atoms/textfield/textfield.component'

export default {
  name: 'HomeView',
  components: {
    Typography,
    Container,
    Textfield,
  },
}
</script>

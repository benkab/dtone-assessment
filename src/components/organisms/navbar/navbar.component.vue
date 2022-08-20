<template src="./navbar.component.html" />
<style lang="scss" src="./navbar.component.scss"></style>

<script lang="ts">
import Container from '@/components/layouts/container/container.component'
import Typography from '@/components/atoms/typography/typography.component'

export default {
  name: 'Navbar',
  components: {
    Typography,
    Container,
  },
}
</script>

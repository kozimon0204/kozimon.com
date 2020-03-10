<template>
  <div>
    <headerNav />
    <nuxt/>
    <footerNav />
  </div>
</template>

<script>
import HeaderNav from '~/components/Header'
import FooterNav from '~/components/Footer'

export default {
  components: {
    HeaderNav,
    FooterNav
  }
}
</script>

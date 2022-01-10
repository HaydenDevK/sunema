<template>
  <section v-if="keywordSearch && keywordSearch.mediaKeywords && keywordSearch.mediaKeywords.length &&  keywordSearch.mediaKeywords.length > 0" class="wrapper-btn-type">
    <button
      class="btn-type"
      @click="handleMediaType('movie')"
    >
      <p :class="{active: keywordSearch.mediaType === 'movie'}">
        영화
      </p>
    </button>
    <button class="btn-type" @click="handleMediaType('tv')">
      <p :class="{active: keywordSearch.mediaType === 'tv'}">
        티비 프로그램
      </p>
    </button>
  </section>
</template>

<script>
export default {
  name: 'TabMediaType.vue',
  data () {
    return {
      keywordSearch: {}
    }
  },
  mounted () {
    this.keywordSearch = this.$store.state.keywordSearch
  },
  methods: {
    handleMediaType (type) {
      this.$store.dispatch('keywordSearch/getKeywordMediaElse', type)
    }
  }
}
</script>

<style scoped>

</style>
